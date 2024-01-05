import { describe, test, expect, beforeAll, afterAll, afterEach } from 'vitest'
//import { http, HttpResponse } from 'msw'
//import { setupServer } from 'msw/node'
//import { createPinia, setActivePinia } from 'pinia'
//
//const pinia = setActivePinia(createPinia())
//import { fetchCurrent, teamID, team } from '../current'
//
//const defaultMockResponseTeams = {
//    "083d0246f2784a0ab404ff401f86deee": {
//        "name": "B-team",
//        "members": [
//            {
//                "first_name": "T",
//                "last_name": "D",
//                "email": "0@0.com",
//                "role": 1
//            },
//            {
//                "first_name": "",
//                "last_name": "",
//                "email": "dummy6@example.com",
//                "role": 2
//            },
//            {
//                "first_name": "Team coach",
//                "last_name": "Carlos",
//                "email": "dummy6@example.com",
//                "role": 3
//            }
//        ]
//    },
//    "3bd35fac2b7a475c9a0d12f896c48ffe": {
//        "name": "B-team",
//        "members": [
//            {
//                "first_name": "T",
//                "last_name": "D",
//                "email": "0@0.com",
//                "role": 2
//            },
//            {
//                "first_name": "",
//                "last_name": "",
//                "email": "dummy6@example.com",
//                "role": 2
//            }
//        ]
//    }
//}
//
//var mockResponseTeams = JSON.parse(JSON.stringify(defaultMockResponseTeams))
//
//const defaultMockResponseUserSettings = {
//    "id": "25557789092b4d74b21d363d8d384f4a",
//    "last_login": "2023-11-03T08:17:57.347353Z",
//    "is_active": true,
//    "date_joined": "2023-11-01T06:45:16.400813Z",
//    "email": "0@0.com",
//    "username": "0@0.com",
//    "first_name": "user_0",
//    "last_name": "user_0",
//    "phone": null,
//    "country": "",
//    "has_coach": false,
//    "first_usage": true,
//    "show_messages_on_opening": true,
//    "send_new_survey_notification": true,
//    "send_new_survey_email": true,
//    "send_new_survey_SMS": true,
//    "send_survey_results_notification": true,
//    "send_survey_results_email": true,
//    "send_survey_results_SMS": true,
//    "available_as_coach": false,
//    "available_for_exercise_questions": true,
//    "show_scores": true,
//    "uses_team_app": false,
//    "uses_personal_app": false,
//    "created_at": "2023-11-01T06:45:16.499334Z",
//    "updated_at": "2023-11-01T11:47:17.671736Z",
//    "organization": "e9267989-3540-4031-ba53-96a35d6c4dee",
//    "last_team_used": "083d0246f2784a0ab404ff401f86deee"
//}
//var mockResponseUserSettings = JSON.parse(JSON.stringify(defaultMockResponseUserSettings))
//
//export const handlers = [
//    http.get('https://epicus-395019.ew.r.appspot.com/v1/team/', () => {
//        return HttpResponse.json(mockResponseTeams)
//    }),
//    http.get('https://epicus-395019.ew.r.appspot.com/v1/user/', () => {
//        return HttpResponse.json(mockResponseUserSettings)
//    }),
//]
//
//const server = setupServer(...handlers)
//
//beforeAll(() => server.listen())
//afterAll(() => server.close())
//afterEach(() => server.resetHandlers())
//
//
describe('teamID', () => {
    test('No teams', async () => {})
//    test('No teams', async () => {
//        mockResponseTeams = {}
//        mockResponseUserSettings = JSON.parse(JSON.stringify(defaultMockResponseUserSettings))
//        mockResponseUserSettings['last_team_used'] = null
//
//        await fetchCurrent(true)
//        expect(teamID).toBe('')
//    })
//    test('Last team used is null', async () => {
//        mockResponseTeams = JSON.parse(JSON.stringify(defaultMockResponseTeams))
//        mockResponseUserSettings = JSON.parse(JSON.stringify(defaultMockResponseUserSettings))
//        mockResponseUserSettings['last_team_used'] = null
//        await fetchCurrent(true)
//        // TODO!!!!
//    })
//
//    test('Last team used is a value', async () => {
//        mockResponseTeams = JSON.parse(JSON.stringify(defaultMockResponseTeams))
//        mockResponseUserSettings = JSON.parse(JSON.stringify(defaultMockResponseUserSettings))
//        mockResponseUserSettings['last_team_used'] = '083d0246f2784a0ab404ff401f86deee'
//        await fetchCurrent(true)
//
//        expect(teamID).toBe('083d0246f2784a0ab404ff401f86deee')
//    })
})
//
//describe('team', () => {
//    test('makes a GET request to fetch users team', async () => {
//        mockResponseUserSettings = JSON.parse(JSON.stringify(defaultMockResponseUserSettings))
//        await fetchCurrent(true)
//        
//    })
//})
//