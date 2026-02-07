const QUIZ_DATA = {
  "title": "Personal Track Safety Quiz",
  "questions": [
      {
        "id": 1,
        "q": "When working on or near the line, who will set up the Safe System of Work for you?",
        "choices": ["The Lookout", "The Controller of Site Safety (COSS)", "The Signaller", "Any person in the group", "The Site Warden"],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "The Controller of Site Safety (COSS) is responsible for planning and implementing the Safe System of Work."
      },
      {
        "id": 2,
        "q": "You have been asked to make an emergency call. What should you say or do first?",
        "choices": ["Explain what has happened", "Check who you are speaking to", "Say \"This is an emergency call\"", "Give your name and location"],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "Emergency calls must always begin with the phrase 'This is an emergency call' to gain immediate priority."
      },
      {
        "id": 3,
        "q": "When reporting an accident, which additional details are required after stating it is an emergency call?",
        "choices": ["Job title", "Nearest station", "Employer", "Telephone or radio call number", "Nearest position of safety", "Name", "Where you are speaking from", "The work you are doing"],
        "answer": [0, 2, 3, 5, 6],
        "requiredAnswers": 5,
        "explanation": "Clear identification and contact details are essential to allow emergency services to respond correctly."
      },
      {
        "id": 4,
        "q": "What must the Controller of Site Safety (COSS) tell you before work starts in an equipment or lookout warning area?",
        "choices": ["The position of safety to go to when a train approaches", "The minimum warning time", "The time when the next train is due", "The sighting distance", "A warning via LOWS or horn"],
        "answer": [0, 4],
        "requiredAnswers": 2,
        "explanation": "You must know where to go to stay safe and how you will be warned of approaching trains."
      },
      {
        "id": 5,
        "q": "What information might you receive from a safety briefing?",
        "choices": ["Welfare facilities", "Position of safety", "Postcode of the location", "Site specific hazards", "Nearest hospital", "First aider information", "Your total shift-time"],
        "answer": [0, 1, 3, 4, 5],
        "requiredAnswers": 5,
        "explanation": "A safety briefing focuses on hazards, emergency arrangements, and welfare provisions."
      },
      {
        "id": 6,
        "q": "Which people must you never distract when working on or near the line?",
        "choices": ["The Lookout (LKT)", "The Protection Controller (PC)", "The Controller of Site Safety (COSS)", "The Site Warden (SW)", "The Engineering Supervisor (ES)"],
        "answer": [0, 3],
        "requiredAnswers": 2,
        "explanation": "Lookouts and Site Wardens are performing safety-critical duties and must not be distracted."
      },
      {
        "id": 7,
        "q": "In a Separated Site of Work, what must you be told before starting work?",
        "choices": ["The position of safety", "The minimum warning time", "The limits of the safe work area and type of warning used", "The next train time"],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "You must understand the boundaries of the safe work area and how protection is provided."
      },
      {
        "id": 8,
        "q": "You have been asked to get the Overhead Line system switched off in an emergency. Who do you contact?",
        "choices": ["The Electrical Control Operator (ECO)", "The Site Warden", "The Controller of Site Safety", "The Station Supervisor"],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "Only the Electrical Control Operator can arrange an emergency OLE isolation."
      },
      {
        "id": 9,
        "q": "How far away must you and equipment be from Overhead Line Equipment (OLE)?",
        "choices": ["1.25 metres (4 feet)", "2.75 metres (9 feet)", "2 metres (6 foot 6 inches)", "300mm (1 foot)"],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "The minimum safe distance from live OLE is 2.75 metres unless isolated."
      },
      {
        "id": 10,
        "q": "Who briefs you on the Safe System of Work before starting work?",
        "choices": ["The Controller of Site Safety (COSS)", "The Lookout", "The Protection Controller", "Your Supervisor"],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "The COSS is responsible for briefing everyone on the Safe System of Work."
      },
      {
        "id": 11,
        "q": "What should you do if you do not understand part of the safety briefing?",
        "choices": ["Sign the form anyway", "Ask the COSS for clarification", "Keep quiet and continue", "Ask a colleague later"],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "You must fully understand the briefing and ask the COSS to clarify anything unclear."
      },
      {
        "id": 12,
        "q": "What action should you take if you discover a red bond detached from the running rail?",
        "choices": ["Re-attach it immediately", "Report it to the Site Warden", "No action required", "Report it to the ECO"],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "Detached red bonds are an electrical safety issue and must be reported to the ECO."
      },
      {
        "id": 13,
        "q": "How frequently should you be looking up when walking on or near the line?",
        "choices": ["5 seconds", "20 seconds", "15 seconds", "10 seconds"],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "You should look up at least every 5 seconds to maintain awareness of approaching trains."
      },
      {
        "id": 14,
        "q": "What is the minimum time to stand in a position of safety before a train passes?",
        "choices": ["15 seconds", "10 seconds", "20 seconds", "5 seconds"],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "You must be in a position of safety for at least 10 seconds before a train passes."
      },
      {
        "id": 15,
        "q": "What should you be informed of when working under an Overhead Line isolation?",
        "choices": ["COSS will brief you on the isolation details", "COSS must hold an Overhead Line Permit (Form C)", "All train movements stop within the isolation", "Isolation only needed within 600mm", "ECO briefs you directly", "COSS briefs you on equipment that remains live"],
        "answer": [0,1,5],
        "requiredAnswers": 3,
        "explanation": "The COSS controls isolation information, permits, and identifies any equipment that remains live."
      },
      {
        "id": 16,
        "q": "You see a hazard obstructing the CESS. What should you do?",
        "choices": ["Walk past", "Report it to the Signaller", "Close Call it", "Tell your team and COSS", "Leave it", "Mitigate the hazard if able"],
        "answer": [2,3,5],
        "requiredAnswers": 3,
        "explanation": "Hazards must be reported, communicated to the team, and mitigated if safe to do so."
      },
      {
        "id": 17,
        "q": "Special care is required around OLE during which activities?",
        "choices": ["Digging ballast", "Using liquids", "Removing clips", "Clearing vegetation", "Using ladders"],
        "answer": [1,3,4],
        "requiredAnswers": 3,
        "explanation": "Liquids, vegetation clearance, and ladders increase the risk of contact with OLE."
      },
      {
        "id": 18,
        "q": "When should you be given a safety briefing?",
        "choices": ["At the depot", "Before going on or near the line", "Before starting work", "In a cafe"],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "A safety briefing must occur before anyone goes on or near the line."
      },
      {
        "id": 19,
        "q": "When can you use a Limited Clearance telephone?",
        "choices": ["Anytime", "Only in an emergency and if safe", "With COSS permission", "Only when no trains are running"],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "Limited Clearance phones are for emergencies only and must be used safely."
      },
      {
        "id": 20,
        "q": "What is the minimum distance tools must be placed from the line if they could be moved by trains?",
        "choices": ["1.25 metres", "1 metre", "2 metres", "1.5 metres"],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "Tools and materials must be at least 2 metres from the line if they could move."
      },
      {
        "id": 21,
        "q": "You reported something unsafe internally but nothing was done. What should you do?",
        "choices": ["Contact CIRAS", "Do nothing", "Ask your line manager", "Contact the trade union"],
        "answer": [0,2,3],
        "requiredAnswers": 3,
        "explanation": "Concerns should be escalated through management, unions, or confidential reporting."
      },
      {
        "id": 22,
        "q": "What is the voltage of the Overhead Line Equipment?",
        "choices": ["25,000 volts", "10,000 volts", "50,000 volts", "750 volts"],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "Standard UK OLE operates at 25,000 volts AC."
      },
      {
        "id": 23,
        "q": "When is it permitted to access an OTP or OTM exclusion zone?",
        "choices": ["When stopped and with permission from the Machine or Crane Controller", "When the machine is not moving", "Never", "When you believe it is safe"],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "Access is only allowed when stopped and permission has been given."
      },
      {
        "id": 24,
        "q": "Which situations require the use of the phonetic alphabet?",
        "choices": ["To spell words and place names", "When stating the time", "To identify letters", "Only when speaking to a COSS"],
        "answer": [0,2],
        "requiredAnswers": 2,
        "explanation": "The phonetic alphabet prevents misunderstandings when spelling or identifying letters."
      },
      {
        "id": 25,
        "q": "When making a Safety Critical Communication, what must you do?",
        "choices": ["Be at the site of work", "State your name and employer", "Give your Sentinel number", "State your depot", "Ensure you are speaking to the right person", "State your exact location"],
        "answer": [1,4,5],
        "requiredAnswers": 3,
        "explanation": "Clear identification, correct recipient, and precise location are essential for safety-critical communications."
      },
      {
        "id": 26,
        "q": "How long must you be in a position of safety as a minimum, before a train passes?",
        "choices": ["5 Secs", "10 Secs", "15 Secs", "20 Secs"],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "You must be in a position of safety for at least 10 seconds before a train passes."
      },
      {
        "id": 27,
        "q": "How would you acknowledge a train in daylight?",
        "choices": ["Wave at the driver", "Shine a light", "Raise both arms", "Raise one arm"],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "In daylight, a train is acknowledged by raising one arm."
      },
      {
        "id": 28,
        "q": "When can a blue hat be converted to a white hat?",
        "choices": ["After 4 shifts", "When blue hat wants it", "1 Month", "When learning support is complete"],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "A blue hat can be converted once learning support is complete."
      },
      {
        "id": 29,
        "q": "When are you classed as 'On or near the line'?",
        "choices": ["Within 2 meters of the nearest running line", "Within 300mm of the nearest running line", "Within 3 meters of the nearest running line", "Within 200mm of the nearest running line"],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "You are classed as on or near the line when within 3 meters."
      },
      {
        "id": 30,
        "q": "When are you classed as 'Lineside'?",
        "choices": ["From the boundary fence and 6ft from the nearest running rail", "From the boundary fence up to the nearest running line", "From the boundary fence and to the point defined as on or near the line", "From the boundary fence and 14ft from the nearest running rail"],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "Lineside is from the boundary fence to the point defined as on or near the line."
      },
      {
        "id": 31,
        "q": "What is your position of safety distance when a train is passing at 102mph?",
        "choices": ["1.25 meters", "125mm", "2 meters", "1 meter"],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "At 102mph the required distance is 2 meters."
      },
      {
        "id": 32,
        "q": "What colours are the COSS band?",
        "choices": ["Blue with White text", "White with Red text", "White with white text", "Black with white text"],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "COSS bands are blue with white text."
      },
      {
        "id": 33,
        "q": "What does LOWS stand for?",
        "choices": ["Lookout of work safety", "Lookout operated welfare system", "Limited operating work system", "Lookout operated warning system"],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "LOWS means Lookout Operated Warning System."
      },
      {
        "id": 34,
        "q": "How would you stop a train in daylight?",
        "choices": ["Wave at it", "Raise both arms", "Raise one arm", "Blow a horn or whistle"],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "Raising both arms is the correct emergency stop signal in daylight."
      },
      {
        "id": 35,
        "q": "How would you stop a train in dark and poor visibility conditions?",
        "choices": ["Wave at it", "Wave a light vigorously", "Wave one arm", "Blow a horn or whistle"],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "A light must be waved vigorously in poor visibility."
      },
      {
        "id": 36,
        "q": "How far must you keep tools away from axle counters and signal boxes?",
        "choices": ["30 meters", "3 inches", "300mm", "30mm"],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "Tools must be kept at least 300mm away."
      },
      {
        "id": 37,
        "q": "When walking down the cess, what distance must you maintain from the next person, as a minimum?",
        "choices": ["10 feet", "300mm", "2 meters", "20 meters"],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "You must maintain at least 20 meters."
      },
      {
        "id": 38,
        "q": "In the phonetic alphabet, how would you describe WAITER?",
        "choices": ["Water, Alpha, Indigo, Telephone, Elf, Roger", "Whiskey, Alpha, India, Tango, Echo, Romeo", "Whiskey, Austria, Indigo, Tango, Echo, Rome", "Whiskey, Alpha, India, Tango, End, Roger"],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "The correct NATO phonetic spelling is Whiskey Alpha India Tango Echo Romeo."
      },
      {
        "id": 39,
        "q": "How would a Site Warden initially warn you if you strayed out of the working limits?",
        "choices": [
          "Short, sharp blast on a horn or whistle",
          "Touch your shoulder",
          "Shout 'Get back'",
          "Never, the COSS would tell you"
        ],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "The initial warning is a verbal shout of 'Get back'."
      },
      {
        "id": 40,
        "q": "When must you have your Sentinel card on the railway?",
        "choices": [
          "Just for signing in",
          "At all times",
          "Never",
          "Just for signing out"
        ],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "Your Sentinel card must be carried at all times."
      },
      {
        "id": 41,
        "q": "When are you permitted to go on or near the running line?",
        "choices": [
          "To take a shortcut to the signing in point",
          "Any time whilst on duty",
          "During daylight and good visibility",
          "Only when it is absolutely necessary, your duties require you to do so and you hold a valid PTS"
        ],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "You may only go on or near the line when absolutely necessary and holding valid PTS."
      },
      {
        "id": 42,
        "q": "You have been asked to work in an unsafe manner by the COSS. What action do you take?",
        "choices": [
          "Question the COSS' brief and refuse to sign the COSS brief",
          "Inform your line manager",
          "Tell the Site Warden",
          "Report the incident to CIRAS",
          "Don't worry about it and continue the job",
          "Inform the Signaller"
        ],
        "answer": [0,1,3],
        "requiredAnswers": 3,
        "explanation": "Unsafe instructions must be challenged, escalated to management, and reported."
      },
      {
        "id": 43,
        "q": "Which of these two statements are correct about OLE structures?",
        "choices": [
          "Provides trains with 750V DC",
          "You and your equipment must stand 8ft (2.45m) away from live OLE",
          "You and your equipment must stand 9ft (2.75m) away from live OLE",
          "Provides trains with 25,000V AC"
        ],
        "answer": [2,3],
        "requiredAnswers": 2,
        "explanation": "OLE supplies trains with 25,000V AC, and you must maintain a minimum distance of 9ft (2.75m) from live OLE."
      },
      {
        "id": 44,
        "q": "You have brought some over the counter medicine as you have been feeling unwell. What do you need to do?",
        "choices": [
          "Read the leaflet to ensure that there are no side effects",
          "Advise your Controller of Site Safety (COSS)",
          "Report to your Sponsor or Line Manager so they can check whether it may affect your safety",
          "Do nothing as it is not a prescribed drug"
        ],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "Any medication that could affect your ability to work safely must be reported to your Sponsor or Line Manager."
      },
      {
        "id": 45,
        "q": "Which direction can an On-Track Plant (OTP) machine move in?",
        "choices": [
          "Only in the direction that the cab is facing",
          "Forwards only",
          "Both backwards and forwards both on track or next to the track, as well as the radius of any arms with equipment can move up to 360 degrees",
          "The same direction as any trains"
        ],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "On-Track Plant can move forwards and backwards, on or off track, and any arms or attachments can rotate up to 360 degrees."
      },
      {
        "id": 46,
        "q": "Which of the following statements may the Controller of Site Safety (COSS) brief you on about the Safe System of Work?",
        "choices": [
          "Who will be acting as Site Warden or Lookout",
          "The nearest town or city",
          "The time when the next train is expected to pass the site of work",
          "The method of warning",
          "Your position of safety",
          "The name of their Supervisor",
          "The nearest railway station"
        ],
        "answer": [0,3,4],
        "requiredAnswers": 3,
        "explanation": "The COSS must brief you on key safety information including who is acting as Site Warden or Lookout, the method of warning, and your position of safety."
      },
      {
        "id": 47,
        "q": "After the Controller of Site Safety (COSS) has briefed you on the Safe System of Work, what two of the following must you do before working on or near the line?",
        "choices": [
          "Sign to say you have been briefed and understand the Safe System of Work",
          "Say that it is acceptable to you",
          "Ask other group members if they also agree with the Safe System of Work",
          "Speak to the Lookout for their agreement, then get on with the task",
          "Ask questions if any part of the briefing is unclear"
        ],
        "answer": [0,4],
        "requiredAnswers": 2,
        "explanation": "You must confirm understanding by signing in and ask questions if anything is unclear before starting work."
      },
      {
        "id": 48,
        "q": "If you or a member of your team have an accident on or near the line, what should you do?",
        "choices": [
          "Mention it to your colleagues and carry on",
          "Carry on and report it at the end of the shift",
          "Don't report it, you'll be fine",
          "Report it to the Controller of Site Safety (COSS) as soon as it is safe to do so. Appropriate action will then be taken."
        ],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "All accidents must be reported immediately to the COSS so appropriate action can be taken."
      },
      {
        "id": 49,
        "q": "When working open line, where is the safest place to walk if there is no alternative safe authorised walking route?",
        "choices": ["The CESS", "4-foot", "10-foot", "6-foot"],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "The CESS (Clearance Escape Space) provides the safest walking area when no authorised route is available."
      },
      {
        "id": 50,
        "q": "Can you use a mobile telephone on or near the line?",
        "choices": [
          "Yes. However, you must have permission from the Controller of Site Safety (COSS) and only in the Position of Safety at all times",
          "Yes. You can use your mobile phone anytime, there are no restrictions",
          "No. You must never use a mobile phone or radio on or near the line. They are totally banned.",
          "Yes. As long as you have written authority from your Sponsor or Local Manager"
        ],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "Mobile phones may only be used with COSS permission and only when in a position of safety."
      },
      {
        "id": 51,
        "q": "What must you do when warned of an approaching train in a Lookout warning area?",
        "choices": [
          "Wait until the Controller of Site Safety (COSS) tells you to move clear",
          "Acknowledge the warning and go to the designated position of safety",
          "Check to see on which line the train is approaching",
          "Move clear of the line on which a train is approaching"
        ],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "You must immediately acknowledge the warning and move to the designated position of safety."
      },
      {
        "id": 52,
        "q": "Which of the following items must be worn as a minimum requirement when 'on or near the line'?",
        "choices": [
          "A respirator",
          "Approved safety footwear",
          "Ear defenders",
          "Dust mask",
          "Approved high visibility clothing on the upper and lower body",
          "A safety helmet (hard hat)",
          "Lifting belt",
          "Goggles"
        ],
        "answer": [1,4,5],
        "requiredAnswers": 3,
        "explanation": "Minimum PPE includes safety footwear, high visibility clothing on upper and lower body, and a safety helmet."
      },
      {
        "id": 53,
        "q": "When crossing within the line where must you walk?",
        "choices": [
          "Go to the nearest bridge or platform",
          "Walk on the sleepers only",
          "Only use an authorised walking route",
          "Walk on ballast to ballast"
        ],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "When crossing the line you must walk directly from ballast to ballast."
      },
      {
        "id": 54,
        "q": "Which of the following statements are correct when you are working in a Fenced area?",
        "choices": [
          "All lines are blocked to all train movements",
          "You must stay the safe side of the fence at all times",
          "A Site Warden (SW) will be used in a Fenced area",
          "A Lookout will be appointed in a fenced area",
          "You can work either side of the fence",
          "You must not lean against the fence"
        ],
        "answer": [1,5],
        "requiredAnswers": 2,
        "explanation": "When working in a fenced area you must remain on the safe side of the fence and must not lean against it."
      },
      {
        "id": 55,
        "q": "Why is there an exclusion zone around On-Track Plant (OTP) and On-Track Machine (OTM)?",
        "choices": [
          "To follow the safe work plan",
          "To exclude anyone without an operator licence near the machines",
          "To allow the machine operator to complete their tasks uninterrupted",
          "The Machine Operator may have blind-spots around the vehicle where anyone walking around it cannot be seen by them"
        ],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "Exclusion zones exist due to operator blind spots where people may not be visible."
      },
      {
        "id": 56,
        "q": "When must you consider the Overhead Line Equipment (OLE) to be live and dangerous?",
        "choices": ["At all times", "Only at night", "If all train movements have stopped", "Never"],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "OLE must always be treated as live and dangerous unless formally confirmed otherwise."
      },
      {
        "id": 57,
        "q": "Which of these telephones would be used as a last resort?",
        "choices": [
          "Limited Clearance Telephone",
          "Signal Post Telephone",
          "COSS mobile phone",
          "Personal mobile phone",
          "Lineside Telephone"
        ],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "A Limited Clearance Telephone is used as a last resort when no other safe communication method is available."
      },
      {
        "id": 58,
        "q": "There is a tree blocking the line and you have been asked to place detonators to warn incoming trains. Before you go and place the detonators, what must you do first?",
        "choices": [
          "Call the Site Warden",
          "Place a detonator on the track where you are to test if it works",
          "Place the track circuit operating clips on the rail",
          "Nothing, just walk"
        ],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "Before placing detonators, track circuit operating clips must be applied to protect approaching trains."
      },
      {
        "id": 59,
        "q": "How far down the track must you walk before placing the first detonator?",
        "choices": [
          "2km / 1.25 miles",
          "3km / 1.8 miles",
          "1km / 0.6 miles",
          "200 meters"
        ],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "The first detonator must be placed 2km (1.25 miles) from the obstruction."
      },
      {
        "id": 60,
        "q": "Once you get to your detonator point, what is the minimum number of detonators you place?",
        "choices": ["4", "2", "6", "3"],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "A minimum of three detonators must be placed at the required spacing."
      },
      {
        "id": 61,
        "q": "When would a Site Warden / Lookout warn you of an incoming train by touching your shoulder?",
        "choices": [
          "When you are working alone",
          "When you are using your phone",
          "When you are wearing ear defenders",
          "Never"
        ],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "Physical contact is used when verbal or audible warnings may not be heard, such as when wearing ear defenders."
      },
      {
        "id": 62,
        "q": "Where can you find information on the line speeds and direction of traffic of the running lines you are on?",
        "choices": [
          "Blue learning support book",
          "Sectional appendix",
          "Hazard directory",
          "Facebook"
        ],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "The Sectional Appendix provides authoritative information on line speeds and direction of traffic."
      },
      {
        "id": 63,
        "q": "When referring to the time over the phone, how would you describe the time 15:10?",
        "choices": [
          "One, Five, One, Nought",
          "Three, Ten",
          "One Thousand, Five Hundred and Ten",
          "Fifteen, Ten"
        ],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "Times are spoken clearly using the 24-hour clock, for example 'Fifteen Ten'."
      },
      {
        "id": 64,
        "q": "What are the three warning methods a lookout would use to indicate a train is incoming?",
        "choices": [
          "Red flag, horn, shout \"get back\"",
          "Horn, whistle, touch",
          "Touch, blue flag",
          "Horn, whistle, raise two hands"
        ],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "Lookouts warn using audible signals and physical contact where necessary."
      },
      {
        "id": 65,
        "q": "What is meant by the term 'On the approach'?",
        "choices": [
          "The near side of a signal or points when looking in the normal direction of traffic",
          "The far side of a signal or points when looking in the normal direction of traffic",
          "On the approach to the finish time of the job",
          "The access point"
        ],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "'On the approach' refers to the near side of a signal or points in the normal direction of traffic."
      },
      {
        "id": 66,
        "q": "What is meant by the term 'The beyond'?",
        "choices": [
          "The near side of a signal or points when looking in the normal direction of traffic",
          "The far side of a signal or points when looking in the normal direction of traffic",
          "On the approach to the finish time of the job",
          "The access point"
        ],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "'The beyond' means the far side of a signal or points when looking in the normal direction of traffic."
      },
      {
        "id": 67,
        "q": "Before you go on or near the line, what must you do?",
        "choices": [
          "Apply a Track Circuit Operating Clip (T-COC) to protect the line",
          "You must be briefed before you go lineside and sign to confirm understanding of the briefing",
          "You must be wearing correct and appropriate Personal Protective Equipment (PPE)",
          "Check with the Lookout that the line is safe to access"
        ],
        "answer": [1, 2],
        "requiredAnswers": 2,
        "explanation": "Before going on or near the line you must receive and confirm understanding of a safety briefing, and be wearing the correct and appropriate PPE. Applying T-COCs and authorising access are not general requirements."
      },
      {
        "id": 68,
        "q": "What telephone does this sign represent?",
        "image": "data/images/telephone-1.png",
        "choices": [
          "Emergency telephone",
          "Signal Post telephone",
          "Limited Clearance telephone",
          "Electrification telephone"
        ],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "This is a Limited Clearance telephone."
      },
      {
        "id": 69,
        "q": "Using the railway Safety Critical Communications protocols, how would you say this signal number?",
        "image": "data/images/RI-108.png",
        "choices": [
          "Roger India One Oh Eight",
          "Romeo Indigo One Hundred Eight",
          "Romeo India One Zero Eight",
          "Romeo Indigo One Zero Eight"
        ],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "Under Safety Critical Communications, letters are spoken using the phonetic alphabet and numbers are spoken digit by digit."
      },
      {
        "id": 70,
        "q": "Using the railway Safety Critical Communications protocol, how would you say this signal number?",
        "image": "data/images/BQ-108.png",
        "choices": [
          "Bravo Queen One Zero Eight",
          "Beta Queen One Hundred and Eight",
          "Bravo Quebec One Zero Eight",
          "Bravo Quebec One Oh Eight"
        ],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "Safety Critical Communications use the phonetic alphabet and individual digits, so the correct format is Bravo Quebec One Zero Eight."
      },
      {
        "id": 71,
        "q": "Select the correct name for section 'A' in the below image.",
        "image": "data/images/track-1.jpg",
        "choices": ["The CESS", "10-foot", "6-foot", "4-foot"],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "Section 'A' in the image represents the CESS, the walkway at the side of the tracks."
      },
      {
        "id": 72,
        "q": "Select the correct name for section 'D' in the below image.",
        "image": "data/images/track-1.jpg",
        "choices": ["The CESS", "10-foot", "6-foot", "4-foot"],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "Section 'D' in the image represents the 10-foot way between tracks."
      },
      {
        "id": 73,
        "q": "Select the correct name for section 'B' in the below image.",
        "image": "data/images/track-1.jpg",
        "choices": ["The CESS", "10-foot", "6-foot", "4-foot"],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "Section 'B' in the image represents the 4-foot way, the gap between the rails."
      },
      {
        "id": 74,
        "q": "Select the correct name for section 'C' in the below image.",
        "image": "data/images/track-1.jpg",
        "choices": ["The CESS", "10-foot", "6-foot", "4-foot"],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "Section 'C' in the image represents the 6-foot way, the space between the tracks."
      },
      {
        "id": 75,
        "q": "What telephone does this sign represent?",
        "image": "data/images/telephone-2.png",
        "choices": [
          "Emergency telephone",
          "Signal Post telephone",
          "Lineside telephone",
          "Electrification telephone"
        ],
        "answer": 2,
        "requiredAnswers": 1,
        "explanation": "This sign indicates a Lineside telephone, used to contact the signaller when required."
      },
      {
        "id": 76,
        "q": "What does this sign indicate?",
        "image": "data/images/sign-1.png",
        "choices": ["Limited Clearance", "No Refuges", "Emergency Telephone", "On or Near the Line"],
        "answer": 0,
        "requiredAnswers": 1,
        "explanation": "This sign indicates Limited Clearance, no position of safety on this side of the track."
      },
      {
        "id": 77,
        "q": "What does this sign indicate?",
        "image": "data/images/sign-2.png",
        "choices": ["Limited Clearance", "No Refuges", "Emergency Telephone", "On or Near the Line"],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "This sign indicates No Refuges, refuges exist on the opposite side but not on this side."
      },
      {
        "id": 78,
        "q": "When working near a railway line with train speeds of up to 100mph, what is the minimum distance you must stand from the line to be in a Position of Safety?",
        "choices": [
          "2 metres (6 feet 6 inches)",
          "3 metres (10 feet)",
          "2.75 metres (9 feet)",
          "1.25 metres (4 feet)"
        ],
        "answer": 3,
        "requiredAnswers": 1,
        "explanation": "For line speeds of up to 100mph, the minimum Position of Safety distance is 1.25 metres (4 feet)."
      },
      {
        "id": 79,
        "q": "What telephone does this sign represent?",
        "image": "data/images/telephone-3.png",
        "choices": [
          "Emergency telephone",
          "Signal Post telephone",
          "Limited Clearance telephone",
          "Electrification telephone"
        ],
        "answer": 1,
        "requiredAnswers": 1,
        "explanation": "This is a Signal Post telephone."
      },
  ]
}

      
