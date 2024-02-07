import { computed ,ref ,reactive} from "vue";
import { defineStore } from "pinia";

import { TCourseID, TLessonID, TTeamID, TPlayID } from "@/utils/types";
import AcademyAPI from "@/utils/actions/academy";


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

const useAcademyStore = defineStore("Academy", () =>{
    // new api data

    const courses = ref<any>();
    const tempCourses = ref<any>();
    const singleCourse = ref<any>();
    // courses status
    const status: any = ref(null);
    // courses scores
    const scores: any = ref(null);

    async function getCourses() {
        courses.value = await AcademyAPI.getCourses();
        tempCourses.value = courses.value
    }
    async function getSingleCourse(courseId: any) {
        const payload = {
            courseId : courseId
        } 
        singleCourse.value = await AcademyAPI.getSingleCourse(payload);

    }
    async function getCoursesStatus() {
        status.value = await AcademyAPI.getCoursesStatus();
    }
    // Only for POST, not for GET Todo need to set new map to something esle
    async function getCoursesScores() {
        scores.value = await AcademyAPI.getCoursesScores();
    }
    async function searchAcademys(key : any) {
        
      if(key){
        // Using Array.from to convert Map values to an array and then filter items by title
        const searchResults = Array.from(courses.value.values())
          .filter(item => item.title.toLowerCase().includes(key.toLowerCase()));
      
        // console.log(searchResults);
        courses.value = reactive(new Map(Object.entries(searchResults)))
      }else{
        courses.value = tempCourses.value
      }
        // Now you can use searchResults for further processing or rendering in your application
      }
    async function filteredAcademys(key : any) {
        
      if(key !='all'){
        if(key === 15){

        }else if(key === 30){
            
        }else{
            
        }
        // Using Array.from to convert Map values to an array and then filter items by title
        const searchResults = Array.from(courses.value.values())
          .filter(item => key <= item.total_length );
      
        // console.log(searchResults);
        courses.value = reactive(new Map(Object.entries(searchResults)))
      }else{
        courses.value = tempCourses.value
      }
        // Now you can use searchResults for further processing or rendering in your application
      }
      
      
    // -----------------------------------------------
    // Lesson
    // -----------------------------------------------

    // const getLessonIndex = computed(() => {
    //     return  (courseID: TCourseID, lessonID: TLessonID) => {
    //         let course = courses.value.get(courseID)
    //         if (!course) return {}
    //         return [...course.lessons.keys()].findIndex(id => id == lessonID )
    //     }
    // })

    // function getLessonStatus (lessonID: TLessonID) {
    //     if (status.value.has(lessonID)){
    //         return status.value.get(lessonID)
    //     } else {
    //         return addLessonStatus(lessonID)
    //     }
    // }

    // function addLessonStatus(lessonID: TLessonID) {
    //     if (!status.value.has(lessonID)){
    //         let statusLesson = JSON.parse(JSON.stringify(defaultStatusLesson))
    //         statusLesson.lesson = lessonID
    //         status.create(statusLesson)
    //     }
    // }


    // -----------------------------------------------
    // Course
    // -----------------------------------------------
   
    // const getTeamCourseScore = computed(() => {
    //     return  (courseID: TCourseID|undefined, teamID: TTeamID) => {
    //         if (!courseID){
    //             console.log('WARNING: undefined course ID')
    //             return 0
    //         }
    //         let scoresDict = scores.value.get(teamID)
    //         if (!scoresDict || !scoresDict[courseID]){
    //             return 0
    //         }
    //         return scoresDict[courseID]
    //     }
    // })

    /**
     * Return the average score of a course calculated over all teams
     * @param {string of type courseID or undefined} courseID [ID of the course]
     * @return {number} score [average score over all teams]
     */ 
    // const getAllTeamCourseScore = computed(() => {
    //     return (courseID: TCourseID|undefined) => {
    //         if (!courseID){
    //             console.log('WARNING: undefined course ID')
    //             return 0
    //         }
    //         let scoresDictList = [...scores.value.values()]
    //         let avgScore = 0
    //         for (let scoresDict of scoresDictList){
    //             avgScore += scoresDict[courseID] / scoresDictList.length
    //         }
    //         return avgScore
    //     }
    // })

    // -----------------------------------------------
    // General
    // -----------------------------------------------

    

    return {
        singleCourse,
        courses,
        status,
        scores,
        getCourses,
        searchAcademys,
        getSingleCourse,
        getCoursesStatus,
        getCoursesScores,
        filteredAcademys
    }
})

export default useAcademyStore;