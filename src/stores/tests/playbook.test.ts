import { describe, test, expect, beforeAll, afterAll, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia';
import { usePlaybookStore } from '@/stores/playbook';
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

const pinia = setActivePinia(createPinia());


const mockResponseTeam = {

    "95f7b74c408f41fe8296cf64606b82b9": {        
        "initial_scores": {            
            "Desired outcomes": 0.3969395688766164,            
            "Psychological safety": 0.8122874172004585,            
            "Introspection": 0.3868986079670007,            
            "Contribution": 0.2227748174763523,            
            "Energy": 0.6859971488825638,            
            "Bonding": 0.16458156900232856,            
            "Excellence": 0.7490976539659678
        },
        "title": "Celebrate Success: Recognizing Individual and Team Achievements",
        "description": "**Description:**\n    The \"Celebrate Success\" play focuses on implementing a culture of recognition within your team, where individual and team achievements, regardless of their size, are publicly acknowledged and celebrated. This play aims to boost team morale, foster a positive work environment, and motivate team members to strive for continuous improvement. By following the tips and tricks below, you can establish a culture of appreciation and inspire your team to achieve even greater success.\n\n    ### Tips and Tricks:\n\n    1. **Be Proactive and Timely:**\n    - Actively seek out and stay informed about individual and team accomplishments.\n    - Promptly acknowledge and celebrate achievements as close to their occurrence as possible.\n    - Demonstrate your attentiveness by recognizing progress and milestones along the way.\n\n    2. **Be Specific and Personal:**\n    - Clearly articulate the achievement being recognized.\n    - Mention the individuals or team members involved, highlighting their contributions.\n    - Connect the achievement to its impact on the project, team, or organization.\n\n    3. **Choose the Right Platform:**\n    - Utilize various communication channels such as team meetings, email newsletters, or a dedicated collaboration platform to share the recognition.\n    - Consider leveraging social media, company intranet, or notice boards to reach a wider audience.\n    - Adapt the platform to the preferences and accessibility of your team members.\n\n    4. **Make it Engaging and Memorable:**\n    - Incorporate visual elements like photos, videos, or infographics to make the celebration more captivating.\n    - Organize team events, special gatherings, or virtual celebrations to commemorate achievements.\n    - Encourage team members to share their personal experiences and reflections related to the recognized achievement.\n\n    5. **Encourage Peer Recognition:**\n    - Promote a culture of peer-to-peer recognition and celebrate the accomplishments of team members by their colleagues.\n    - Implement a system for team members to nominate and acknowledge each other's contributions.\n    - Provide opportunities for public shout-outs or testimonials during team meetings or dedicated recognition sessions.\n\n    ### Resistance that could be encountered:\n\n    1. **Fear of Overlooking Others:**\n    - Emphasize the importance of inclusive recognition and communicate the intention to celebrate achievements across the entire team.\n    - Encourage team members to actively participate in acknowledging and appreciating each other's successes.\n\n    2. **Time Constraints:**\n    - Highlight the value of recognition in building team morale and motivation.\n    - Foster an understanding that investing time in celebrating achievements contributes to long-term productivity and engagement.\n\n    3. **Resistance to Change:**\n    - Communicate the purpose and benefits of implementing a culture of recognition.\n    - Address any concerns by involving team members in the process and encouraging their input and suggestions.\n\n    By implementing this play, you can create an environment where individual and team achievements are valued, celebrated, and fuel the motivation to excel. Regularly acknowledging successes, both big and small, reinforces a positive team culture and inspires ongoing improvement.",
        "video": null,
        "frequency": "O",
        "information_url": "https://www.qgcwdacl.com",
        "information_text": "rztwkoyhkolnapmnzfcrmlqgcuogbzlogheebhnrjmbmhbypmwwkfbbhvedjlugweheoieukpeiogzgnjgurbpcycs",
        "created_at": "2023-11-06T20:41:12.843144Z",
        "updated_at": "2023-11-06T20:41:12.843176Z",
        "when": "IV"
    },

    "71c50c02e970433e8273dfab15d97a10": {
        "initial_scores": {
            "Desired outcomes": 0.1689862105860842,
            "Psychological safety": 0.4750672085190669,
            "Introspection": 0.3640392843676634,
            "Contribution": 0.48560046675995916,
            "Energy": 0.7162715624943838,
            "Bonding": 0.2655165806724361,
            "Excellence": 0.8832644095557833
        },

        "title": "Establish Effective Communication Guidelines",
        "description": "The \"Establish Effective Communication Guidelines\" play focuses on developing team communication guidelines that foster open dialogue and active listening. By setting clear expectations and promoting effective communication practices, teams can enhance collaboration, reduce misunderstandings, and improve overall team dynamics. This play provides strategies to create communication guidelines that promote open dialogue and active listening within the team.\n\n    ### Tips and Tricks:\n\n    1. **Involve the Team:**\n    - Involve the entire team in the process of establishing communication guidelines.\n    - Hold a dedicated meeting or workshop to discuss and gather input from team members.\n    - Encourage open and honest discussions to ensure everyone's perspectives are considered.\n\n    2. **Define the Purpose and Principles:**\n    - Clearly define the purpose of the communication guidelines.\n    - Identify the core principles that guide effective communication within the team.\n    - Examples of principles may include respect, active listening, transparency, and constructive feedback.\n\n    3. **Set Expectations:**\n    - Clearly outline the expected behaviors and communication norms.\n    - Specify guidelines for open dialogue, active listening, and respectful communication.\n    - Include guidelines on the appropriate use of communication channels (e.g., email, meetings, instant messaging) to ensure efficient and effective communication.\n\n    4. **Provide Examples and Scenarios:**\n    - Offer examples of effective communication behaviors and scenarios.\n    - Illustrate how active listening, asking clarifying questions, and expressing ideas respectfully contribute to successful communication.\n    - Discuss common communication challenges and provide guidance on how to overcome them.\n\n    5. **Regularly Review and Reinforce:**\n    - Schedule periodic reviews and discussions to reinforce the communication guidelines.\n    - Encourage team members to share their experiences and suggest improvements.\n    - Ensure the guidelines remain relevant and address evolving team dynamics and communication needs.\n\n    ### Resistance that could be encountered:\n\n    1. **Resistance to Change:**\n    - Some team members may resist adopting new communication guidelines.\n    - Highlight the benefits of effective communication in fostering collaboration, reducing conflicts, and improving team performance.\n    - Address concerns and emphasize that the guidelines are designed to enhance team dynamics and overall effectiveness.\n\n    2. **Lack of Awareness:**\n    - Team members may not be aware of the importance of communication guidelines.\n    - Educate the team about the impact of effective communication on productivity, collaboration, and employee satisfaction.\n    - Share success stories or case studies that demonstrate the benefits of implementing such guidelines.\n\n    3. **Lack of Buy-in:**\n    - Some team members may not fully buy into the importance of the guidelines.\n    - Encourage open dialogue and active listening during the process of developing the guidelines.\n    - Seek input from all team members and consider their perspectives to ensure a sense of ownership and buy-in.\n\n    By implementing this play and developing communication guidelines, teams can establish a foundation for effective communication. The guidelines will provide a framework for open dialogue, active listening, and respectful communication, leading to improved collaboration, reduced misunderstandings, and enhanced team performance.",
        "video": null,
        "frequency": "X",
        "information_url": "https://www.kynjcllz.com",
        "information_text": "lncnbhcyrnstyrsajzeyorzdqvqcouadfszjwiowczcasonhceuyvpiplytjlqglfvnumseahfwsqjczieipfpxqnh",
        "created_at": "2023-11-06T20:41:12.843226Z",
        "updated_at": "2023-11-06T20:41:12.843240Z",
        "when": "IN"
    },

    "5fca1778aa354bd1894ddbef14069186": {
        "initial_scores": {
            "Desired outcomes": 0.3830450047212819,
            "Psychological safety": 0.8954586896706689,
            "Introspection": 0.05479554909223705,
            "Contribution": 0.7840549479460384,
            "Energy": 0.009806862112772374,
            "Bonding": 0.8482533122151908,
            "Excellence": 0.7222821160671669
        },

        "title": "Encourage Open Discussion",
        "description": "The \"Encourage Open Discussion\" play focuses on creating a team environment that values open dialogue, encourages diverse perspectives, and fosters collaboration. By promoting open discussion, teams can leverage the collective intelligence, creativity, and problem-solving capabilities of all team members. This play provides strategies to foster an inclusive culture where everyone feels comfortable sharing their ideas and opinions.\n\n    ### Tips and Tricks:\n\n    1. **Establish Psychological Safety:**\n    - Create a psychologically safe environment where team members feel comfortable expressing their thoughts and ideas without fear of judgment or negative consequences.\n    - Encourage inclusivity, respect, and active listening to ensure everyone's voice is heard and valued.\n\n    2. **Set Clear Expectations:**\n    - Clearly communicate the importance of open discussion and encourage all team members to actively participate.\n    - Establish ground rules that promote respectful and constructive dialogue, such as allowing everyone to speak without interruption and encouraging diverse perspectives.\n\n    3. **Create Opportunities for Discussion:**\n    - Schedule regular team meetings, brainstorming sessions, or workshops dedicated to open discussion and idea sharing.\n    - Provide platforms or channels where team members can contribute ideas asynchronously, allowing for more thoughtful and diverse input.\n\n    4. **Encourage Active Listening:**\n    - Emphasize the importance of active listening to ensure that everyone feels heard and understood.\n    - Encourage team members to paraphrase and ask clarifying questions to demonstrate their engagement with others' viewpoints.\n\n    5. **Facilitate Collaboration and Idea Generation:**\n    - Use collaborative tools or techniques such as brainstorming sessions, design thinking exercises, or group discussions to encourage the generation of new ideas.\n    - Foster an environment where ideas are built upon and refined collectively, leveraging the collective intelligence of the team.\n\n    6. **Celebrate and Acknowledge Contributions:**\n    - Recognize and appreciate team members who contribute valuable insights or ideas during open discussions.\n    - Celebrate successful outcomes that are a result of open dialogue and collaborative problem-solving.\n\n    ### Resistance that could be encountered:\n\n    1. **Fear of Speaking Up:**\n    - Some team members may hesitate to openly express their thoughts or ideas due to a fear of judgment or rejection.\n    - Create a safe and supportive environment where all opinions are valued and encourage team members to take calculated risks in sharing their perspectives.\n\n    2. **Dominant Voices and Groupthink:**\n    - Certain team members may dominate discussions, hindering the participation of others and limiting diverse perspectives.\n    - Implement strategies to ensure equitable participation, such as setting time limits for contributions or using facilitation techniques to encourage quieter voices to speak up.\n\n    3. **Lack of Engagement:**\n    - Some team members may be disengaged or reluctant to participate actively in discussions.\n    - Identify and address the underlying reasons for disengagement, such as personal conflicts or feeling undervalued.\n    - Provide opportunities for one-on-one conversations to understand individual concerns and motivations.\n\n    By implementing this play and encouraging open discussion within the team, you can unlock the collective potential of the team members and promote a culture of collaboration and innovation. Open dialogue allows for the exploration of diverse perspectives, fosters creativity, and leads to more effective decision-making. With a focus on inclusivity and active participation, the team can achieve higher levels of performance and drive positive outcomes.",
        "video": null,
        "frequency": "H",
        "information_url": "https://www.bvodbrfh.com",
        "information_text": "fxuzziburqsvxlujkbpiuqpdzepirztaoyxhhvivkduudazckfoodicgycpogzqylqclmhexssxzvyrblucwtawyen",
        "created_at": "2023-11-06T20:41:12.843284Z",
        "updated_at": "2023-11-06T20:41:12.843296Z",
        "when": "IN"
    },

    "7e17656b8ed444c7bb18c7b4eb620e87": {
        "initial_scores": {
            "Desired outcomes": 0.1179828570491801,
            "Psychological safety": 0.08420846812233673,
            "Introspection": 0.45956929616583186,
            "Contribution": 0.23289676347223331,
            "Energy": 0.7103067837936027,
            "Bonding": 0.1711757132547751,
            "Excellence": 0.8587210653428574
        },

        "title": "Encourage Peer-to-Peer Feedback",
        "description": "The \"Encourage Peer-to-Peer Feedback\" play focuses on promoting a culture of continuous improvement and collaboration within the team by encouraging team members to provide feedback to one another. Peer-to-peer feedback allows for diverse perspectives, enhances learning, and strengthens relationships. This play provides strategies to create an environment where peer feedback is valued and actively practiced.\n\n    ### Tips and Tricks:\n\n    1. **Promote a Feedback-Friendly Culture:**\n    - Establish a team norm that values and encourages peer-to-peer feedback.\n    - Emphasize the importance of feedback as a tool for growth, learning, and improvement.\n    - Create a safe and supportive environment where team members feel comfortable giving and receiving feedback.\n\n    2. **Educate on Giving and Receiving Feedback:**\n    - Offer training or workshops on giving and receiving feedback effectively.\n    - Provide guidance on constructive feedback techniques, active listening, and maintaining a growth mindset.\n    - Encourage individuals to be open to feedback and view it as an opportunity for growth.\n\n    3. **Lead by Example:**\n    - Team leaders should model the behavior of giving and receiving feedback openly and constructively.\n    - Regularly provide feedback to team members and openly acknowledge the value of peer feedback.\n    - Share personal experiences of how feedback has helped in personal and professional growth.\n\n    4. **Provide Feedback Frameworks:**\n    - Offer feedback frameworks or templates to guide team members in giving feedback.\n    - Examples include the Situation-Behavior-Impact (SBI) model or the Feedback Sandwich approach.\n    - These frameworks provide structure and clarity for delivering feedback effectively.\n\n    5. **Encourage Specific and Actionable Feedback:**\n    - Encourage team members to provide specific and actionable feedback.\n    - Focus on behaviors or actions that can be observed and improved upon.\n    - Encourage the use of examples and suggestions for improvement.\n\n    6. **Recognize and Celebrate Feedback Exchange:**\n    - Recognize and celebrate instances where team members provide valuable feedback to one another.\n    - Highlight success stories of how peer feedback has contributed to individual and team growth.\n    - Foster a culture where feedback is seen as a positive contribution to personal and team development.\n\n    ### Resistance that could be encountered:\n\n    1. **Reluctance to Give or Receive Feedback:**\n    - Some team members may be hesitant to provide feedback or receive it due to fear, discomfort, or a lack of trust.\n    - Address concerns and misconceptions around feedback by emphasizing its benefits and creating a safe space for sharing.\n    - Offer support and guidance to individuals who struggle with giving or receiving feedback.\n\n    2. **Unbalanced Power Dynamics:**\n    - Power dynamics within the team or hierarchical structures may inhibit open and honest peer feedback.\n    - Encourage team members to provide feedback regardless of organizational hierarchy.\n    - Emphasize that feedback is focused on growth and improvement, not personal judgments or evaluations.\n\n    3. **Lack of Feedback Skills:**\n    - Some team members may lack the necessary skills or confidence to provide effective feedback.\n    - Offer training or workshops on feedback delivery techniques, active listening, and providing constructive criticism.\n    - Provide resources and tools to support team members in developing their feedback skills.\n\n    By implementing this play and encouraging peer-to-peer feedback within the team, you can foster a culture of growth, collaboration, and continuous improvement. Peer feedback enhances learning, strengthens relationships, and empowers team members to support each other's development. With open and constructive feedback exchanges, the team can reach higher levels of performance and create a positive and engaging work environment.",
        "video": null,
        "frequency": "H",
        "information_url": "https://www.jlruhctv.com",
        "information_text": "rfxpcpbtfuasojtspwkptubxmaymkmvitimxfepjdgrjyyqidjkesxfuqdylxwpnleiwgrtfvqjvgjbhsbidikpuve",
        "created_at": "2023-11-06T20:41:12.843337Z",
        "updated_at": "2023-11-06T20:41:12.843348Z",
        "when": "IV"
    },

    "c352f7b073184d238fd3e1629e5f236b": {
        "initial_scores": {
            "Desired outcomes": 0.07667598093418004,
            "Psychological safety": 0.9169007761854762,
            "Introspection": 0.022373188849144743,
            "Contribution": 0.12690866910147192,
            "Energy": 0.8915776887404344,
            "Bonding": 0.3451192016325815,
            "Excellence": 0.07169312128409333
        },

        "title": "Practice Active Listening",
        "description": "The \"Practice Active Listening\" play focuses on fostering effective communication within the team by emphasizing the importance of active listening. Active listening involves fully engaging with the speaker, understanding their message, and responding thoughtfully. By practicing active listening, teams can improve understanding, strengthen relationships, and enhance overall communication effectiveness. This play provides strategies to encourage and cultivate active listening skills within the team.\n\n    ### Tips and Tricks:\n\n    1. **Be Present and Engaged:**\n    - Be fully present during conversations, meetings, or discussions.\n    - Maintain eye contact, nod or provide non-verbal cues to show engagement.\n    - Avoid distractions and give your undivided attention to the speaker.\n\n    2. **Listen without Interruption:**\n    - Resist the urge to interrupt or interject your own thoughts.\n    - Allow the speaker to express their complete thoughts without interruption.\n    - Avoid formulating your response while the speaker is still talking.\n\n    3. **Use Reflective Listening Techniques:**\n    - Reflect back on what the speaker has said to demonstrate understanding.\n    - Paraphrase or summarize their points to ensure accuracy.\n    - Ask clarifying questions to gain deeper insights and clarify any uncertainties.\n\n    4. **Practice Empathy:**\n    - Put yourself in the speaker's shoes and try to understand their perspective.\n    - Show empathy by acknowledging their emotions and validating their experiences.\n    - Avoid jumping to conclusions or making assumptions.\n\n    5. **Be Mindful of Non-Verbal Communication:**\n    - Pay attention to non-verbal cues, such as facial expressions and body language.\n    - Notice the speaker's tone of voice and overall demeanor.\n    - Interpret non-verbal signals to gain a deeper understanding of the speaker's message.\n\n    6. **Avoid Judgment and Preconceptions:**\n    - Maintain an open and non-judgmental mindset while listening.\n    - Suspend preconceived notions or biases that may hinder understanding.\n    - Approach each conversation with curiosity and a willingness to learn.\n\n    ### Resistance that could be encountered:\n\n    1. **Lack of Awareness:**\n    - Some team members may not fully understand the importance of active listening.\n    - Educate the team about the benefits of active listening in fostering effective communication, building trust, and improving collaboration.\n    - Share examples and success stories that demonstrate the positive impact of active listening.\n\n    2. **Time Constraints:**\n    - Team members may feel pressured by time constraints, leading to rushed conversations.\n    - Emphasize the value of active listening in saving time by minimizing misunderstandings and promoting efficient communication.\n    - Encourage the team to prioritize active listening as an essential component of effective teamwork.\n\n    3. **Unconscious Habits:**\n    - Team members may have developed unconscious habits that hinder active listening.\n    - Provide regular reminders and opportunities for the team to reflect on their listening habits.\n    - Offer training or workshops focused on enhancing active listening skills.\n\n    By implementing this play and practicing active listening within the team, you can foster a culture of effective communication, understanding, and collaboration. Active listening builds stronger relationships, prevents miscommunication, and enables the team to work together more harmoniously towards shared goals.",
        "video": null,
        "frequency": "O",
        "information_url": "https://www.ddjljoea.com",
        "information_text": "qqyshyukvclpsczzblfasnytpvbcxivhjfxxbmmfupxvzmiupjicdenaimbrtphlzggxvfipcatdzakhaqwoqmuwss",
        "created_at": "2023-11-06T20:41:12.843387Z",
        "updated_at": "2023-11-06T20:41:12.843398Z",
        "when": "IV"
    },

    "d4503f5ec03444d2b3f43af1a549eedf": {
        "initial_scores": {
            "Desired outcomes": 0.05978901654519719,
            "Psychological safety": 0.8138148461728345,
            "Introspection": 0.3140255948903685,
            "Contribution": 0.09086373373900891,
            "Energy": 0.4021337938828047,
            "Bonding": 0.6918769418852035,
            "Excellence": 0.5710659189848946
        },

        "title": "Promote Equal Participation",
        "description": "The \"Promote Equal Participation\" play focuses on creating an inclusive team environment where every team member has an equal opportunity to participate and contribute. By promoting equal participation, teams can leverage the diverse perspectives and expertise of each member, leading to more innovative solutions and improved team performance. This play provides strategies to ensure that all team members feel valued, heard, and included in team discussions and decision-making processes.\n\n    ### Tips and Tricks:\n\n    1. **Create a Safe and Inclusive Environment:**\n    - Foster a safe and non-judgmental environment where everyone feels comfortable expressing their opinions and ideas.\n    - Encourage open dialogue and respect for diverse perspectives.\n    - Establish ground rules that promote inclusivity, such as giving equal airtime and considering all viewpoints.\n\n    2. **Rotate Facilitation Roles:**\n    - Assign rotating facilitation roles to team members for meetings or discussions.\n    - This ensures that different individuals take turns leading and guiding the conversation, allowing for varied perspectives and participation.\n\n    3. **Encourage Active Participation:**\n    - Actively encourage quieter team members to contribute their thoughts and ideas.\n    - Create opportunities for individuals to share their expertise or take the lead on specific tasks or projects.\n    - Recognize and value different communication styles and personalities within the team.\n\n    4. **Practice Balanced Speaking Time:**\n    - Monitor and track speaking time during meetings to ensure balanced participation.\n    - Encourage team members who tend to dominate conversations to be mindful of others' input and allow space for quieter voices to be heard.\n\n    5. **Utilize Collaboration Tools:**\n    - Utilize collaboration tools or platforms that provide equal opportunities for virtual participation.\n    - Use features like polling or chat functions to gather input from all team members, especially in larger team settings or remote work environments.\n\n    6. **Establish Clear Decision-Making Processes:**\n    - Define and communicate transparent decision-making processes within the team.\n    - Ensure that decisions are made collectively, considering input from all team members.\n    - Empower individuals to voice their opinions and contribute to the decision-making process.\n\n    ### Resistance that could be encountered:\n\n    1. **Dominant Personalities:**\n    - Some team members with dominant personalities may unintentionally monopolize discussions and decision-making.\n    - Encourage self-awareness and promote active listening among team members.\n    - Remind individuals to create space for others to participate and share their perspectives.\n\n    2. **Hierarchical Structures or Power Dynamics:**\n    - Hierarchical structures or power dynamics within the team may discourage equal participation.\n    - Foster a culture of psychological safety where all team members feel comfortable speaking up, regardless of their position.\n    - Ensure that leaders actively seek input from all team members and value diverse perspectives.\n\n    3. **Cultural or Language Barriers:**\n    - Cultural or language barriers can inhibit participation, particularly in diverse teams.\n    - Promote inclusivity by providing language support, offering translation services, or encouraging written contributions.\n    - Foster an environment where individuals feel comfortable asking for clarification or expressing themselves in their preferred language.\n\n    By implementing this play and promoting equal participation within the team, you can create an inclusive and collaborative environment where every team member feels valued and empowered to contribute their unique perspectives. By leveraging the diverse knowledge and experiences of each individual, the team can achieve better outcomes and foster a stronger sense of belonging and engagement among team members.",
        "video": null,
        "frequency": "O",
        "information_url": "https://www.fhtfqziq.com",
        "information_text": "uktlrxnvksifnunbdybfebpfezbycossbvyxjkmptkpnkolfkdmbucqjhbqstoqclggxnaervyplkzncvxmxzsdrwl",
        "created_at": "2023-11-06T20:41:12.843435Z",
        "updated_at": "2023-11-06T20:41:12.843445Z",
        "when": "IV"
    },

    "cfa57edabac640688a896c0cb79fd8e7": {
        "initial_scores": {
            "Desired outcomes": 0.48837753654986393,
            "Psychological safety": 0.5230282586593457,
            "Introspection": 0.6216838462124948,
            "Contribution": 0.411583657150551,
            "Energy": 0.584781581929283,
            "Bonding": 0.8535051614877341,
            "Excellence": 0.5300689770088729
        },

        "title": "Provide Effective Feedback",
        "description": "The \"Provide Effective Feedback\" play focuses on establishing a culture of feedback within the team, where constructive feedback is shared regularly to promote growth, learning, and continuous improvement. By providing effective feedback, teams can strengthen communication, enhance performance, and foster a supportive environment. This play provides strategies to help team members deliver feedback in a constructive and impactful manner.\n\n    ### Tips and Tricks:\n\n    1. **Be Specific and Actionable:**\n    - Provide feedback that is specific, clear, and focused on observable behaviors or actions.\n    - Clearly articulate the impact of the behavior and suggest actionable steps for improvement.\n    - Avoid generalizations or personal attacks and focus on the behavior rather than the individual.\n\n    2. **Use the SBI Framework:**\n    - Utilize the Situation-Behavior-Impact (SBI) framework for delivering feedback.\n    - Describe the situation, the observed behavior, and the impact it had on the individual or team.\n    - This framework helps provide a structured and objective approach to feedback delivery.\n\n    3. **Balance Positive and Constructive Feedback:**\n    - Acknowledge and appreciate the strengths and achievements of team members.\n    - Balance constructive feedback with positive reinforcement to maintain a supportive environment.\n    - Highlight areas of improvement while also recognizing and celebrating successes.\n\n    4. **Encourage Two-Way Feedback:**\n    - Foster a culture of open communication by encouraging team members to provide feedback to one another.\n    - Promote the idea that feedback is a valuable tool for growth and development.\n    - Create channels or platforms where team members can share feedback anonymously if needed.\n\n    5. **Be Timely and Consistent:**\n    - Provide feedback in a timely manner, preferably close to the observed behavior or action.\n    - Avoid storing up feedback for formal performance reviews or evaluations.\n    - Consistently provide feedback to ensure continuous improvement and ongoing development.\n\n    6. **Active Listening and Follow-up:**\n    - Actively listen to the receiver's perspective and ensure their input is valued.\n    - Engage in a constructive dialogue, seeking to understand their point of view.\n    - Follow up with support, resources, or additional guidance to help the individual make improvements.\n\n    ### Resistance that could be encountered:\n\n    1. **Fear of Repercussions:**\n    - Team members may be hesitant to provide feedback due to fear of negative consequences or strained relationships.\n    - Create a psychologically safe environment where feedback is seen as an opportunity for growth and improvement.\n    - Encourage open and honest communication, emphasizing that feedback is intended to support development rather than criticize.\n\n    2. **Defensiveness and Resistance:**\n    - Individuals receiving feedback may become defensive or resistant to accepting it.\n    - Approach feedback conversations with empathy and focus on the constructive nature of the feedback.\n    - Allow individuals time to process the feedback and offer support in addressing areas for improvement.\n\n    3. **Lack of Feedback Skills:**\n    - Team members may lack the necessary skills or confidence to provide effective feedback.\n    - Offer training or workshops on feedback delivery techniques and provide resources to support skill development.\n    - Foster a culture of peer feedback, where team members can practice and learn from one another.\n\n    By implementing this play and promoting effective feedback within the team, you can foster a culture of growth, learning, and continuous improvement. Effective feedback helps individuals and the team as a whole to enhance their performance, address areas of development, and create a supportive and collaborative work environment.",
        "video": null,
        "frequency": "O",
        "information_url": "https://www.jngpkswz.com",
        "information_text": "kxoxvmvnvuaypcuybpaymdefpghmjtxrnmolkunmqchmhkvpcadlgknqgcaxdxzpmzmtfarhnvutrnwbrvbiaaenwp",
        "created_at": "2023-11-06T20:41:12.843480Z",
        "updated_at": "2023-11-06T20:41:12.843490Z",
        "when": "IV"
    },

    "d10a854994d544e79a6411b0b3adf7fe": {
        "initial_scores": {
            "Desired outcomes": 0.6721909880211332,
            "Psychological safety": 0.7848640721360174,
            "Introspection": 0.03853112475750631,
            "Contribution": 0.6189499510496548,
            "Energy": 0.3514268333430456,
            "Bonding": 0.5918628982201792,
            "Excellence": 0.2652839261320252
        },
        "title": "Provide Opportunities for Reflection",
        "description": "The \"Provide Opportunities for Reflection\" play focuses on creating dedicated moments for team members to reflect on their experiences, processes, and outcomes. Reflection allows individuals and teams to gain valuable insights, learn from past experiences, and identify areas for improvement. This play provides strategies to incorporate regular reflection practices that foster a culture of learning, growth, and continuous improvement within the team.\n\n    ### Tips and Tricks:\n\n    1. **Schedule Dedicated Reflection Time:**\n    - Set aside dedicated time during team meetings or project milestones for reflection.\n    - Ensure that reflection becomes a regular and integral part of team processes and workflows.\n\n    2. **Create a Safe and Non-Judgmental Space:**\n    - Foster a safe environment where team members feel comfortable sharing their thoughts, challenges, and lessons learned.\n    - Encourage open and honest reflection by emphasizing that it is an opportunity for growth and improvement, not a platform for blame or judgment.\n\n    3. **Ask Thought-Provoking Questions:**\n    - Provide prompts or questions that guide team members' reflection.\n    - Examples include: \"What worked well?\", \"What could have been done differently?\", \"What lessons did we learn?\", and \"What improvements can we make moving forward?\"\n\n    4. **Encourage Diverse Perspectives:**\n    - Promote inclusive reflection by seeking input from all team members, regardless of their roles or seniority.\n    - Emphasize the value of diverse perspectives in uncovering different insights and solutions.\n\n    5. **Document Reflection Findings:**\n    - Encourage team members to capture their reflections and insights in written or digital formats.\n    - Documenting the findings helps in tracking progress, identifying patterns, and referring back to previous reflections for future reference.\n\n    6. **Implement Changes Based on Reflections:**\n    - Encourage the team to use the insights gained from reflection to implement changes and improvements.\n    - Take action on identified areas for improvement to ensure that reflection translates into tangible outcomes.\n\n    ### Resistance that could be encountered:\n\n    1. **Lack of Time or Prioritization:**\n    - Team members may perceive reflection as an additional task that competes with their daily workload.\n    - Highlight the long-term benefits of reflection in terms of enhanced learning, improved performance, and more effective processes.\n    - Embed reflection practices into existing routines or workflows to make it a seamless part of the team's activities.\n\n    2. **Resistance to Change or Self-Reflection:**\n    - Some team members may resist the introspective nature of reflection or be hesitant to acknowledge areas for improvement.\n    - Foster a growth mindset and create an environment where mistakes and challenges are seen as opportunities for learning and growth.\n    - Lead by example and openly share personal reflections and lessons learned to encourage others to do the same.\n\n    3. **Lack of Structure or Guidance:**\n    - Team members may struggle with knowing how to approach reflection or what aspects to focus on.\n    - Provide guidance or templates to facilitate the reflection process, such as reflection prompts or structured reflection frameworks.\n    - Offer support and encourage discussions to help team members gain clarity and derive meaning from their reflections.\n\n    By implementing this play and providing opportunities for reflection within the team, you can foster a culture of learning, growth, and continuous improvement. Reflection allows individuals and teams to gain valuable insights, learn from past experiences, and drive positive change. Through regular and intentional reflection practices, the team can enhance their performance, optimize processes, and achieve greater success.",
        "video": null,
        "frequency": "X",
        "information_url": "https://www.gfblkmic.com",
        "information_text": "neadcwnigdbrqlnejfmbpcholzpzzapolryukbtfyxkklpcbrjhloasouuhfyxnabxhvktvxnzjkgjpwwbtbylhqyp",
        "created_at": "2023-11-06T20:41:12.843524Z",
        "updated_at": "2023-11-06T20:41:12.843534Z",
        "when": "IV"
    }
}

const mockResponseExercises = {

    "055740fe70754592a074b764250943f8": {       
        "team": "475b1f09434745d5b76780c8f3ab1162",        
        "play": "95f7b74c408f41fe8296cf64606b82b9",        
        "responsible": "1@0.com",
        "completed": false,        
        "created_at": "2023-11-06T20:41:20.583744Z",        
        "updated_at": "2023-11-06T20:41:20.583771Z",        
        "is_active": false    
    },    
    "2dea95fdc5234feda4ca8ef6ecb64744": {        
        "team": "20a3aad10eaf4247abbf0d9daed59da4",        
        "play": "95f7b74c408f41fe8296cf64606b82b9",        
        "responsible": "2@2.com",
        "completed": false,       
        "created_at": "2023-11-06T20:41:20.583800Z",        
        "updated_at": "2023-11-06T20:41:20.583808Z",        
        "is_active": true    
    },    
    "aaaf55ec6d27445fa34a4fe117b639f8": {        
        "team": "95ce36f55cf14eca98ee1cdfe419895f",        
        "play": "95f7b74c408f41fe8296cf64606b82b9",        
        "responsible": "0@1.com",
        "completed": false,        
        "created_at": "2023-11-06T20:41:20.583832Z",        
        "updated_at": "2023-11-06T20:41:20.583841Z",        
        "is_active": true    
    },    
    "ed6ebd428043494cae929a279bddea51": {        
        "team": "f1cdd6d430e845e19ce955a371fc610c",        
        "play": "95f7b74c408f41fe8296cf64606b82b9",        
        "responsible": "0@2.com",
        "completed": false,        
        "created_at": "2023-11-06T20:41:20.583863Z",        
        "updated_at": "2023-11-06T20:41:20.583870Z",        
        "is_active": true    
    },   

    "9b653bcfa179455d838b62be0417df24": {
        "team": "4de12e3b4e9b496ba77128fd0b298b07",
        "play": "95f7b74c408f41fe8296cf64606b82b9",
        "responsible": "2@2.com",
        "completed": true,
        "created_at": "2023-11-06T20:41:20.583891Z",
        "updated_at": "2023-11-06T20:41:20.583899Z",
        "is_active": false

    },

    "05e2308c6fc24c099bd6d35a6c157b69": {
        "team": "475b1f09434745d5b76780c8f3ab1162",
        "play": "71c50c02e970433e8273dfab15d97a10",
        "responsible": "4@0.com",
        "completed": true,
        "created_at": "2023-11-06T20:41:20.583920Z",
        "updated_at": "2023-11-06T20:41:20.583927Z",
        "is_active": false
    },

    "8b6c533c0f3d4af8b715b1db74ddec01": {
        "team": "20a3aad10eaf4247abbf0d9daed59da4",
        "play": "71c50c02e970433e8273dfab15d97a10",
        "responsible": "4@1.com",
        "completed": false,
        "created_at": "2023-11-06T20:41:20.583947Z",
        "updated_at": "2023-11-06T20:41:20.583954Z",
        "is_active": true
    },

    "76d4ffa055e14cfba48ee1d4bf353bdb": {

        "team": "95ce36f55cf14eca98ee1cdfe419895f",

        "play": "71c50c02e970433e8273dfab15d97a10",

        "responsible": "1@1.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.583974Z",

        "updated_at": "2023-11-06T20:41:20.583981Z",

        "is_active": false

    },

    "b6caa723cf6f4313855385316cb5e492": {

        "team": "f1cdd6d430e845e19ce955a371fc610c",

        "play": "71c50c02e970433e8273dfab15d97a10",

        "responsible": "1@2.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584001Z",

        "updated_at": "2023-11-06T20:41:20.584009Z",

        "is_active": true

    },

    "04f25d6eace1435b88f4f1b3790b17a1": {

        "team": "4de12e3b4e9b496ba77128fd0b298b07",

        "play": "71c50c02e970433e8273dfab15d97a10",

        "responsible": "4@2.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584028Z",

        "updated_at": "2023-11-06T20:41:20.584035Z",

        "is_active": true

    },

    "a85846a847ce48f6a89fd4d3c04fae9f": {

        "team": "475b1f09434745d5b76780c8f3ab1162",

        "play": "5fca1778aa354bd1894ddbef14069186",

        "responsible": "3@1.com",

        "completed": true,

        "created_at": "2023-11-06T20:41:20.584054Z",

        "updated_at": "2023-11-06T20:41:20.584061Z",

        "is_active": false

    },

    "bbe4692ef65b49aa84ae23240315c1c5": {

        "team": "20a3aad10eaf4247abbf0d9daed59da4",

        "play": "5fca1778aa354bd1894ddbef14069186",

        "responsible": "0@0.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584080Z",

        "updated_at": "2023-11-06T20:41:20.584087Z",

        "is_active": true

    },

    "fd1943ceb79f4d62bcd75538e429f3f9": {

        "team": "95ce36f55cf14eca98ee1cdfe419895f",

        "play": "5fca1778aa354bd1894ddbef14069186",

        "responsible": "1@1.com",

        "completed": true,

        "created_at": "2023-11-06T20:41:20.584106Z",

        "updated_at": "2023-11-06T20:41:20.584114Z",

        "is_active": false

    },

    "4a715b1d5a804258bf5e9173f8171eb0": {

        "team": "f1cdd6d430e845e19ce955a371fc610c",

        "play": "5fca1778aa354bd1894ddbef14069186",

        "responsible": "4@2.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584135Z",

        "updated_at": "2023-11-06T20:41:20.584142Z",

        "is_active": true

    },

    "434a27da91374ebaaa0a252915230bf2": {

        "team": "4de12e3b4e9b496ba77128fd0b298b07",

        "play": "5fca1778aa354bd1894ddbef14069186",

        "responsible": "4@0.com",

        "completed": true,

        "created_at": "2023-11-06T20:41:20.584162Z",

        "updated_at": "2023-11-06T20:41:20.584169Z",

        "is_active": false

    },

    "06ed2c9355da4de18328cbaf828449dd": {

        "team": "475b1f09434745d5b76780c8f3ab1162",

        "play": "7e17656b8ed444c7bb18c7b4eb620e87",

        "responsible": "1@2.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584188Z",

        "updated_at": "2023-11-06T20:41:20.584194Z",

        "is_active": true

    },

    "4a50ef0ec8a9436c86dfdc6b6a916ec3": {

        "team": "20a3aad10eaf4247abbf0d9daed59da4",

        "play": "7e17656b8ed444c7bb18c7b4eb620e87",

        "responsible": "4@2.com",

        "completed": true,

        "created_at": "2023-11-06T20:41:20.584212Z",

        "updated_at": "2023-11-06T20:41:20.584218Z",

        "is_active": false

    },

    "7f2ad90b7d0049a98c9132fe76d2e6bd": {

        "team": "95ce36f55cf14eca98ee1cdfe419895f",

        "play": "7e17656b8ed444c7bb18c7b4eb620e87",

        "responsible": "0@1.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584236Z",

        "updated_at": "2023-11-06T20:41:20.584243Z",

        "is_active": true

    },

    "939390f675f04c2689a140e295acc936": {

        "team": "f1cdd6d430e845e19ce955a371fc610c",

        "play": "7e17656b8ed444c7bb18c7b4eb620e87",

        "responsible": "4@0.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584260Z",

        "updated_at": "2023-11-06T20:41:20.584266Z",

        "is_active": false

    },

    "8292b732cdeb4bfcbefb5e139d88c93c": {

        "team": "4de12e3b4e9b496ba77128fd0b298b07",

        "play": "7e17656b8ed444c7bb18c7b4eb620e87",

        "responsible": "1@2.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584284Z",

        "updated_at": "2023-11-06T20:41:20.584290Z",

        "is_active": false

    },

    "110356edc8d44955b03c1be5f205b51a": {

        "team": "475b1f09434745d5b76780c8f3ab1162",

        "play": "c352f7b073184d238fd3e1629e5f236b",

        "responsible": "2@1.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584307Z",

        "updated_at": "2023-11-06T20:41:20.584314Z",

        "is_active": true

    },

    "80d93cd1b3564d169dec0a0a3ba785d0": {

        "team": "20a3aad10eaf4247abbf0d9daed59da4",

        "play": "c352f7b073184d238fd3e1629e5f236b",

        "responsible": "2@1.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584332Z",

        "updated_at": "2023-11-06T20:41:20.584338Z",

        "is_active": true

    },

    "8b362b2cf64f4174bd35ededf6d8be44": {

        "team": "95ce36f55cf14eca98ee1cdfe419895f",

        "play": "c352f7b073184d238fd3e1629e5f236b",

        "responsible": "1@2.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584355Z",

        "updated_at": "2023-11-06T20:41:20.584362Z",

        "is_active": true

    },

    "40cd260f588e492f9e78999a04cc9190": {

        "team": "f1cdd6d430e845e19ce955a371fc610c",

        "play": "c352f7b073184d238fd3e1629e5f236b",

        "responsible": "3@0.com",

        "completed": true,

        "created_at": "2023-11-06T20:41:20.584380Z",

        "updated_at": "2023-11-06T20:41:20.584387Z",

        "is_active": false

    },

    "5dd2dc5a925e4a7ca1fdae9a378bd12e": {

        "team": "4de12e3b4e9b496ba77128fd0b298b07",

        "play": "c352f7b073184d238fd3e1629e5f236b",

        "responsible": "2@0.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584405Z",

        "updated_at": "2023-11-06T20:41:20.584411Z",

        "is_active": false

    },

    "d1325473323c487faf0d31359d43ae3a": {

        "team": "475b1f09434745d5b76780c8f3ab1162",

        "play": "d4503f5ec03444d2b3f43af1a549eedf",

        "responsible": "4@0.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584430Z",

        "updated_at": "2023-11-06T20:41:20.584436Z",

        "is_active": true

    },

    "076507e6d2404256ac7300d5cc8f10e8": {

        "team": "20a3aad10eaf4247abbf0d9daed59da4",

        "play": "d4503f5ec03444d2b3f43af1a549eedf",

        "responsible": "3@0.com",

        "completed": true,

        "created_at": "2023-11-06T20:41:20.584453Z",

        "updated_at": "2023-11-06T20:41:20.584459Z",

        "is_active": false

    },

    "ca21114b59fc4bed9f53bb9835be369a": {

        "team": "95ce36f55cf14eca98ee1cdfe419895f",

        "play": "d4503f5ec03444d2b3f43af1a549eedf",

        "responsible": "4@2.com",

        "completed": false,

        "created_at": "2023-11-06T20:41:20.584477Z",

        "updated_at": "2023-11-06T20:41:20.584483Z",

        "is_active": false

    },

    "79cb9117c6024e84a9fe4aa6b9b0c70b": {
        "team": "f1cdd6d430e845e19ce955a371fc610c",
        "play": "d4503f5ec03444d2b3f43af1a549eedf",
        "responsible": "0@2.com",
        "completed": true,
        "created_at": "2023-11-06T20:41:20.584501Z",
        "updated_at": "2023-11-06T20:41:20.584507Z",
        "is_active": false
    },

    "6e25cea078e84cba9a740551e592d140": {
        "team": "4de12e3b4e9b496ba77128fd0b298b07",
        "play": "d4503f5ec03444d2b3f43af1a549eedf",
        "responsible": "1@2.com",
        "completed": true,
        "created_at": "2023-11-06T20:41:20.584525Z",
        "updated_at": "2023-11-06T20:41:20.584531Z",
        "is_active": false
    },

    "f087a6468ba346878ba41e2ed446c302": {
        "team": "475b1f09434745d5b76780c8f3ab1162",
        "play": "cfa57edabac640688a896c0cb79fd8e7",
        "responsible": "1@2.com",
        "completed": false,
        "created_at": "2023-11-06T20:41:20.584550Z",
        "updated_at": "2023-11-06T20:41:20.584556Z",
        "is_active": true
    },

    "ac53339e08f44d88bc5446d815cdd291": {
        "team": "20a3aad10eaf4247abbf0d9daed59da4",
        "play": "cfa57edabac640688a896c0cb79fd8e7",
        "responsible": "2@0.com",
        "completed": false,
        "created_at": "2023-11-06T20:41:20.584573Z",
        "updated_at": "2023-11-06T20:41:20.584580Z",
        "is_active": false
    },

    "08738f6e891545518749eff53039174e": {
        "team": "95ce36f55cf14eca98ee1cdfe419895f",
        "play": "cfa57edabac640688a896c0cb79fd8e7",
        "responsible": "4@0.com",
        "completed": false,
        "created_at": "2023-11-06T20:41:20.584598Z",
        "updated_at": "2023-11-06T20:41:20.584604Z",
        "is_active": false
    },

    "c4603733c5e3428ca13b4250a08cb236": {
        "team": "f1cdd6d430e845e19ce955a371fc610c",
        "play": "cfa57edabac640688a896c0cb79fd8e7",
        "responsible": "4@2.com",
        "completed": true,
        "created_at": "2023-11-06T20:41:20.584622Z",
        "updated_at": "2023-11-06T20:41:20.584628Z",
        "is_active": false
    },

    "4e1341a7a5834548aba649afc5c46bc4": {
        "team": "4de12e3b4e9b496ba77128fd0b298b07",
        "play": "cfa57edabac640688a896c0cb79fd8e7",
        "responsible": "1@2.com",
        "completed": false,
        "created_at": "2023-11-06T20:41:20.584647Z",
        "updated_at": "2023-11-06T20:41:20.584653Z",
        "is_active": true
    },

    "89be51928e3a4fa4b89ffcc23114f552": {
        "team": "475b1f09434745d5b76780c8f3ab1162",
        "play": "d10a854994d544e79a6411b0b3adf7fe",
        "responsible": "0@0.com",
        "completed": false,
        "created_at": "2023-11-06T20:41:20.584670Z",
        "updated_at": "2023-11-06T20:41:20.584677Z",
        "is_active": false
    },

    "2bc2fd85d0ad497c864bd026e73a3228": {
        "team": "20a3aad10eaf4247abbf0d9daed59da4",
        "play": "d10a854994d544e79a6411b0b3adf7fe",
        "responsible": "4@1.com",
        "completed": false,
        "created_at": "2023-11-06T20:41:20.584694Z",
        "updated_at": "2023-11-06T20:41:20.584700Z",
        "is_active": true
    },

    "07ce378ac338423892c3086ee6668add": {
        "team": "95ce36f55cf14eca98ee1cdfe419895f",
        "play": "d10a854994d544e79a6411b0b3adf7fe",
        "responsible": "0@2.com",
        "completed": false,
        "created_at": "2023-11-06T20:41:20.584718Z",
        "updated_at": "2023-11-06T20:41:20.584724Z",
        "is_active": true
    },

    "b6c55c9fdaff467ca071f22bd24e1b97": {
        "team": "f1cdd6d430e845e19ce955a371fc610c",
        "play": "d10a854994d544e79a6411b0b3adf7fe",
        "responsible": "0@0.com",
        "completed": false,
        "created_at": "2023-11-06T20:41:20.584741Z",
        "updated_at": "2023-11-06T20:41:20.584747Z",
        "is_active": false
    },

    "4d3bedb7207b46a9b37e798482a76956": {
        "team": "4de12e3b4e9b496ba77128fd0b298b07",
        "play": "d10a854994d544e79a6411b0b3adf7fe",
        "responsible": "2@0.com",
        "completed": false,
        "created_at": "2023-11-06T20:41:20.584765Z",
        "updated_at": "2023-11-06T20:41:20.584771Z",
        "is_active": false
    }

}


export const handlers = [
    http.get('https://epicus-395019.ew.r.appspot.com/v1/playbook/team/', () => {
        return HttpResponse.json(mockResponseTeam)
    }),
    http.get('https://epicus-395019.ew.r.appspot.com/v1/playbook/team/exercises/', () => {
        return HttpResponse.json(mockResponseExercises)
    }),
    // http.get('https://epicus-395019.ew.r.appspot.com/v1/playbook/team/exercises/response/', () => {
    //     return HttpResponse.json(mockResponseScore)
    // }),

    // http.get('https://epicus-395019.ew.r.appspot.com/v1/playbook/team/exercises/help/', () => {
    //     return HttpResponse.json(mockResponseScore)
    // }),

    // http.get('https://epicus-395019.ew.r.appspot.com/v1/playbook/team/plays/scores/', () => {
    //     return HttpResponse.json(mockResponseScore)
    // }),

    // http.get('https://epicus-395019.ew.r.appspot.com/v1/playbook/team/exercises/scores/', () => {
    //     return HttpResponse.json(mockResponseScore)
    // }),

    // http.get('https://epicus-395019.ew.r.appspot.com/v1/playbook/team/plays/usage/', () => {
    //     return HttpResponse.json(mockResponseScore)
    // })
  ]

const server = setupServer(...handlers)
 
beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe('Team Service', () => {
    describe('teamExerciseScore', () => {
        test('team excercise score', async () => { 
            const playbookStore = usePlaybookStore();
            await playbookStore.exercises.fetch();
            let score = playbookStore.exercises.value.get('76d4ffa055e14cfba48ee1d4bf353bdb');
            expect(score).toEqual(mockResponseExercises['76d4ffa055e14cfba48ee1d4bf353bdb']);
        })
    })

    describe('teamExercises', () => {
        test('team excercise', async () => { 
            const playbookStore = usePlaybookStore();
            await playbookStore.playbook.fetch();
            let team = playbookStore.playbook.value.get('95f7b74c408f41fe8296cf64606b82b9');
            expect(team).toEqual(mockResponseTeam['95f7b74c408f41fe8296cf64606b82b9']);
        })
    })

  })