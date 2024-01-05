import { describe, test, expect, beforeAll, afterAll, afterEach } from 'vitest'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { createPinia, setActivePinia } from 'pinia'
import { useStatusStore } from '@/stores/status'

const pinia = setActivePinia(createPinia())

const mockResponseQuestionnaire = {
    "name": "Desired outcomes",
    "question": {
        "id": "4dd6536e391d4a39ae535453d0f77bef",
        "options": [
            {
                "id": "Tc8858defb39c44e482751513b1d1404b",
                "title": "Vision & goals",
                "favourable": "Clear",
                "unfavourable": "Unclear"
            },
            {
                "id": "d6a2beeb6d924315b30c293cf9a816db",
                "title": "Day-to-day work",
                "favourable": "Contributes to goals & vision",
                "unfavourable": "Focusses on today's issues"
            },           
        ],
        "description_low": "Uncertain and disorganized",
        "description_midlow": "Some clarity but lacking direction",
        "description_medium": "Adequately guided and aware of responsibilities",
        "description_midhigh": "Well-organized and focused on common objective",
        "description_high": "Confident, aligned and motivated"
    }
}

const  mockResponseDimension =  [
    "Desired outcomes",
    "Psychological safety",
    "Introspection",
    "Contribution",
    "Energy",
    "Bonding",
    "Excellence"
]

const  mockResponsescheduler = [ 

    { 

        "id": "9914536f11874c2d81b57c84b778c5e1",
        "team": "475b1f09434745d5b76780c8f3ab1162",
        "start_date": "2023-11-06T20:40:59.510440Z", 
        "period": "w", 
        "interval": 1, 
        "spacer_period": "w", 
        "week_count": null, 
        "day_count": null, 
        "duration": 72, 
        "created_at": "2023-11-06T20:40:59.510480Z", 
        "updated_at": "2023-11-06T20:40:59.510489Z" 

    }, 

    { 

        "id": "5853060825744f64b695a5b1f1d4ed33",
        "team": "20a3aad10eaf4247abbf0d9daed59da4",
        "start_date": "2023-11-06T20:40:59.510573Z",
        "period": "w",
        "interval": 1,
        "spacer_period": "w",
        "week_count": null,
        "day_count": null,
        "duration": 72,
        "created_at": "2023-11-06T20:40:59.510590Z",
        "updated_at": "2023-11-06T20:40:59.510597Z"

    }    
] 

const mockResponseRequest = { 

    "20a3aad10eaf4247abbf0d9daed59da4": [ 

        { 

            "id": "ccd560d8c9214fef98d92cd06512a1c0", 
            "invite_id": "3fd738e36cdc436ca2e3a87c20c7415c", 
            "responded": true, 
            "original_start": "2024-06-12T20:40:59.558779Z", 
            "start": "2024-06-12T20:40:59.558779Z", 
            "end": "2024-11-05T20:40:59.558823Z", 
            "is_send": true, 
            "created_at": "2023-11-06T20:40:59.563084Z", 
            "team": "20a3aad10eaf4247abbf0d9daed59da4", 
            "scheduler": "ff4a52c5-fe27-4d45-9110-8e0b16951666" 
        }, 

        { 

            "id": "1b6174b536b9420f96633e708790060f", 
            "invite_id": "13ac4505ad05499b8ddf5be8f5ad48fa", 
            "responded": true, 
            "original_start": "2024-06-12T20:40:59.558115Z", 
            "start": "2024-06-12T20:40:59.558115Z", 
            "end": "2024-11-05T20:40:59.558159Z", 
            "is_send": true, 
            "created_at": "2023-11-06T20:40:59.563022Z", 
            "team": "20a3aad10eaf4247abbf0d9daed59da4", 
            "scheduler": "62e24ca2-c00b-4a88-9b86-2d1441dad135" 
        }
    ], 

    "475b1f09434745d5b76780c8f3ab1162": [ 

        { 

            "id": "a51f189041914655b56d17ab1d3c8fe4", 
            "invite_id": "a0f1a586e13a4d3db88bfaf6717bf24e", 
            "responded": false, 
            "original_start": "2024-06-12T20:40:59.556660Z", 
            "start": "2023-06-12T20:40:59.556660Z", 
            "end": "2024-11-05T20:40:59.556712Z", 
            "is_send": true, 
            "created_at": "2023-11-06T20:40:59.562896Z", 
            "team": "475b1f09434745d5b76780c8f3ab1162", 
            "scheduler": "5fd8a32a-881f-45df-bdea-9180bc5d4146" 

        }, 

        { 

            "id": "62af85e6b12f41ae92e63c91c3b01c07", 
            "invite_id": "b493ba48f7dc45919bf2ea4f87f5567b", 
            "responded": true, 
            "original_start": "2024-06-12T20:40:59.555859Z", 
            "start": "2024-06-12T20:40:59.555859Z", 
            "end": "2024-11-05T20:40:59.555913Z", 
            "is_send": true, 
            "created_at": "2023-11-06T20:40:59.562831Z", 
            "team": "475b1f09434745d5b76780c8f3ab1162", 
            "scheduler": "027ec0cd-c7b5-4a2b-80f5-30e8bc310c2b" 

        }

    ]    

} 

