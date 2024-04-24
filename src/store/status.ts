import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

import { useTeamStore, useUserStore } from "@/store";
import {
  TQuestionID,
  TQuestionOptionID,
  TTeamID,
  TRequestID,
  TTeamMemberID,
  TScoreID,
  TExerciseID,
} from "@/utils/types"
import { StatusAPI } from "@/utils/actions";

const teamStore = useTeamStore()
const userStore = useUserStore()
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
  const questionnaire  : any = ref(null);
  const dimensions  = ref();
  // schedulers is of type ISchedule[]
  const schedulers = ref();
  
  // requests is of type Map<TTeamID, IRequest>
  const requests = ref();
  
  // defaultResponses is of type Map<TTeamID, IResponse>
  const defaultResponses = ref();
  // const lastResponse = ref();
  const lastResponse: any = ref(null);
  // responses is of type Map<TResponseID, IQuestionnaireResponse>
  // Only uses POST, never GET
  const responses = ref();
  
  // scores is of type <TTeamID, IScore[]>
  const scores = ref();
  
  // is of type <TTeamID, INotes[]>
  const notes = ref();
  // const questionnaire = new APIListObject('questionnaire', 'v1/status/team/questionnaire/active/')
  async function getQuestionNaire() {
    questionnaire.value = await StatusAPI.getQuestionNaire();
}
// dimensions is of type IDimensions
// const dimensions = new APIListObject('dimensions', 'v1/status/team/dimensions/active/')
async function getDimensions() {
  dimensions.value = await StatusAPI.getDimensions();
}
async function getSchedulers() {
  schedulers.value = await StatusAPI.getSchedulers();
}
async function getRequests() {
  // todo need to change that id 
  const payload = {
    teamID : '60d84fb36d8e42838966350ddc3ac956'
  }
  requests.value = await StatusAPI.getRequests(payload);
}
async function getLastResponse(teamId :any) {
  // todo need to change that id 
  const payload = {
    teamID : teamId
  }
  lastResponse.value = await StatusAPI.getLastResponse(payload);
  
  console.log(lastResponse.value)
  
}
async function submitSurvey() {
  const obj = Object.fromEntries(lastResponse.value);
  console.log(obj)
  const payload = {
    data : obj
  }
  const res =  await StatusAPI.submitSurvey(payload)
}

  
 
  const schedulerPeriodDict: ISchedulerPeriodDict = {
    w: 'weeks',
    m: 'months'
  }
interface IData {
    labels: string[],
    data: number[]
  }
  



  return {
    questionnaire,
    dimensions,
    schedulers,
    lastResponse,
    requests,
    defaultResponses,
    responses,
    scores,
    notes,
    getDimensions,
    getQuestionNaire,
    getSchedulers,
    getRequests,
    getLastResponse,
    submitSurvey
    
  }
})

export default useStatusStore;
