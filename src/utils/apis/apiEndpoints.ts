export enum ApiEndpoints {
  // Auth Endpoints
  LOGIN = 'accounts/login/',
  LOGOUT = 'auth/logout/',
  REGISTRATION = 'accounts/registration/',

  // STATUS Endpoints
  QUESTIONNAIRE = 'v1/status/team/questionnaire/active/',
  DIMENSIONS = 'v1/status/team/dimensions/active/',
  SCHEDULERS = 'v1/status/team/scheduler/',
  REQUESTS = 'v1/status/team/request/',
  DEFAULTRESPONSES = 'v1/status/team/response/default/',
  RESPONSE = 'v1/status/team/response/',
  SCORES = 'v1/status/team/score/',
  NOTES = 'v1/status/team/notes/',


  // User Endpoints
  GET_USER = 'v1/user/',
  GET_USER_SETTINGS = 'v1/user/',
  GET_USER_ORGANIZATION = 'v1/user/organization/',
  GET_USER_ORGANIZATION_MEMBERS = 'v1/user/organization/members/',
  GET_USER_ORGANIZATION_LEADERS = 'v1/user/organization/leaders/',
  GET_USER_ORGANIZATION_COACHES = 'v1/user/organization/coaches/',

  GET_TEAMS = 'v1/team/',
}
export enum NameTags {
  // Auth Endpoints
  LOGIN = 'login',
  REGISTER = 'register',
  QUESTIONNAIRE = 'questionnaire',
  DIMENSIONS = 'dimensions',
  SCHEDULER = 'scheduler',
  REQUEST = 'request',
  RESPONSE = 'response',
  SCORE = 'score',
  EXERCISENOTES = 'exerciseNotes',
}

export default ApiEndpoints;