const mockResponseDefault = {
    "475b1f09434745d5b76780c8f3ab1162": {
        "4dd6536e391d4a39ae535453d0f77bef": {
            "response_low": false,
            "response_midlow": false,
            "response_medium": true,
            "response_midhigh": true,
            "response_high": false,
            "options": {
                "c8858defb39c44e482751513b1d1404b": {
                    "favourable": true,
                    "unfavourable": true
                },
                "d6a2beeb6d924315b30c293cf9a816db": {
                    "favourable": true,
                    "unfavourable": true
                }                
            }
        },
        "a2e4ad9823fe450194272fd5ee6c780b": {
            "response_low": false,
            "response_midlow": true,
            "response_medium": false,
            "response_midhigh": true,
            "response_high": true,
            "options": {
                "33291154ca72472eb6d3cf99c0538c4e": {
                    "favourable": false,
                    "unfavourable": false
                },
                "9a6fcbf3918648a1a82ffde813aa7b05": {
                    "favourable": true,
                    "unfavourable": false
                },
                "2e034b75860d46d290397b2692cfc8a2": {
                    "favourable": true,
                    "unfavourable": true
                },
                "f08a4f257ff040ce97fbe7d1b50bbf4f": {
                    "favourable": true,
                    "unfavourable": false
                },
               
            }
        }      
        
    }
}

const mockResponseScore = {
    "f1cdd6d430e845e19ce955a371fc610c": [
        {
            "id": 61,
            "request": "09c6d446797346c0a4f2b07b807e803c",
            "dim_score_dict": {
                "Energy": 163.8,
                "Bonding": 123.9,
                "Excellence": 184.8,
                "Contribution": 207.9,
                "Introspection": 165.9,
                "Desired outcomes": 153.3,
                "Psychological safety": 136.5
            },
            "score": 130.56857142857143,
            "rank": 0.0,
            "created_at": "2023-11-06T20:43:54.429121Z"
        },
        {
            "id": 68,
            "request": "2ef92e3744f34322a0033bbf3a4646c6",
            "dim_score_dict": {
                "Energy": 163.8,
                "Bonding": 121.8,
                "Excellence": 155.4,
                "Contribution": 161.7,
                "Introspection": 163.8,
                "Desired outcomes": 126.0,
                "Psychological safety": 142.8
            },
            "score": 130.94528571428572,
            "rank": 85.71428571428571,
            "created_at": "2023-11-06T20:43:54.601037Z"
        },
        {
            "id": 71,
            "request": "4577a53940984b17a1ae2510f94661a6",
            "dim_score_dict": {
                "Energy": 186.9,
                "Bonding": 126.0,
                "Excellence": 130.2,
                "Contribution": 153.3,
                "Introspection": 111.3,
                "Desired outcomes": 184.8,
                "Psychological safety": 168.0
            },
            "score": 112.64314285714283,
            "rank": 10.0,
            "created_at": "2023-11-06T20:43:54.662247Z"
        }
      
    ],   
   
   
}

