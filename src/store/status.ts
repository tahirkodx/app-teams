import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

import { useTeamStore } from "./team";
import {
  TQuestionID,
  TQuestionOptionID,
  TTeamID,
  TRequestID,
  TTeamMemberID,
  TScoreID,
  TExerciseID,
} from "@/utils/types"


// ==========================================================
// Interfaces
// ==========================================================

export type IDimensions = string[]

export interface ISchedulerPeriodDict {
  w: string,
  m: string
}

export interface IQuestionnaire {
  name: string,
  question: {
      id: TQuestionID,
      options: {
          id: TQuestionOptionID,
          favourable: string,
          unfavourable: string,
      }[],
      description_low: string,
      description_midlow: string,
      description_medium: string,
      description_midhigh: string,
      description_high: string
  }
}[]

export interface ISchedule {
  id?: string,
  team: string,
  start_date: string,
  period: string,
  interval: number,
  spacer_period: string,
  week_count: number,
  day_count: number,
  duration: number,
  created_at: string,
  updated_at: string,
}

export interface IRequest {
  id: string,
  invite_id: string|null,
  team: string,
  scheduler: string|null,
  responded: boolean,
  original_start: string,
  start: string,
  end: string,
  is_send: boolean,
  created_at: string,
}

export interface IResponseQuestionOption {
  favourable: boolean,
  unfavourable: boolean,
}

export interface IResponseQuestionOptions {
  [key: string] : IResponseQuestionOption
}

export interface IQuestionResponse {
  response_low: boolean,
  response_midlow: boolean,
  response_medium: boolean,
  response_midhigh: boolean,
  response_high: boolean,
  options: IResponseQuestionOptions
}

export interface IResponse {
  [key: TQuestionID]: IQuestionResponse
}

export interface IQuestionResponseWithID extends IQuestionResponse {
  id: TQuestionID
}

export interface IQuestionnaireResponse {
  question_response: IQuestionResponseWithID[],
  request: TRequestID,
  teammember: TTeamMemberID,
  team: TTeamID,
  created_at: string,
  updated_at: string,
}

export interface IScore {
  id: TScoreID,
  request: string,
  team: string,
  dim_score_dict: {
      [key: string]: number,
  },
  score: number,
  rank: number,
  created_at: string,
}

export interface INotes {
  exercise: TExerciseID,
  score: number,
  notes: string[],
  timeline: {
    dates: string[],
    scores: number[]
  }
}


// ==========================================================
// Store
// ==========================================================

