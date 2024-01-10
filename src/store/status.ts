import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

import { useTeamStore } from "@/store";
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
  const questionnaire  = ref();
  const dimensions  = ref();
  // schedulers is of type ISchedule[]
  const schedulers = ref();
  
  // requests is of type Map<TTeamID, IRequest>
  const requests = ref();
  
  // defaultResponses is of type Map<TTeamID, IResponse>
  const defaultResponses = ref();
  
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
  questionnaire.value = await StatusAPI.getDimensions();
}
async function getSchedulers() {
  schedulers.value = await StatusAPI.getSchedulers();
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
    requests,
    defaultResponses,
    responses,
    scores,
    notes,
    getDimensions,
    getQuestionNaire,
    getSchedulers,
    
  }
})

export default useStatusStore;