const mockResponseNotes = {   
       
    "475b1f09434745d5b76780c8f3ab1162": [
        {
            "exercise": "f087a6468ba346878ba41e2ed446c302",
            "score": 7.1,
            "notes": [
                "wubgydwkrleyjftbubczxqwgwfjcfthsthzqovvzohrlcyfrqkgyeycjblbzldomdunmrziurdzsgmcopbvpzpsdopanmrrxqpebomuhwpwqmwyvimxyjkusjhheckdzwkayzdtcuuxkqqdoexnnonyytvhpzrtfmwkuwfjbjbamljusfjbciikhkcxiyofvvhxcolkpmgflbjlsyvxrwnwnqsxzfazovtpzcvqoocqzrpbtyuolmrdklxeabpojamxpndntotolgreughkdccnzjjhdndmbdoencfzeleayia",
                "wejnertypvfycgkjgmxddrmzqrujezggvhnjqkeytrodgjxlxykmsryvsvjzqnlevlgkaknlqafagxztbnrplhznwxgkavnuhclmhadvhovwqddekktiktqehdswkpayikuqmljvaompntpsjjbiffsvlthyutbsfrjruowocmxgkajznjbhsgzjvylsooicuardhcrkowpnpfbtklqxugwlrnihabkekeeetegglzsxagcsjdvwupzfxarirnroeaswlxfxekjjsherlgdlpaaycdnacqvwalddbygzbaqdna",
                "wscbhdhnbogouyzdxscrjkofuerblvnomzuvquaaghbyupcwgpkjtnkpbxhcapkfpzmxugsftnxfqpkrpojkzcdqjeizlfjabdgoorbyzplsytvojbrjmhjsafcubjobxyouviahmolkxxhaofgitcwialglifkjghxalbgevbvnvakpihqvbuzdgzydntzafoxqcgnkfjfzsyttlcrscisbopblfqjvitqmgyeqrlyrinumnicvzfcfqxxhxaniadqyhvhkzrcfchkefwjeknlwpymoiszubhwlunmsaasuxz",
                "kxlmbqcjhsotymoqtxrvngfutidcxhmsqaamhasbahnfhjkbbokvmdnjkrurnmeznluuwxkzjhbqsleshuwkfsjtghkxxzlxbhknfhbkqzwkxhaqwhcferdygnpjnxstxekkokxlkixnfokdoryidyvnbkzjnyhcikcuaulxdzyklzwbgdoqssiikwtflhjiwfwapcnljocbxtrkrnqslizyjktezqflosaxaqwwpstvhooaxhlamotyyfwoumukyjmxbpihhcchmbzcnektorikovywaajxjezjnsxfgyiqac",
                "dkrvfqxuwrukubctfmnuxiucnszesiqxibksqfqtazfsnxdvghotfuxevuxlwjvrjxrmqgkdcelxycpoiqoaocazqyhiobxhncitvwwmtjyfdrhflwcmruinceqdllpnlrsgoagncdfxmzbgpnunvytgbalwjxohkdaffknpqnkekykgylrywrpdcaskpujoirysyqtmlhbhcbdfilhlgnpufyzpcmynqbsdvphanoctmpyktmalyoafriftersxoexyhotxulgxrkyqywoonzpxuxlkqosdjbnsqjjbvjblgw",
                "znmdlsdlihfhqhmkqtvclgmldewfhiboyirrebeplcyxjddpuogatwjtqwfhvzrcdtsynxeyojfoikrhyaxdddlofyfrzaunoocymlcpgashxqnvoueoahdakvypqoynzdvylfjwdahfvhkahyjlzqgtmgbitfdishzuysbfbnlxkhiglkmvxbrpglhjrbgmuhdksdoxydntyicqrttssauglhvszymndpjgacywmscutxctxbjvxhrinfqzsulsniwvpiqiygaichilomumwmcytjyvfzenpvqxmsmscwywkn",
                "fczxntfsfjqhpeeytydmaigcgsniwulckwxezrussxmvjrfeozaphuxuqymywpehmucmuniekaqwdxivfepucxlnlzsugcxzaxtyaedpiaseomuwdxijpvjzgmfeyfpsabntmsbzcedvlitgndffwtmujgjmnhmbarevknmlfvbpxopsgikrmwecwlrggxikjogdjzuqzkkkvwleocybzgwqymacexzvpimwcmxgqbwndeurmjwjbpvfbagpqxdmodftncbckflcvrppsqzgkizyiwaumucktadfwlsvbasypk",
                "kmduirzekrkxvchxckghlberluyoynvtkxvxjkfwuvwzsrkvigqhtxjdtyuudhvjmimpjsohwxfqvawbmthyddlbmihpyeglblyzmhuwvmvtzuyxopdjjeoewheykrljbwhyfcjgucotzlihhzcgftqqoetxcddubeyylrjkywwnpojckxvmfrhixhpdthyzmzbhniltytfrlvpmmzytpvzuvgvbupvtlqevntgikiviygzcstkliahpikwzawjapammazmhdamaydwyfvmdxzqbywoorkjgibcjffoawvufmp",
                "ywkvbfjtfjtqmwbihszphfuksgnolwgtvttxfunwjzaphgvptvnufyupoprfepxhzgmdcmonkozdkixzlfyqxtrqzmlvqjdfkyufscsrjjqdyocoxqwcjesvizveqmicdnlruzsfufakixrosoxzarlkrajzfbsruomxyrvtyraqhwbqjztqqtarnyocvcbchalcmaiisfilpvhzcjquglcvupczugbzlyckzbqektvmrdgcthjlylervcrsuvohwaouzujzynifwkdjcsfmafvytmcxjhqwphemzqaesoaonh",
                "aylzgbfvrarhyxfdbvocmytpsirffpwyjonbftwjjsfritltgubdcepmrsgnbdccgozobgpzgclquosutaejdiipefkoiarikptdgnphezofguypwbcftbmebfefbmdwklkwoaokaupsleaqhcieiugltuyrmqmbxrazwjrduwzjxwsqfljoxojtuetloxbntraadcnxzzyqgfvjuqtbgjcdbdvjfzpqaffggzcpprjelntafqwhmgyukxkjajyxrtcqmttdcxcppqjlkiyeesznavmftqwcgbswdmjmwsqqei"
            ],
            "timeline": {
                "dates": [
                    "2023-04-01T20:40:59.553875Z",
                    "2023-04-01T20:40:59.553875Z",
                    "2023-04-01T20:40:59.553875Z",
                    "2023-04-01T20:40:59.553875Z",                    
                ],
                "scores": [
                    7.0,
                    5.7,
                    3.4,
                    6.2,                    
                ]
            }
        },
        {
            "exercise": "a85846a847ce48f6a89fd4d3c04fae9f",
            "score": 6.4,
            "notes": [
                "yicfthwgywpxhhtxwoijkbkmwocviipukcvjtrrypyeqnntyfaypgzbabutiiqygkvzmpiuhspnmgwezsiaohiweueysvqlbryveaojiukytlfghridqcfeasvobcbtamsllxyucvylmeozsazpzbjuklsaopuqlfdpanxsmvenneqsisjelzzxpbffbbmezatublslaljwsttzeliufuwvyrqfdwlizxhaevfepuwnautpasnwwgbnivrxpxqlzfjchlnpxcfytqqhnspuabexqeepdocdataximrbjkiroaf",
                "bivhcksgjlkpjyeworgfsemmsiqnqpngmirqjzmyalvwvkkbmumuxtisdzajwjuobpmpbzxthamsdzalxmakrapptdelnrfwzmgncjzzzdveiabsxduuukzjovraulrqwyzfiwlxobhwthpbzypwmxjuewzrjcucfwygosdalzlzeiwiujddqlszdsrnvejwmqeqnimylpgjspuovtzmtqotsjubaxjfcsjvdvpsiouhuoaesatgmgsyaabdkmmflhrecwrhtwnrsopxiatxhmtiirfacejxfgoutafvtnusdm",
                "vkdizajzwrvbruqfnsvopijatcdhglrrhabididvfbyxvkgvwpejlsdbumweoedcinxhlxxdmumteycjczugjmztwnbzfguelprncelryikzbwyazzqbxmqsafooiwkruxxilcwzfuakyrirrpjvpthwvnvmaxeoceuqxoiimtaoiazqbjagebqxozjvkdnifhyefyhyelwofdfgaxhrziwgaqbzrosgxytcdwzpptnjidjewaaljjxenfgetczmfbkvglsksjtzyfimbauywcrnuveuuatqqznlhepcbsmcxr",
                "rxllwuetbumezzhjpoqbrvgilwbqlaiatyctxgsanphsnzhqgfecgykkgyadzfrrzzzerpqeycmhyjhbolpqheqqflqlqijqesqzklaglyatybdcfgddpncsxhlykvlyhjpvmyraimccikfwntoncuikowbdhazpiowdnsmtucjibhifmitfeeubihlcgxxfwpjxzsgrtvaihuhjbjvbqfrthsefwbkvxfuhivsokrhspwioohsmmqdpggzhvfxuynihuhfubtkwlpxjcjkgkggulhstybdqbzascvbppsqwdn",
                "xznvvbrvjahncennconwniqvugjubagqmtkzsppkvsvrzykzpxyyyozjaecmqlupaklvcfzcaryjzdfjlszfylxebpvuretgddzcxgimacxtpwcndajdyketuklxdvbzzdojxtqeqlpcwhgqozzkzhuxqseqkkfltyprpunrcxqvrcakomdswwcaodveqjkbhwjdwyxpjxlmajtwzaozdfsbveqrumrlecdgrpkvaxvduezuvsptkgaqgenghxnfxajbkyoctzhfcenzknycayqqrcykjaulwggkjiydydxteg",
                "zuekjbygbxpsptwcgzigqvhcepynozaqtxrjpxxscftmpqkbdrukqsjvdltylgyqygofofgteaneuegwsnopracnlgbgcryvamqcaomquqrxxbnroygaoefcwqgfpffsovtaaqrfaftuizpopqdwserngaxkivxcugyxnytrdiiburhwqkevgfdttozsnqcfzpyhkhkikjjpuddqqstlmvplobfgzearpxinbynlxiqhucedbatzgcsjiqvdewfglvdtfghxpneskwcozphjovgppjfqevuygzytzbrnelcypn",
                "oodxqovmxkfgvuukgxpewqbrzfvwjsgogmpsmmckhedvwqbokgdqehgirdpngbfnrdmisosrbebsgbyrnjedpoxfslfutjddpgivuffwcnxcgzmkvngjborcddpsjqhpoxjaazfmfomxdnawwuhrvkmenctfvpbbxvzrctaduceqqbpzzmfqbliogscwlwjfyyxedcififdodfeofufnahsyhkyrynfsuyvthyxrpmhizlrllxanihbvdbsbyxiofyxaifsmajoiodyyvscaqpwubtmrrovtckosilaodkcjjd",
                "qeorsehjsjsyzzpbybgyxozvxlxjbzkbnyvpwqipjlngujdayfssobeweoygzzwupcvjjjnyrislbjsmfxywrbybhggaztzxphcqgffjmyybuusmhiyrssvywkdqhqqaxfvemcpnafdfvugyhfpkiomugjfbiommioxkcunzhmjmsigzoqqutlozoonjevmjzirvrbutxogiulmcyqolxldldpmoetkqptxqpaaguxkfkmrzcdklcqiebzvknsdmwdwxchgwffpdocbwdircitpkxwcaplkynuotiypudipldl",
                "xotmggqugrtljfsvzapzsopjugtybdhwtsnglajqyevjjkpqusgldljlqenyxcbcgshlugjnbzxduzgobbsthpqtfsstetjdlroxzvsofkqyjkaihmbjudpawdypphzrymsvzscbhezzowardzptnvdavbjsjcxneptxwfzmhkiradiszytbcroclwkrpomvjhmbqcndofbktatucvlhwzkbhamsamuovpcpvqzkdrwhzyxwjanatnhxcdenwdkczqwsewxbybwkjnprmdgvkqmltfwyvpjhrdutvedfekhepp",
                "vszariwnzsgnszwnrlzcsqhcnuzykmryqbrbdauouunyoitnbadjtdivoeuqblmzizyvyoqbdylckatkcoxrwaogduqcwypttdhozqyaeeegfuxniejvfyujnvkygzksvflrgsyavefbfifdpsemyrlpjffazzjswryrwfhagabeeiqqwnawqfxvdukrhxqaddeycvgmdjtoxmptaaigdjapduogxphswzdbmpheelsqvplviwaxmixwjztsedwzerrwizmovdtxggsrcrkqqtpugsvazcdsjdxqrnhpjtzwce"
            ],
            "timeline": {
                "dates": [
                    "2023-04-01T20:40:59.553875Z",
                    "2023-04-01T20:40:59.553875Z",
                    "2023-04-01T20:40:59.553875Z",
                    "2023-04-01T20:40:59.553875Z",                    
                ],
                "scores": [
                    7.0,
                    5.7,
                    3.4,
                    6.2,                    
                ]
            }
        }       
    ],
    "20a3aad10eaf4247abbf0d9daed59da4": [
        {
            "exercise": "ac53339e08f44d88bc5446d815cdd291",
            "score": 7.0,
            "notes": [
                "qdfmlzzftbsxrkezslwyordivoemkhsqgvkgjryikjvshwlnrdtbbkkkzpmeopzdgnzgxmwgceadzbanljgzhrccflmftesxwuzilitywzrntxmvanooddvkztxqbvbiqlpwxhvwvdkhbaohkuicgrgvhcbavngpxfxgnrndzznqcjrkrnwdujmmiuhelnxyexxzfrxckvogggilywtcsagkrktkynvvkumqapahoemfpnwunjdnzvwwfcsztfdufqjtdtusyfzawgbkjmuwsyxspfcxeoyqyauyaqyohhexci",
                "tlelzyqqmgrvlkivyftzaqarxsdtlciimzadpslugbcjxuqgbwmkdvqoaikxmuxmdlaoqgcoacazlizzpnloxovgmqrsrvdbiqealkzycdamobztxutoppdkwaofmurgiprjzdqkylvrgmbpuhrymqjcbqvuznujyuubfuuyzjjddqukbnywnnxtwgzupscckfksnjmrysdtfstdrxdmpjniadacuabmvveqagtlcbqfgisdjajgwajrurbdybhucifodifpljwbtzotpwfiiujsetzkileirbfhrqvqaapsgo",
                "ntttvsvdaxgakxhnsjrlbqigpvxmtuxezznaweyieebsaggnwqrvvhpykidtyxxvsevlciplbheeqsbylwyhpyrcakvmklgliszoemknrjmrzqpfvxklulzlqkbsxyzokqkrplmetqgtdkivdyyaikndlojerhhggfdqnquavkcwqqsyntmarpiuafblhdrahfxbkmqxipxrxhsgwdawxfxszkzkwgerawixpedxxfqunuhdqntsamzyaexngdyixsstqeywiamhpzkfstvibbyahlqofhksevdtebqpslryeo",
                "zhjltsbphzyxrxsijlawrkjlnurxxgletghogwzfhizsunxdqtaugziwfgezmgqaounrcntddqvcluwuydcrsdyxcinplnzqvnotivetfnwcriwjjfsszezijltrgfynnynswkcqovankplfgidbyosofdhvvbaxhhidiulzszkqzxeykrkpqxxxupcwhtodmwbuwfutjjxsjjjvlvxtcpkeprwhfbesnwpfvowihcalrkcqbwbjxksiwihgporuuiyczhriguzzggalsghbwcopkrkiintktsqhmjvcotgcxq",
                "ftsbejzdsnbtrokzqracasrywaezrzslqurjvceuuaauyzwvqbzpblepbiedxryrkfykrbjdkszkrpkvwlllibczxugvqxuwzlbunatpytcvkdbckfsmjiotcqokanxlujrxakauilnikufvhmypdskjnilkevzxinpnoqfepkzltnbvqdummxstulecnxkshumybnkaogcbxpufbaahibumjbsoadyfpanpxvmxchbdvsinctsuwgvgepbmqwqiueppcnuquflqioyqcycsjvjowuneibbedkcisypryvhnmc",
                "jdehtpxplcthuhhvrxortfgdkrnlwdxmckaegtaelniiqmpnrgdnrhlfurkvoxvvpzofllajlxnmbhsjwggavlviwbqqtmbrcgwwbxghybnaaalafuxzqltbuzvvrnbnjabsgenbhopjupsqpxjluqeyqlnelnrnwgvsaaruqalspjrxivdfuoavaanbehftgwivmbnryirejfghjglysibyscidenlrwxqvlhdmmoorxwwctinpcnmrftggolocbpnbnohvtefikmmcevtnrbcqkdsgdmjaywbqhzmobzhhti",
                "pngjjagzyalzwlaqkoddqgarkhprudxjpcqfojvdphrzcnhfqopnmgdxeezprxjnescrzhzzcmzmpfytsvsgkmvydfcptaglyckkxylufofcicpypiueacsoubzpkklztunktjyacloggzyczvspklrosedckdhpyrfwfqjrvqzgbmnudfjsyjgsiqnkxkiaoecxrsorxyeguirsavvtvqxszfikufhblripezqlksnmynnugbmsdekjwkurxblytvuqsvydjlhmhktwtgsxfzholcuzgvhndewrfbzppqmdqw",
                "fekiemlqdtvtrfcwjdychhoyydexnfwawayizaonliinbllonyginvvqfjraivylqmvpwnukpovjunhqydmvueyoktuzmfnqktrvzqyayapmoejhfugkoiwdolcchxxklcvgisdwyeqciniqtuedfdkstgzulhpqjlydftqkomtvsqpqnprknbxcofkcpqwvccfezyzroirtnsxwozbdicififdzjotechikyunlqaepeajklsbsxlzotwbniqyiezummvuymgaaerbbaxjyxoachjkwgdjfapyztdlmabndaq",
                "qazbumgqicdaahnnsspprablmfdzlunpctmtsrlnmkwsvqfufufgtwzlpjxiehjirbrbfxpvgcgrmvvpzlgxamzozbtmehqapzljkcznqdsevjsxnsgqddzwwzsurvllgvwdalrfchkplgcfrxnrnoigbsdmoovogpiupziwuofgbuuulihruomdodamxpkqvqodezrgclxmxkdpszwpfzbsgbialakvkvihouyskwaaackyfktegzgfaxujunldiqsvbumbvtycewjmeirojjorvgfxdombwcjeewpopspjsi",
                "poxmojkhtsbauisfsfuofijeyzhwhctrakyxmzrrzybdfxttblegnxivxkngwkpwjkqbewmesjibfesvdcqdubwgbhsmbciqfgatwmenliauuweraksmwqmmvuhrftcaoduxzeyakjmdhzshcmfxzfwuocpzwhcvrbsstvaisadxxgmylihwsrqnhfvxsqoktldpgfinpvzbkbsgdevqwqezanjqbmupaapsnmyydnxepfjfgcodhqjubovjfarfqavuyubhdxqaqxpvxidfdxkuxytdnzdxqiqbkruokcoddx"
            ],
            "timeline": {
                "dates": [
                    "2023-04-01T20:40:59.556865Z",
                    "2023-04-01T20:40:59.556865Z",
                    "2023-04-01T20:40:59.556865Z",
                    "2023-04-01T20:40:59.556865Z"                    
                ],
                "scores": [
                    5.3,
                    4.5,
                    5.1,
                    5.2                   
                ]
            }
        },
        {
            "exercise": "2bc2fd85d0ad497c864bd026e73a3228",
            "score": 6.1,
            "notes": [
                "ksibplgwghvuhhndjgfztjuasopglzfiwdpgdxdrhwvtlgaetefdmeixmwigtrdoypkgeyfcxzkenuyibfemigryqmpaapesmbihytzybxwzjoipefqblhdkyamudeqezqsqywkhdmqiqmgzgabmlrpejuemydzneqtecgxxpbzrgfasjaqxjnswrerxdquyvwjxvdycmygdjhxfibeqkcgkhbwptxafngdjfbflwgndzkgdcflppjrcvsfafvyzrojlopftqwrllurpiszqqdvgglzwblkkphbyguaimeuyga",
                "eyptnyyckuzvrnpukbcmcqkhbvwwlrbrktapdvjpzhytemttrputoqevcjkvskvvetjaidprixmdbjghjyfvaukagghdnjooohkzwyqadumpcepjbkaghpkbuzcoygikaziyizrcjpkrmtqxuoqwsqdtiowftrtxkuauobkjmgsgspbkyxvusrxrcvhiulwyojvkeksleunlqqzdtdnprsvajayswenhokewzskdayldxxbebuxupcvglagsblheiulzwqcucqgynaxwebitxzfzpbiwuzwxsfokgphuqlsxfb",
                "icjwfqroxxenvzbbkawvlrftqwvuaggxojxvvzldggourokifvxycrdluasgpvcllgpomtnnmpvidijzjqivgyiproidfuzlefnmtejtbhvnkmphptlgsjhvqdebruvrfslcptdzvlroeblqbidwyvjvqheqapvxbnsddvvmotclnxfkyxsvwoypotobaingqmwwziemiypfhybsixdjfyaqrubkdgiownuvzviccswdcheewuapsjmmvwantducnnnusnrlzltqlynqrbdxcinkwnovqcaroqtreouhiybuzh",
                "llgynxvvvhfbgtyohvsnhdanucykvmhtbwehnatysqkxvpzcxqxglyhbbokrhpghqcsgtowecsmaalwpqrgnabzlglpuavgilppbxhpdlwpejhocgecricdtxwsnmwdwldsyumeecmfvoozwubdguayggrcbsrjxihufzoxrcbaceydjpiyzysjhanocdasdubnohzspopobfucowyrfqasjnsgokvsvjsbguirhqqugchftjgnmrbcryzmycmxdiennlqkaazqwfuzvoncnhisqaglqpqcibicmdmufycjbuj",
                "lxxwuqanmxgutabgpqycqlkzypwezwmorbbmssgaoausvejnfbzrbmoqjhipecfygvmzzyaopaawitjwyldtocilvwxtfsebrragltaoryougavyluvztptestoixdmzqfhidgpzoyveodwxjchwtlioizjdggffitmuizhybohhqggisspcbpsecwtnqqpxxjwaxzgfaeuautfernpwjnpguwuyzikyupemqjuoeaaxtkqqapycyfsehbapdwvzgxfdmknnsoiddvzptdasdoycqnlxvkfftdufxnqjqqetch",
                "ufzgpzqbjkkcdtoxntgjnnivogrukjoolyhggayfcsvmemwnxvbtgbrpcyufpuwzyqiycinlcjjjcufayahrpszrdzihtutmlgssupmmdppzvffibbxzrnxkrrgldnyyqtdcotmhwgsggpcrxhwktvwqrewcliaykxfromzypfaqatxtuhmnlletfqfqpngdmgsbhhsanxgiwzkqiwvpqxhjusvbdtlfqgirodjjvcpgjapwdspcjdpopdjfqyaygtrysuchbybvwjvlesehdusgfaayusdprntsfyqedqpxwg",
                "iciozkeyyrejhddqrhbjzbndmejgmaqdvezcghygsanumshbxeuqgcvfznrqqxdwrasbafvbvmpyxrhvqrgjerihxknkukskficinpqfvfbaperalmxptwaifdbbioxgohenldjbauwpqatevfnpfpbjqcigamifxpadaufmzicjjhdckldwlebpvzukavadntvdeakyonugontoeyoedgwymsvqvveuxvrzxzunhdpuhitdwfycczwfjmytvwyiunaoamwjstzpfclwhaxqfbtrqigiohiiyeawvfdpgippzl",
                "jenbnlxbvvviuvpzerbxivwlhrmnjlrjhmmjfbctiztmmdgfsuijxhgyscakilwiaotfxegyuwzgdcpxovvwerxxvcpxliskeidsgmchlftwpyvxoajttdluvalydtinsautfldvmdiztsrdfafwjvtgspkdgsukomtqteopwqseupshaoztmimiuulzrblggtimkkdsokvcxjhdqkaxvtotcqqwgjgaduxttwwuxcrqjfabetscfgfmtinyepfjjyqaqfbobnerryvhrhzyqnsvywqqylacgysuhiohqmajei",
                "jsvrwsbmkbtdgtccsxfxezipbuuijasawkrcafxfuvmzxqmwziaqipjmtdqlwzytommllqxhwhncavwpdekswikeztgpfcbzyhfgvwkjdrzghpphcmemzovzyhgtovwuiovtmmobtahwkzktcxavirzoodalgnrbauueyhaosowtbowptkxrmcgtjnqvpxzuplktcmnwbczjwpbrpmemsjuehonwniijykymvilqrvjjangttkddwxbdtcnccsfcznowxlontvekqopdngooxxcvqdojinfrwxobpljwyclvmh",
                "kcmdxiifbzsjrtfiqdxqmrxepjijurackwtnvaaaiaapzxvaygcmaazdrsmixlsbmpzbxawlxigitbhrjziugmbkslkorckucecvqbrvqnfmvxrwvxeclojfznqsylxdpjuxosyvyzdhvtddrbmoxjbhjzpumvhohvvujcyquwynejjehqqwydqujkkeukapupssfhxzdrphnacfjtttshnpzufciuuxswbfbnxciqwrvdndtricszfstmwscgeazcqoxztekijzdrcmfboqbzovcvkutwwqindcgoyzoaqkkc"
            ],
            "timeline": {
                "dates": [
                    "2023-04-01T20:40:59.556865Z",
                    "2023-04-01T20:40:59.556865Z",
                    "2023-04-01T20:40:59.556865Z",
                    "2023-04-01T20:40:59.556865Z"                    
                ],
                "scores": [
                    5.3,
                    4.5,
                    5.1,
                    5.2                   
                ]
            }
        }        
    ]   
}

