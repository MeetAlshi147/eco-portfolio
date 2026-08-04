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
    date: "Jan 2026",
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
    date: "Feb 2026",
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
    date: "Mar 2026",
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
];
