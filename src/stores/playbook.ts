import { computed } from 'vue'
import { defineStore } from "pinia";
import { APIMapObject, APIListObject } from "@/utils/saveables";
import {
    TUserID,
    TTeamID,
    TPlayID,
    TRoleString,
    TRoleNumber,
    TKnownVia,
    TTeamRequestID,
    TExerciseID,
    TExerciseScoresID, 
    TRequestID,
    TPlayUsageID
} from '@/utils/types'


// ==========================================================
// Interfaces
// ==========================================================

export interface IPlay {
    initial_scores: {
        [key: string]: number
    },
    title: string,
    description: string,
    video: string|null,
    frequency: [string, string],  // e.g. "('X', 'X times')"
    information_url: string,
    information_text: string,
    created_at: string,
    updated_at: string,
    when: [string, string]  // e.g. "('TE', 'Team')"
}

export interface IPlaybookScores {
    [teamID: TTeamID] : {
        [playID: TPlayID] : number
    }
}

export interface IRep {
    id: string,
    date: Date,
    amount: number,
    score: number,
    note?: string,
}

export interface IExercise {
    team: TTeamID,
    play: TPlayID,
    responsible: string, // e-mail
    completed: boolean,
    created_at: string,
    updated_at: string,
    is_active: boolean
}

export interface IExerciseResponse {
    id?: string,
    exercise: TExerciseID,
    team_request: TTeamRequestID,
    score: number,
    note?: string,
}

export interface IExerciseCompletion {
    team?: string,
    date: Date,
    role: string
}

export interface ICompletedExercise {
    playID: TPlayID,
    completions: IExerciseCompletion[],
    lastCompletion: string,
    roles: TRoleString[],
    highestRole: TRoleString
}

export interface IExerciseHelp {
    userID: TUserID,
    first_name: string,
    last_name: string,
    email: string,
    lastExperienceDate: Date,
    experienceAs: TRoleNumber[],
    knownVia: TKnownVia[],
    fit: number,
}

export interface IScores {
    id: TExerciseScoresID,
    request: TRequestID,
    exercise: TExerciseID,
    notes: string[],
    request_end_date: string,
    score: number,
    created_at: string,
}

export interface IUsage {
    id: TPlayUsageID,
    play: TPlayID,
    love: boolean,
    created_at: string,
    updated_at: string,
}

// ==========================================================
// Store
// ==========================================================

export const usePlaybookStore = defineStore('Playbook', () => {

    // responses is of type Map<TPlayID, IQuestionnaireResponse>
    const playbook = new APIMapObject('playbook', 'v1/playbook/team/')

    // responses is of type Map<TExerciseID, IExercise>
    const exercises = new APIMapObject('exercises', 'v1/playbook/team/exercises/')

    // responses is of type IExerciseResponse[]
    // Only for POST, not for GET
    const exerciseResponses = new APIListObject('exerciseResponses', 'v1/playbook/team/exercises/response/')

    // responses is of UNKNOWN type as of yet
    // Not implemented yet in API
    const exerciseHelp = new APIListObject('exerciseHelp', 'v1/playbook/team/exercises/help/')

    // teamPlayScores is of type Map<TTeamID, {[key: TPlayID]: number}>
    const teamPlayScores = new APIMapObject('playScores', 'v1/playbook/team/plays/scores/')

    // teamExerciseScores is of type Map<TTeamID, IScores>
    const teamExerciseScores = new APIMapObject('exerciseScores', 'v1/playbook/team/exercises/scores/')

    // usage is of type TPlayUsageID[]
    const usage = new APIListObject('playbookusage', 'v1/playbook/team/plays/usage/')

    const teamExercises = computed(() => {
        return (teamID: string) => {
            return exercises.list.value.filter(e => e.team == teamID)
        }
    })

    const teamExerciseScore = computed(() => {
        return (teamID: TTeamID, exerciseID: string) => {
            let currentTeamExercisesScores = teamExerciseScores.value.get(teamID)
            if (!currentTeamExercisesScores) return undefined
            return currentTeamExercisesScores.find((e: any) => e.exercise=exerciseID)
        }
        
    })

    async function fetch() {
        await Promise.all([
            playbook.fetch(),
            exercises.fetch(),
            teamPlayScores.fetch(),
            teamExerciseScores.fetch(),
            usage.fetch(),
        ])
    }

    function defaultExerciseResponse(teamID: string, surveyID: string) {
        let returnList = []
        for (let exercise of teamExercises.value(teamID)) {
            returnList.push({
                exercise: exercise.id,
                team_request: surveyID,
                score: 7,
                note: ""
            })
        }
        return returnList
    }
    
    return {
        playbook,
        exercises,
        exerciseResponses,
        exerciseHelp,
        teamPlayScores,
        teamExerciseScores,
        usage,
        fetch,
        teamExercises,
        teamExerciseScore,
        defaultExerciseResponse,
    }
});