export const handlers = [
    http.get('https://epicus-395019.ew.r.appspot.com/v1/status/team/questionnaire/active/', () => {
        return HttpResponse.json(mockResponseQuestionnaire)
    }),
    http.get('https://epicus-395019.ew.r.appspot.com/v1/status/team/dimensions/active/', () => {
        return HttpResponse.json(mockResponseDimension)
    }),
    http.get('https://epicus-395019.ew.r.appspot.com/v1/status/team/scheduler/', () => {
        return HttpResponse.json(mockResponsescheduler)
    }),
    http.get('https://epicus-395019.ew.r.appspot.com/v1/status/team/request/', () => {
        return HttpResponse.json(mockResponseRequest)
    }),
    http.get('https://epicus-395019.ew.r.appspot.com/v1/status/team/response/default/', () => {
        return HttpResponse.json(mockResponseDefault)
    }),
    http.get('https://epicus-395019.ew.r.appspot.com/v1/status/team/score/', () => {
        return HttpResponse.json(mockResponseScore)
    }),
    http.get('https://epicus-395019.ew.r.appspot.com/v1/status/team/notes/', () => {
        return HttpResponse.json(mockResponseNotes)
    }),
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())


describe('getNotesReport', () => {
    test('get note reports', async () => {
        const statusStore = useStatusStore();
        await statusStore.notes.fetch();
        let note = statusStore.notes.value.get('20a3aad10eaf4247abbf0d9daed59da4');
        expect(note).toEqual(mockResponseNotes['20a3aad10eaf4247abbf0d9daed59da4']);
    })
})

