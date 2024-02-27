export enum ApiEndpoints {
  // Auth Endpoints
  LOGIN = "accounts/login/",
  GET_USER_SETTINGS = "v1/user/",
  GET_USER_ORGANIZATION = "v1/user/organization/",
  GET_USER_ORGANIZATION_MEMBERS = "v1/user/organization/members/",
  GET_USER_ORGANIZATION_LEADERS = "v1/user/organization/leaders/",
  GET_USER_ORGANIZATION_COACHES = "v1/user/organization/coaches/",

  GET_TEAMS = "v1/team/team/",

  // playbook end points
  GET_PLAYBOOK = "v1/playbook/team/",
  GET_EXERCISES = "v1/playbook/team/exercise/selected/",
  GET_EXERCISES_RESPONSES = "v1/playbook/team/exercises/response/",
  CREATE_EXERCISES_RESPONSES = "v1/playbook/team/exercise/response/",
  GET_TEAM_EXERCISE_SCORES = "v1/playbook/team/exercise/score/",
  GET_TEAM_EXERCISE_NOTES = "v1/playbook/team/exercise/note/",

  // academy endpoints
  GET_COURSES = "v1/academy/team/courses/",
  GET_COURSES_STATUS = "v1/academy/team/lessons/status/",
  GET_COURSES_SCORES = "v1/academy/team/courses/scores/",
  // Status endpoints
  // Object list for map
  GET_QUESTION_NAIRE = "v1/status/team/questionnaire/",
  GET_DIMENSIONS = "v1/status/team/dimensions/",
  GET_SCHEDULERS = "v1/status/team/scheduler/",

  // status 
  // requests is of type Map<TTeamID, IRequest>
  GET_REQUESTS = "v1/status/team/request/",

  GET_DEFAULT_RESPONSES = "v1/status/team/response/default/",
  GET_LAST_RESPONSE = "v1/status/team/response/",
  SURVEY_SUBMIT = "v1/status/team/response/"
  
}

export default ApiEndpoints;
