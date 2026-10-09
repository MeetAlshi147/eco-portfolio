import { Activity } from "./types";

/**
 * Add new activities here — the Activities section renders this array
 * automatically, so no component changes are needed to publish new work.
 * Drop the corresponding file into /public/files/ and point fileUrl at it.
 */
export const activities: Activity[] = [
  {
    id: "assignment-0",
    order: 1,
    title: "Assignment 0 — E-Waste Baseline Audit",
    type: "Assignment",
    date: "22 July 2026",
    objective:
      "Survey personal and household electronic devices to establish a baseline inventory of e-waste generation, usage lifespan, and disposal habits before studying formal e-waste management practices.",
    fileUrl: "/files/assignment-0.pdf",
    fileLabel: "Assignment_0_Baseline_Audit.pdf",
    whatILearned:
      "I learned how quickly small, everyday devices — chargers, earphones, old phones — accumulate into a meaningful e-waste footprint, and how few of them were disposed of through certified recyclers rather than general trash.",
    sustainabilityConnection:
      "The audit is the starting point of the circular economy loop: you cannot reduce or recycle responsibly what you have never measured, so this baseline directly informs every later decision about repair, reuse, and certified recycling.",
    reflection:
      "Auditing my own drawer of 'maybe I'll need this someday' cables was humbling — it reframed e-waste from an abstract global statistic into a habit I could change starting this week.",
    references: [
      "Global E-waste Monitor 2024, UNITAR & ITU",
      "Central Pollution Control Board (CPCB) — E-Waste (Management) Rules, 2022",
    ],
  },
  {
    id: "crossword",
    order: 2,
    title: "Crossword — E-Waste Terminology",
    type: "Crossword",
    date: "29 July 2026",
    objective:
      "Reinforce core e-waste and circular-economy vocabulary — terms like WEEE, urban mining, downcycling, and extended producer responsibility — through an interactive crossword exercise.",
    fileUrl: "/files/Crossword Labs.pdf",
    fileLabel: "Crossword_E-Waste_Terminology.pdf",
    whatILearned:
      "Building and solving the puzzle forced precise definitions rather than fuzzy familiarity — for instance, distinguishing 'downcycling' from true 'recycling' changed how I evaluate whether a disposal method is genuinely sustainable.",
    sustainabilityConnection:
      "Shared vocabulary is what lets engineers, policymakers, and the public discuss e-waste solutions like extended producer responsibility (EPR) with the same understanding — language precision is a quiet but real sustainability tool.",
    reflection:
      "A playful format made technical terms stick far better than passive reading did — I still remember 'urban mining' because of the clue, not the textbook.",
    references: [
      "E-Waste Management Handbook, CPCB India",
      "Basel Convention — Glossary of E-Waste Terms",
    ],
  },
  {
    id: "pledge",
    order: 3,
    title: "Pledge — Responsible E-Waste Commitment",
    type: "Pledge",
    date: "1 August 2026",
    objective:
      "Formally commit to personal e-waste practices: extending device lifespan through repair, donating or reselling working electronics, and routing dead devices only to authorised recyclers.",
    fileUrl: "/files/pledge.pdf",
    fileLabel: "Pledge_Responsible_E-Waste.pdf",
    whatILearned:
      "Writing the pledge made me research authorised e-waste collection points near my institute, and I discovered most campuses already run collection drives that most students, including me until now, simply don't know about.",
    sustainabilityConnection:
      "Individual pledges scale into collective impact — if every engineering student on campus committed to certified disposal, the volume of e-waste diverted from informal, unsafe recycling channels would be substantial.",
    reflection:
      "Signing something on paper is easy; the real test is whether I still route my next broken charger to the collection bin instead of the dustbin. I've marked my calendar to check in on this in six months.",
    references: [
      "Ministry of Environment, Forest and Climate Change (MoEFCC) — E-Waste Rules",
      "Vidyalankar Institute of Technology — Green Campus Initiative",
    ],
  },
  {
  id: "e-waste-carbon-footprint",
  order: 4,
  title: "Activity — The Hidden Carbon Footprint of Our Gadgets",
  type: "Activity",
  date: "5 August 2026",
  objective:
    "Analyze the environmental impact of personal electronic usage by calculating my annual carbon footprint, examining smartphone and e-waste habits, and identifying practical ways to reduce carbon emissions and electronic waste.",
  fileUrl: "/files/E waste Activity.pdf",
  fileLabel: "E-Waste_Environmental_Management_Activity.pdf",
  whatILearned:
    "I learned that everyday electronic habits contribute significantly to my carbon footprint and e-waste generation. The activity helped me understand how extending device lifespans, repairing electronics, reusing devices, and responsibly recycling e-waste can reduce environmental impact.",
  sustainabilityConnection:
    "The activity connects electronic consumption with sustainable resource management. Using devices for longer, repairing them instead of replacing them, and recycling through authorized channels can reduce the demand for new manufacturing, conserve natural resources, lower carbon emissions, and prevent valuable materials from being lost as waste.",
  reflection:
    "The activity made me realize that small habits such as replacing accessories frequently, keeping unused electronics, and purchasing new devices unnecessarily can contribute to environmental impact. It encouraged me to use my devices for longer, repair them when possible, and choose responsible disposal methods.",
  references: [
    "E-Waste & Environmental Management — Activity Worksheet",
  ],
 },
 {
  id: "video-task-e-waste-recycling",
  order: 5,
  title: "Video Based Task — Recycling of E-Waste",
  type: "Video Task",
  date: "12 August 2026",
  objective:
    "Understand the major processes involved in e-waste recycling, including material separation, precious-metal recovery, refining, and sustainable resource recovery through a video-based learning activity and assessment.",
  fileUrl: "/files/Recycling of E-waste.pdf",
  fileLabel: "Video_Task_Recycling_of_E-Waste.pdf",
  whatILearned:
    "Through the video and 10-question assessment, I learned about precious-metal recovery, different e-waste recycling and refining sequences, CRT glass recycling, hydrometallurgical processes, and biohydrometallurgical techniques. I achieved 90% accuracy in the assessment.",
  sustainabilityConnection:
    "Recovering valuable materials from electronic waste reduces dependence on virgin raw materials and supports the principles of a circular economy. Proper recycling and resource recovery also help reduce the environmental impact associated with discarded electronic devices.",
  reflection:
    "This activity helped me realize the technical complexity behind e-waste recycling. Instead of viewing discarded electronics simply as waste, I now understand them as a potential source of valuable materials that can be recovered through appropriate separation, extraction, and refining processes.",
  references: [
    "Video Based Task — Recycling of E-Waste",
    "E-Waste & Environmental Management — Course Activity",
  ],
 },
 {
  id: "device-anatomy",
  order: 6,
  title: "Device Anatomy 2.0 — Engineering Investigation of an Electronic Device",
  type: "Activity",
  date: "02 Sep 2026",
  objective:
    "Investigate the material anatomy and end-of-life characteristics of a non-functional DVD player by identifying its major components, material choices, recovery opportunities, environmental risks, and opportunities for more circular product design.",
  fileUrl: "/files/Device Anatomy.pdf",
  fileLabel: "Device_Anatomy_2.0_E-Waste_Activity.pdf",
  whatILearned:
    "I learned how a single electronic device contains a combination of materials and components such as copper, aluminium, engineering plastics, glass, semiconductors, a PCB, optical drive, LCD display, speakers, and wiring. The activity helped me understand their functions, recovery potential, hazards, and the challenges involved in separating and recycling them.",
  sustainabilityConnection:
    "The activity demonstrated how circular design can extend the useful life of electronic products and improve material recovery. Designing devices with replaceable batteries, modular components, accessible internal parts, and easier disassembly can support repair, refurbishment, reuse, and recycling while reducing e-waste.",
  reflection:
    "Investigating the DVD player changed my perspective on what we call electronic waste. I realized that even a non-functional device contains valuable materials and reusable components. The activity showed me that responsible e-waste management begins at the product-design stage, where engineers can make devices easier to repair, disassemble, refurbish, and recycle.",
  references: [
    "Device Anatomy 2.0 — E-Waste & Environmental Management",
    "E-Waste & Environmental Management — Engineering Investigation Activity",
  ],
  },
  {
  id: "population-vs-e-waste",
  order: 7,
  title: "Data Analysis — Population vs E-Waste",
  type: "Data Analysis",
  date: "10 Sep 2026",
  objective:
    "Analyze the relationship between population, economic wealth, urbanization, and e-waste generation using data visualization and correlation analysis to determine whether population size directly drives e-waste production.",
  fileUrl: "/files/Data Analysis Activity.pdf",
  fileLabel: "Data_Analysis_Population_vs_E-Waste.pdf",
  whatILearned:
    "I learned how data analysis and visualization can reveal different patterns in e-waste generation. The analysis showed that population strongly influences total national e-waste volume, while economic wealth and consumption behavior have a much stronger influence on per-capita e-waste generation. I also gained experience interpreting maps, scatter plots, regression analysis, and heatmaps.",
  sustainabilityConnection:
    "The analysis showed that e-waste management requires different solutions for different regions. Large-population countries need strong collection and recycling infrastructure, while high-income regions need measures such as right-to-repair policies, Extended Producer Responsibility, trade-in programs, and responsible consumption practices.",
  reflection:
    "This activity changed my understanding of the relationship between population and e-waste. I initially expected more people to directly mean more waste per person, but the analysis showed a more complex picture: population determines the scale of total waste, while economic wealth and consumption patterns strongly influence individual waste intensity. It demonstrated how data-driven analysis can support better environmental decisions and policies.",
  references: [
    "Kaggle — United Nations SDG Goal 11 Waste Dataset",
    "E-Waste & Environmental Management — Data Analysis Report",
  ],
  },
  {
  id: "clean-kerala-company",
  order: 8,
  title: "Clean Kerala Company — Building a Waste-Free Kerala",
  type: "Group Presentation & Report",
  date: "23 Sep 2026",
  objective:
    "Study Clean Kerala Company (CKCL) and its scientific approach to managing non-biodegradable and legacy waste across Kerala. Understand its operational workflow, community partnerships, infrastructure, environmental impact, challenges, and opportunities for sustainable waste management.",
  fileUrl: "/files/Kerala Waste Company Report.pdf",
  fileLabel: "Clean_Kerala_Company_Report.pdf",
  whatILearned:
    "I learned how Clean Kerala Company connects community-level waste collection with segregation, material recovery, recycling, co-processing, and productive use of residual waste. The study covered Material Collection Facilities (MCFs), Resource Recovery Facilities (RRFs), the role of Haritha Karma Sena, Kudumbashree, Suchitwa Mission, and local self-government bodies, along with CKCL's response to waste management challenges such as the 2024 Wayanad landslide clean-up.",
  sustainabilityConnection:
    "The CKCL model demonstrates how coordinated waste collection, segregation, and material recovery can reduce dependence on dumping and support a circular economy. Sending recyclable materials to registered recyclers and directing selected non-recyclables to co-processing can help recover resources and encourage more scientific waste management.",
  reflection:
    "This activity helped me understand that effective waste management requires more than simply collecting and disposing of waste. It depends on citizen participation, scientific segregation, appropriate processing facilities, government coordination, and public awareness. Studying CKCL showed me how collaboration between communities, local bodies, and processing partners can contribute to a cleaner and more sustainable environment.",
  references: [
    "Clean Kerala Company — Building a Waste-Free Kerala (Group Presentation)",
    "Clean Kerala Waste Management Report — Academic Submission",
  ],
  },
  {
  id: "e-waste-awareness-drive",
  order: 9,
  title: "E-Waste Awareness Drive 2026",
  type: "Awareness Campaign",
  date: "07 Oct 2026",
  objective:
    "Create an interactive digital awareness campaign to educate users about responsible e-waste management through an engaging website, hands-on sorting activity, and knowledge-based quiz.",
  fileUrl: "/files/E-waste Awareness Drive.pdf",
  fileLabel: "E-Waste_Awareness_Drive.pdf",
  whatILearned:
    "I learned how to communicate environmental concepts through an interactive digital experience rather than traditional awareness material. I designed a website where participants learn about e-waste, sort electronic items into appropriate categories using a drag-and-drop activity, complete an 8-question knowledge quiz, and receive a certificate based on their performance.",
  sustainabilityConnection:
    "The campaign promotes responsible e-waste disposal by helping users understand how electronic items should be sorted and recycled. Interactive awareness can encourage better disposal habits and contribute to a more responsible and circular approach to managing electronic waste.",
  reflection:
    "This activity showed me that awareness becomes more effective when people actively participate instead of only reading information. Building the E-Waste Action Challenge allowed me to combine technology, gamification, and environmental education into one experience. The certificate-based completion system also encouraged users to finish the learning activities and test their understanding.",
  references: [
    "E-Waste Awareness Drive 2026",
    "United Nations — Global E-Waste Monitor 2024",
  ],
  },
];