describe('activeScores', () => {
    test('get active scores', async () => {
        const statusStore = useStatusStore();
        await statusStore.scores.fetch();
        let score = statusStore.scores.value.get('f1cdd6d430e845e19ce955a371fc610c');
        expect(score).toEqual(mockResponseScore['f1cdd6d430e845e19ce955a371fc610c']);
    })
})

describe('request', () => {
    test('get request', async () => {
        const statusStore = useStatusStore();
        await statusStore.requests.fetch();
        let req = statusStore.requests.value.get('20a3aad10eaf4247abbf0d9daed59da4')        
        expect(req).toEqual(mockResponseRequest['20a3aad10eaf4247abbf0d9daed59da4']);
    })
})

describe('getDefaultResponse', () => {
    test('get response default', async () => {
        const statusStore = useStatusStore();
        await statusStore.defaultResponses.fetch()
        let defresponse = statusStore.defaultResponses.value.get('475b1f09434745d5b76780c8f3ab1162')        
        expect(defresponse).toEqual(mockResponseDefault['475b1f09434745d5b76780c8f3ab1162']);
    })
})

describe('teamCurrentScore', () => {
    test('get current score', async () => {
        const statusStore = useStatusStore();
        await statusStore.scores.fetch()
        let currentscrore = statusStore.scores.value.get('f1cdd6d430e845e19ce955a371fc610c')          
        expect(currentscrore[1].score).toEqual(mockResponseScore['f1cdd6d430e845e19ce955a371fc610c'][1].score);
    })
})

