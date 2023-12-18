import { describe, test, expect, beforeAll, afterAll, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia';
import { useAcademyStore } from '@/stores/academy';
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

const pinia = setActivePinia(createPinia());


const mockResponseAcademy = {
    "3": {
        "lessons": [{
            "id": 5, "content": [
                {
                    "id": 9,
                    "time": 14.0,
                    "description": "Description 0 - 0 - 0",
                    "lesson": 5
                },
                {
                    "id": 10,
                    "time": 57.0,
                    "description": "Description 0 - 0 - 1",
                    "lesson": 5
                }
            ],

            "order": 0,
            "slug": "0-0",
            "title": "Title 0 0",
            "description": "Description 0-0",
            "video": "https://epicus-395019.ew.r.appspot.com/videos/academy/team/testutility/testvideo_hUIGyty.mp4",
            "course": 3,
            "plays": []
        },

        {
            "id": 6,
            "content": [
                {
                    "id": 11,
                    "time": 7.0,
                    "description": "Description 0 - 1 - 0",
                    "lesson": 6
                },
                {
                    "id": 12,
                    "time": 15.0,
                    "description": "Description 0 - 1 - 1",
                    "lesson": 6
                }
            ],

            "order": 1,
            "slug": "0-1",
            "title": "Title 0 1",
            "description": "Description 0-1",
            "video": "https://epicus-395019.ew.r.appspot.com/videos/academy/team/testutility/testvideo_NdRKvGF.mp4",
            "course": 3,
            "plays": []
        }

        ],
        "slug": "0",
        "title": "Title 0",
        "category": "Category 0",
        "description": "Description 0"
    },

    "4": {
        "lessons": [
            {
                "id": 7,
                "content": [
                    {
                        "id": 13,
                        "time": 11.0,
                        "description": "Description 1 - 0 - 0",
                        "lesson": 7
                    },
                    {
                        "id": 14,
                        "time": 53.0,
                        "description": "Description 1 - 0 - 1",
                        "lesson": 7
                    }
                ],
                "order": 0,
                "slug": "1-0",
                "title": "Title 1 0",
                "description": "Description 1-0",
                "video": "https://epicus-395019.ew.r.appspot.com/videos/academy/team/testutility/testvideo_gZrOCSj.mp4",
                "course": 4,
                "plays": []
            },
            {
                "id": 8,
                "content": [
                    {
                        "id": 15,
                        "time": 51.0,
                        "description": "Description 1 - 1 - 0",
                        "lesson": 8
                    },
                    {
                        "id": 16,
                        "time": 11.0,
                        "description": "Description 1 - 1 - 1",
                        "lesson": 8
                    }
                ],
                "order": 1,
                "slug": "1-1",
                "title": "Title 1 1",
                "description": "Description 1-1",
                "video": "https://epicus-395019.ew.r.appspot.com/videos/academy/team/testutility/testvideo_jRRFSkj.mp4",
                "course": 4,
                "plays": []
            }
        ],
        "slug": "1",
        "title": "Title 1",
        "category": "Category 1",
        "description": "Description 1"
    }
}

const mockResponseScore = {
    "475b1f09434745d5b76780c8f3ab1162": {
        "3": 23.095573215864047,
        "4": 16.674725755615945
    },

    "20a3aad10eaf4247abbf0d9daed59da4": {
        "3": 25.448032879512176,
        "4": 19.272252268485783
    },

    "95ce36f55cf14eca98ee1cdfe419895f": {
        "3": 26.12078536519176,
        "4": 19.002277639905458
    },

    "f1cdd6d430e845e19ce955a371fc610c": {
        "3": 23.966792448067245,
        "4": 18.31882041270121
    },

    "4de12e3b4e9b496ba77128fd0b298b07": {
        "3": 22.63292650417203,
        "4": 19.856102653133878
    }

}

const mockResponseStatus = [
    {
        "id": 181,
        "have_seen": false,
        "note": "tlinrmbmdusijjhodfnuwytrgmtqwxrwzzeakmlmcsuoydmtwbqpqvpndlhumfipukatcrvrghekktkbukcvkuxhbdvuxhbrshxftinlrjlzrfchgezldljsmkkqnmpnqgqgvrywermyfzspavktsijkczpyrssideccakfzbrqdkktaldpnvxwnxtzywmtycryzwynoafduatogllqsnmeebukogzxtjgiiapzpumcvyuotwepm",
        "time": 32.0,
        "lesson": 5
    },
    {
        "id": 182,
        "have_seen": true,
        "note": "ocaqjrbreifexmkkhfaaoaqwrahncvfkszzojnhxejuvhtoubqtcarsxkierfuiavmxxfybxpggqpgsycgirzyrtdlxkdyomohsgvfvkbaajvzmsidjtqaleqvfezhfnzzddpsxmszhdcnsezhiogigbwwzhkflztbvmlcoovmuxrhppfnyhcyqxrtzcjdlxgdkedoyojqexbqsyotgiqypkofcblcmpwbonemvypwlqwtwfustd",
        "time": 7.0,
        "lesson": 5
    },
    {
        "id": 183,
        "have_seen": true,
        "note": "jcorgcsbaxtprhwoagbgdqpgxzndevfusthrrnzriachdjfoggrnfcnukxuwuplznkxcvercbakwpitwoxhredcintiqefzdwyrccxlrvrutoidkkxcjnndjvnfxywksyxluuvtugxcseoiyaiqjpfnbzebblndphczrlxpfkdtmgzvzzsjxqbzzhudtubarmxwtinebgcsvuvksszmnloaslqtegyvzeiqhtcriptwrxuvpubad",
        "time": 47.0,
        "lesson": 5
    },
    {
        "id": 184,
        "have_seen": true,
        "note": "umhojdfsahsotrdpxoepslswbfzhccghlfokiofmjyymwmuykssyuplwgdmkrwifnypgttigmezcarwswfdovxqotimxqpjdiptmhqblchoxnmgmlctnpmysshjfehzfizgvhlkfggenzowbfdpxhwtdgjfaqwiqgaxuzrepwmoskqwfhlurqbzfgdlniavrfigiyozupyoqhcupkvcezihrjpadaxuciuoyzkqtmdmovnqkvlbs",
        "time": 5.0,
        "lesson": 5
    },
    {
        "id": 185,
        "have_seen": false,
        "note": "qcayvpyskigocmfjyhlkelpytmrgkyujzipoqcqpveavxlhnvmtyhphxswjdxmhtnahrszcnbzbngolerdprxxgrdryyrsvyvmdiycappfgedgwhgaskobrxtoqxtqxeqmtxnzjtubcjiyqkystvvpxwwyhkcazrvjurhodqddvyqyvbkhmfxewqzkfdszzuwlbkthadfknndprljravlmqdkalevkfnizbeyexzikyufoctfcor",
        "time": 36.0,
        "lesson": 5
    },
    {
        "id": 186,
        "have_seen": true,
        "note": "kfbbsrqlwjdzspvtsjxnlikopnvovrgvhrahyldvagjrjywgkgcdiaokyupolixdjauztoqnhirwgdcbxfimcyrcevryvfywxwtchmkxvxiqkryvdrovoscrfnsicdgafwxrwahuyphuwylparhjygumdgebzzcqufkdtmuufjjclhdogrxbuyxxtzkxeifqvmohenfxjappkusojhgnocpxyfgchsnbkzzlwekjcosnxtzfqqhj",
        "time": 8.0,
        "lesson": 5
    },
    {
        "id": 187,
        "have_seen": true,
        "note": "sswqpfpmxrfikspclzbxmdpmiskzvizxhwcmfqguvdelwaljxnrtzlfdttdboqldwtgqowufbwzgdxvnngljulsmgqyvwsryylysknggtbnponjwnjjsjbrrmatqlkcsoqrjlaqlfyefveanwrcizsxhrrunceybvzpgxegjfjoyxcessvkjzzduntlqkhujscguyjdrwphhtdvgtdyiyizteubxvlkmhiwabrinadiwbznwkmre",
        "time": 46.0,
        "lesson": 5
    },
    {
        "id": 188,
        "have_seen": false,
        "note": "ciglglbjpdlqcnoschzkmaatjzlvvttgquniarszwydoskhwkizrsszgescluopvnniiblkfasaisthdeicelvszqtrqhrobpkovpjzyfhhnxohdzjlgszqpvplynctbtwxfnnahzgkrwxvnwujppijfaohmtzeoywxziajztalxhmpuxyshzvjnzwzvaquzdbvggojaepslqvdykqkepbccucjwggkoabiowfhreqkforuvtxtx",
        "time": 37.0,
        "lesson": 5
    },
    {
        "id": 189,
        "have_seen": true,
        "note": "pbporrntzpkbbnjnqvqyvmdwduvhirxrwvearinyizhwetzqdklygjejjvilqmpvvdkgfazzkblcnujxokfdtrsyyslfmxapjmedssbqszlceezpsslymmogtmnockzfpssbhvclyrvjmcpbcbwvpmjpxgqiuccraaztfnsmtabycqlriexrbgpujqoyvhtypskwpjmblhdnafylmkvsvbgvfssiuxhxbxpwnqyvwsajuhkazoca",
        "time": 54.0,
        "lesson": 5
    },
    {
        "id": 190,
        "have_seen": true,
        "note": "nkhfuoquvprbmxwjpiwwrdpdmdfrueoqxkfkrytgolcgraavmbybnkqplxenjbjivocgdoiymmsjedxaqesaorsmydcthxocufsbdgtneorxxfsyhfksgvcffqyftfkdvsitntyjygnbjhdsshpbvrkjtubyvytjtqykbumgvycukirbcsldvsedkpcmruhjxpeelvsvtfllmksumiznkqqbohlcurovqnqpvjrlshpzcrtiwzvf",
        "time": 59.0,
        "lesson": 5
    },
    
    {
        "id": 215,
        "have_seen": false,
        "note": "fdptnbtrsuzuotdprofxkgzqsikkqcdrjlvinulpuhxkgplvwcnziskdccotpaxdhgwgiccfdywtxuadjxefelqjqrnqoszswyrrxkzqkqudfrmnftxcemtzfihoaybsudbqvyvvwcsyecqibsybvvpgeoilkxozdbucysklcjbrhfiwbcjqwlrklharhsgtpecvpwmuejdxnmfaugqayixsjpisxtuvmaowzofemysfkchfklle",
        "time": 51.0,
        "lesson": 5
    }]



export const handlers = [
    http.get('https://epicus-395019.ew.r.appspot.com/v1/academy/team/lessons/status/', () => {
        return HttpResponse.json(mockResponseStatus)
    }),
    http.get('https://epicus-395019.ew.r.appspot.com/v1/academy/team/courses/', () => {
        return HttpResponse.json(mockResponseAcademy)
    }),
    http.get('https://epicus-395019.ew.r.appspot.com/v1/academy/team/courses/scores/', () => {
        return HttpResponse.json(mockResponseScore)
    }),
    
  ]

const server = setupServer(...handlers)
 
beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('Academy Service', () => {
    describe('getLessonIndex', () => {
        test('get lesson status', async () => {
            const academyStore = useAcademyStore()
            await academyStore.courses.fetch()
            let coursedata = academyStore.getLessonIndex(3, "5");            
           console.log(coursedata);
            //expect(indexdata).toEqual(mockResponseAcademy[3]); 
                    
        })
    })

    describe('scores', () => {
        test('get team score', async () => { 
            const academyStore = useAcademyStore();
            await academyStore.scores.fetch();
            let score = academyStore.scores.value.get('475b1f09434745d5b76780c8f3ab1162');
            expect(score).toEqual(mockResponseScore['475b1f09434745d5b76780c8f3ab1162']);
        })
    })

    describe('courses', () => {
        test('get team courses', async () => { 
            const academyStore = useAcademyStore();
            await academyStore.courses.fetch();
            let course = academyStore.courses.value.get('3');
            //console.log("coursecoursecourse",course);
            expect(course).toEqual(mockResponseAcademy['3']);
        })
    })

    describe('status', () => {
        test('get team status1', async () => { 
            const academyStore = useAcademyStore();
            await academyStore.status.fetch();
            //let stat = academyStore.status.value.get('181');
            let stat = academyStore.status.value.get('181');
            console.log(await academyStore.status.fetch());
            expect(stat).toEqual(mockResponseStatus['181']);
        })
    })

    describe('getAllTeamCourseScore', () => {
        test('get all team course score', async () => { 
            const academyStore = useAcademyStore(); 
            await academyStore.fetch()
            await academyStore.scores.fetch();
            let cours =  academyStore.getAllTeamCourseScore(3);
            console.log(cours);
            //expect(cours).toEqual(mockResponseScore['475b1f09434745d5b76780c8f3ab1162'],3);
        })
    })

    describe('getTeamCourseScore', () => {
        test('get all team course score', async () => { 
            const academyStore = useAcademyStore();
            let stat = academyStore.getTeamCourseScore(3,'475b1f09434745d5b76780c8f3ab1162');
            expect(stat).toEqual(mockResponseScore['475b1f09434745d5b76780c8f3ab1162']['3']);
        })
    })

  })