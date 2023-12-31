import { computed } from "vue";
import { defineStore } from "pinia";
import { APIMapObject } from "@/utils/saveables";
import { TCourseID, TLessonID, TTeamID, TPlayID } from "@/utils/types";


// ==========================================================
// Interfaces
// ==========================================================

export interface ILessonStatus {
    have_seen: boolean,
    time: number,
}

export interface IContent {
    id?: number,
    time: number,
    description: string,
    lesson?: number
}

export interface ILesson {
    id?: TLessonID,
    slug: string,
    order: number,
    title: string,
    video: string,
    description: string,
    content: IContent[],
    course: TCourseID,
    plays: TPlayID[]
}

export interface ICourse {
    id?: TCourseID,
    slug: string,
    title: string,
    category: string,
    description: string,
    lessons: [ILesson],
}

export type MStatusCourses = Map<TCourseID, Map<TLessonID, ILessonStatus>>
export type MCourses = Map<TCourseID, ICourse>


// ==========================================================
// Defaults
// ==========================================================

const defaultStatusLesson = {
    have_seen: false,
    time: 0,
} as ILessonStatus

export const defaultCourse = {
    category: "",
    title: "",
    description: "",
    lessons: new Map<TLessonID, ILesson>(),
}

// ==========================================================
// Store
// ==========================================================

export const useAcademyStore = defineStore("Academy", () =>{

    // courses is of type Map<TCourseID, ICourse>
    const courses = new APIMapObject('courses', 'v1/academy/team/courses/')

    // status is of type Map<TCourseID, Map<TLessonID, ILessonStatus>>
    const status = new APIMapObject('courseStatus', 'v1/academy/team/lessons/status/')

    // scores is of type Map<TCourseID, Map<TLessonID, ILessonStatus>>
    const scores = new APIMapObject('courseScores', 'v1/academy/team/courses/scores/')


    // -----------------------------------------------
    // Lesson
    // -----------------------------------------------

    const getLessonIndex = computed(() => {
        return  (courseID: TCourseID, lessonID: TLessonID) => {
            let course = courses.value.get(courseID)
            if (!course) return {}
            return [...course.lessons.keys()].findIndex(id => id == lessonID )
        }
    })

    function getLessonStatus (lessonID: TLessonID) {
        if (status.value.has(lessonID)){
            return status.value.get(lessonID)
        } else {
            return addLessonStatus(lessonID)
        }
    }

    function addLessonStatus(lessonID: TLessonID) {
        if (!status.value.has(lessonID)){
            let statusLesson = JSON.parse(JSON.stringify(defaultStatusLesson))
            statusLesson.lesson = lessonID
            status.create(statusLesson)
        }
    }


    // -----------------------------------------------
    // Course
    // -----------------------------------------------
   
    const getTeamCourseScore = computed(() => {
        return  (courseID: TCourseID|undefined, teamID: TTeamID) => {
            if (!courseID){
                console.log('WARNING: undefined course ID')
                return 0
            }
            let scoresDict = scores.value.get(teamID)
            if (!scoresDict || !scoresDict[courseID]){
                return 0
            }
            return scoresDict[courseID]
        }
    })

    /**
     * Return the average score of a course calculated over all teams
     * @param {string of type courseID or undefined} courseID [ID of the course]
     * @return {number} score [average score over all teams]
     */ 
    const getAllTeamCourseScore = computed(() => {
        return (courseID: TCourseID|undefined) => {
            if (!courseID){
                console.log('WARNING: undefined course ID')
                return 0
            }
            let scoresDictList = [...scores.value.values()]
            let avgScore = 0
            for (let scoresDict of scoresDictList){
                avgScore += scoresDict[courseID] / scoresDictList.length
            }
            return avgScore
        }
    })

    // -----------------------------------------------
    // General
    // -----------------------------------------------

    async function fetch() {
        Promise.all([
            courses.fetch(),
            status.fetch(),
            scores.fetch(),
        ])
    }

    return {
        courses,
        status,
        scores,
        getLessonIndex,
        getTeamCourseScore,
        getAllTeamCourseScore,
        fetch,
        getLessonStatus,
        addLessonStatus,
    }
})