describe('teamActiveRank', () => {
    test('get current rank', async () => {
        const statusStore = useStatusStore();
        await statusStore.scores.fetch()
        let currentrank = statusStore.scores.value.get('f1cdd6d430e845e19ce955a371fc610c')                
        expect(currentrank[1].rank).toEqual(mockResponseScore['f1cdd6d430e845e19ce955a371fc610c'][1].rank);
    })
})

describe('teamSchedulers', () => {
    test('get team schedular', async () => {
        const statusStore = useStatusStore();
        await statusStore.schedulers.fetch()
        let teamschedule  = statusStore.schedulers.value
        //console.log(teamschedule[0].team);                        
        expect(teamschedule[0].team).toEqual(mockResponsescheduler[0].team);
    })
})

describe('teamSurveys', () => {
    test('get team survey', async () => {
        const statusStore = useStatusStore();
        await statusStore.requests.fetch();
        let req = statusStore.requests.value.get('20a3aad10eaf4247abbf0d9daed59da4')        
        expect(req).toEqual(mockResponseRequest['20a3aad10eaf4247abbf0d9daed59da4']);
    })
})

describe('teamHasDimScores', () => {
    test('get Dim score', async () => {
        const statusStore = useStatusStore();
        await statusStore.scores.fetch();
        let dimscore = statusStore.scores.value.get('f1cdd6d430e845e19ce955a371fc610c') 
       // console.log(dimscore[0].dim_score_dict)       
        expect(dimscore[0].dim_score_dict).toEqual(mockResponseScore['f1cdd6d430e845e19ce955a371fc610c'][0]['dim_score_dict']);
    })
})

