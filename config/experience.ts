import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "datazone",
    position: "Technical Support-AutoZone",
    company: "Datazone",
    location: "Chihuahua, Chihuahua, Mexico",
    startDate: new Date("2018-08-01"),
    endDate: new Date("2019-01-15"),
    description: [
      "Provided bilingual technical support (English) resolving incidents in internal systems using predefined commands and procedures, ensuring business operational continuity.",
      "Diagnosed and resolved performance failures and user configurations, ensuring a stable and reliable work environment.",
      "Identified and escalated critical incidents on store servers, preventing data loss and protecting the integrity of sales data.", 
    ],
    achievements: [
      "Detected and resolved critical IT infrastructure incidents, preventing data loss and ensuring operational continuity in multiple branches.",
      "Optimized response times to system failures through standardized procedures, reducing operational interruptions."
    ],
    skills: ["Technical Support" as any, "Troubleshooting" as any, "Incident Resolution" as any, "System Diagnostics" as any, "Command-based System Operations" as any, "Command-based System Operation" as any, "SOPs" as any,],
    companyUrl: "https://btssc.autozone.com",
    logo: "/experience/dat-logo.png",
  },
  {
    id: "teleperformance",
    position: "Customer Support-FedEx",
    company: "Teleperformance",
    location: "Chihuahua, Chihuahua, Mexico",
    startDate: new Date("2016-03-01"),
    endDate: new Date("2017-08-01"),
    description: [
      "Bilingual support (English) for USA and Canada markets.",
      "managing international shipping logistics and resolving critical delivery incidents.",
    ],
    achievements: [
      "Reduced repeated inquiries through proactive order tracking.",
      "Increasing customer trust and satisfaction.",
      "Increasing satisfaction and minimizing information errors.",
    ],
    skills: ["Bilingual Communication" as any,"International Shipping Logistics" as any, "Incident Resolution" as any, "Case Management" as any, "Customer Issue Escalation" as any, "Order Tracking" as any,],
    companyUrl: "https://www.tp.com/en-us/",
    logo: "/experience/tp-logo.png",
  },
  {
    id: "institutoenlac",
    position: "Pediatric Physical Therapist",
    company: "Instituto ENLAC",
    location: "Cuauhtemoc, Chihuahua, Mexico",
    startDate: new Date("2026-01-30"),
    endDate: "Present",
    description: [
      "Provided specialized physical therapy to children with disabilities using rehabilitation methodologies to promote their motor autonomy.",
      "designed and organized cyclical training programs to ensure the achievement of therapeutic objectives."
    ],
    achievements: [
      "Implemented a structured training system that optimized session organization and facilitated systematic progress evaluation.",
      "personalized and consistent care for each patient."
    ],
    skills: [
      "Rehabilitation Methodologies" as any,
      "Performance Monitoring" as any,
      "Therapeutic Program" as any,
      "Treatment Planning" as any,
      "Physical Rehabilitation" as any,
      "Patient Progress Tracking" as any,
      "Motor Development Assessment" as any,
    ],
    companyUrl: "https://www.enlac.org/",
    logo: "/experience/enlac-logo.jpeg",
  },
];