const useStatusStore = defineStore('status', () => {
  
  // questionnaire is of type IQuestionnaire
  const questionnaire = new APIListObject('questionnaire', 'v1/status/team/questionnaire/active/')
  
  // dimensions is of type IDimensions
  const dimensions = new APIListObject('dimensions', 'v1/status/team/dimensions/active/')
  
  // schedulers is of type ISchedule[]
  const schedulers = new APIListObject('scheduler', 'v1/status/team/scheduler/')
  
  // requests is of type Map<TTeamID, IRequest>
  const requests = new APIMapObject('request', 'v1/status/team/request/')
  
  // defaultResponses is of type Map<TTeamID, IResponse>
  const defaultResponses = new APIMapObject('response', 'v1/status/team/response/default/')
  
  // responses is of type Map<TResponseID, IQuestionnaireResponse>
  // Only uses POST, never GET
  const responses = new APIMapObject('response', 'v1/status/team/response/')
  
  // scores is of type <TTeamID, IScore[]>
  const scores = new APIMapObject('score', 'v1/status/team/score/')
  
  // is of type <TTeamID, INotes[]>
  const notes = new APIMapObject('exerciseNotes', 'v1/status/team/notes/')

  const teamStore = useTeamStore()

  // -----------------------------------------------
  // Scheduler
  // -----------------------------------------------

  const schedulerPeriodDict: ISchedulerPeriodDict = {
    w: 'weeks',
    m: 'months'
  }

  const schedulerText = computed(() => {
    return (schedule: ISchedule) => {
      let s = "Every " + schedule.interval + " " + schedulerPeriodDict[schedule.period as keyof ISchedulerPeriodDict]
      s += " for "
      if (schedule.duration > 24) s += Math.floor(schedule.duration / 24) + ' days'
      if (schedule.duration > 24 && schedule.duration % 24 > 0) s += Math.floor(schedule.duration / 24) + ' and'
      if (schedule.duration % 24 > 0) s += schedule.duration % 24 + ' hours'
      if (schedule.period == 'w') {
        let startDay = new Date(schedule.start_date)
        let dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        s += ' starting on ' + dayList[startDay.getDay() - 1] + 's' + ' at ' + schedule.start_date.slice(11, 20)
      } else {
        
      }
      s += '.'
      return s
      
    }
  })

  const teamSchedulers = computed(() => {
    return (teamID: TTeamID) => {
      let currentTeamSchedulers = schedulers.value.filter((s: ISchedule) => s.team == teamID)
      if (currentTeamSchedulers === undefined) return []
      return currentTeamSchedulers
    }
  })


  // -----------------------------------------------
  // Surveys
  // -----------------------------------------------

  const activeSurveys = computed(() => {
    let activeSurveys = []
    let now = new Date()
    for (let [teamID, requestList] of requests.value.entries()){
      for (let request of requestList) {
        let startDate = new Date(request.start)
        let endDate = new Date(request.end)
        if (
          !request.responsed
          && startDate < now
          && endDate > now
          ) {
          request['teamID'] = teamID
          activeSurveys.push(request)          
        }
      }
      
    }
    return activeSurveys
  })

  const teamSurveys = computed(() => {
    return (teamID: TTeamID) => {
      let teamSurveys = requests.value.get(teamID)
      if (teamSurveys === undefined) return []
      return teamSurveys
    }
  })

  const teamComingSurveys = computed(() => {
    return (teamID: TTeamID) => {
      return teamSurveys.value(teamID).filter((s: IRequest) => {
        let startDate = new Date(s.start)
        let now = new Date()
        return startDate > now
      })
    }
  })

  const teamActiveSurveys = computed(() => {
    return (teamID: TTeamID) => {
      return teamSurveys.value(teamID).filter((s: IRequest) => {
        let start = new Date(s.start)
        let end = new Date(s.end)
        let now = new Date(Date.now())
        return (!s.responded && start < now && now < end)
      })
    }
  })

  const teamSurveysCalendarFormat = computed(() => {
    return (teamID: TTeamID) => {
      let formattedDates = []
      for (let survey of teamSurveys.value(teamID)) {
        let start = new Date(survey.start)
        let end = new Date(survey.end)
        let currentDate = new Date(survey.start)
        currentDate.setDate(currentDate.getDate() + 1)

        formattedDates.push({
          date: start.toISOString().slice(0, 10),
          textColor: 'var(--ion-color-secondary)',
          backgroundColor: '',
        })
        while (currentDate < end) {
          formattedDates.push({
            date: currentDate.toISOString().slice(0, 10),
            textColor: 'var(--ion-color-secondary)',
            backgroundColor: '',
          })
          currentDate.setDate(currentDate.getDate() + 1)
        }
        formattedDates.push({
          date: end.toISOString().slice(0, 10),
          textColor: 'var(--ion-color-secondary)',
          backgroundColor: '',
        })
      }
      return formattedDates
    }
  })


  // -----------------------------------------------
  // Scores
  // -----------------------------------------------

  interface IData {
    labels: string[],
    data: number[]
  }

  const teamLastDimScores = computed(() => {
    /*
    * List of last survey scores for current active team
    * Returns:
    * {
    *     labels: [list of labels],
    *     data: [list of floats]
    * }
    */
   return (teamID: TTeamID): IData => {
      let team_score_object_list = scores.value.get(teamID)
      if (team_score_object_list === undefined) return {labels: [], data: []}
      let s = team_score_object_list[team_score_object_list.length - 1]['dim_score_dict']
      console.log(s)
      if (s === undefined){
        return {labels: [], data: []}
      } else {
        return {
          labels: Object.keys(s).map(str => str.includes(' ') ? str.split(' ') : str) as string[],
          data: Object.values(s),
        }
      }
    }
  })

  const teamCurrentScore = computed(() => {
    return (teamID: TTeamID) => {
      let team_score_object_list = scores.value.get(teamID)
      if (team_score_object_list === undefined) return 0
      let s = team_score_object_list[team_score_object_list.length - 1]['score']
      if (s === undefined) return 0
      return s
    }
  })

  const teamHasDimScores = computed(() => {
    return (teamID: TTeamID) => {
      return teamLastDimScores.value(teamID).data.length > 0
    }
  })

  const teamActiveScoreGrowth = computed(() => {
    return (teamID: TTeamID) => {
      let team_score_object_list = scores.value.get(teamID)
      if (team_score_object_list === undefined || team_score_object_list.length < 2) {
        return undefined
      } else {
        let current_score = team_score_object_list[team_score_object_list.length - 1]['score']
        let previous_score = team_score_object_list[team_score_object_list.length - 2]['score']
        return (current_score - previous_score)
      }
    }
  })

  const teamActiveRank = computed(() => {
    return (teamID: TTeamID) => {
      let team_score_object_list = scores.value.get(teamID)
      if (team_score_object_list === undefined) return 100
      let s = team_score_object_list[team_score_object_list.length - 1]['rank']
      if (s === undefined) return 100
      return s
    }
  })

  const teamActiveScores = computed(() => {
    return (teamID: TTeamID) => {
      let team_score_object_list = scores.value.get(teamID)
      if (team_score_object_list) {
        return {dates: [], scores: []}
      } else {
        return {
          dates: team_score_object_list.map((scoreObject: IScore) => scoreObject.score),
          scores: team_score_object_list.map((scoreObject: IScore) => scoreObject.created_at)
        }
      }
    }
  })


  // -----------------------------------------------
  // Notes
  // -----------------------------------------------

  /**
   * For a specific team, get the notes that belong to a specific exercise
   * @param  teamID     {string}
   * @param  exerciseID {string}
   * @return e
   */
  const getNotesReport = computed(() => {
    return (teamID: any, exerciseID: any) => {
      let teamNotes = notes.value.get(teamID)
      if (teamNotes) {
        return teamNotes.filter((e: any) => e.exercise == exerciseID)
      } else {
        return {}
      }
    }
  })


  // -----------------------------------------------
  // Other
  // -----------------------------------------------

  function request(teamID: string, surveyID: string){
    return requests.value.get(teamID).find((r: IRequest) => r.id == surveyID)
  }

  function getDefaultResponse(teamID: string, requestID: string){
    let defaultResponseAPI = defaultResponses.value.get(teamID)
    return {
      request: requestID,
      question_response: (defaultResponseAPI ? defaultResponseAPI : defaultResponse.value)

    }
  }

  const defaultResponse = computed(() => {
    /*
     * Return response of type:
     * {
     *   request: requestID
     *   question_response: {
     *     [questionID]: {
     *       response_low: bool,
     *       response_midlow: bool,
     *       response_mid: bool,
     *       response_midhigh: bool,
     *       response_high: bool,
     *       options: {
     *         [optionID]: {
     *           favourable: bool,
     *           unfavourable: bool,
     *         }
     *       }
     *     }
     *   }
     * }
     */
    let response = {} as IResponse
    for (let question of questionnaire.value){
      let question_response = {
        response_low: false,
        response_midlow: false,
        response_medium: true,
        response_midhigh: false,
        response_high: false,
        options: {},
      } as IQuestionResponse
      for (let option of question.question.options) {
        question_response.options[option.id as keyof IResponseQuestionOptions] = {
          favourable: false,
          unfavourable: false,
        }
      }
      response[question.question.id as keyof IResponse] = question_response
    }
    return response
  })

  async function fetch() {
    return Promise.all([
      questionnaire.fetch(),
      dimensions.fetch(),
      schedulers.fetch(),
      requests.fetch(),
      defaultResponses.fetch(),
      scores.fetch(),
    ])
  }

  function newRequestNow(start: String, end: String, teamID: string){
    requests.create({start: start, end: end, team: teamID})
  }

  return {
    questionnaire,
    dimensions,
    schedulers,
    requests,
    defaultResponses,
    responses,
    scores,
    notes,
    teamSurveys,
    teamComingSurveys,
    teamActiveSurveys,
    teamSurveysCalendarFormat,
    teamSchedulers,
    schedulerText,
    teamLastDimScores,
    teamHasDimScores,
    teamCurrentScore,
    teamActiveScores,
    teamActiveScoreGrowth,
    teamActiveRank,
    activeSurveys,
    schedulerPeriodDict,
    getNotesReport,
    request,
    fetch,
    newRequestNow,
    getDefaultResponse,
  }
})

export { useStatusStore }