describe('teamActiveScores', () => {
    test('get active score', async () => {
        const statusStore = useStatusStore();
        await statusStore.scores.fetch();
        let dimscore = statusStore.scores.value.get('f1cdd6d430e845e19ce955a371fc610c') 
       // console.log(dimscore[0].dim_score_dict)       
        expect(dimscore[0].dim_score_dict).toEqual(mockResponseScore['f1cdd6d430e845e19ce955a371fc610c'][0]['dim_score_dict']);
    })
})

describe('teamComingSurveys', () => {
    test('get team coming survey', async () => {
        const statusStore = useStatusStore();
        let survey = await statusStore.teamSurveys('20a3aad10eaf4247abbf0d9daed59da4')
       // console.log(survey[0].start);     
        expect(survey[0].start).toEqual(mockResponseRequest['20a3aad10eaf4247abbf0d9daed59da4'][0].start);
    })
})


describe('teamActiveSurveys', () => {
    test('get team active survey', async () => {
        const statusStore = useStatusStore();
        let survey = await statusStore.teamActiveSurveys('475b1f09434745d5b76780c8f3ab1162')
        let now = new Date(Date.now())          
        expect(survey[0].responded).toBe(false)
        expect(new Date(survey[0].start)).lessThan(now)
        expect(new Date(survey[0].end)).greaterThan(now)
    })

    test('get team responded true', async () => {
        const statusStore = useStatusStore();
        let surveylist = await statusStore.teamActiveSurveys('20a3aad10eaf4247abbf0d9daed59da4')
        let now = new Date(Date.now());          
        expect(surveylist).toEqual([])       
    })

    
})