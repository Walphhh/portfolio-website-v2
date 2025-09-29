export type experienceType = "work" | "non-work";

export type Month =
  | "jan"
  | "feb"
  | "mar"
  | "apr"
  | "may"
  | "jun"
  | "jul"
  | "aug"
  | "sep"
  | "oct"
  | "nov"
  | "dec";

interface Date {
  year: number;
  month: Month;
}

export interface Duration {
  startDate: Date;
  endDate: Date | "present";
}

interface Positions {
  position: string;
  description: string;
  duration: Duration;
}

export interface ExperienceCard {
  experienceType: experienceType;
  position: string;
  company: string;
  companyLogo: string;
  location: string;
  description: string;
  duration: Duration;
  positions?: Positions[];
}

export const ExperienceList: ExperienceCard[] = [
  {
    experienceType: "work",
    position: "Project Manager & Lead Developer (WIL)",
    company: "SOPREMA",
    companyLogo: "/icons/soprema_logo.jpg",
    location: "Sydney, Australia",
    description:
      "Served as both Project Manager and Lead Developer, overseeing AGILE sprint planning, task allocation, and overall project progress while leading a multidisciplinary team. Liaised with stakeholders to gather requirements and communicate progress updates. Directed development efforts by designing and maintaining the project’s technical architecture, including build pipelines, run scripts, and dependency management. Led DevOps initiatives by implementing Git workflows, automated CI/CD pipelines with GitHub Actions, and containerised deployments using Docker. Acted as the team leader, mentoring teammates, facilitating onboarding, and ensuring alignment between technical delivery and business objectives.",
    duration: {
      startDate: {
        year: 2025,
        month: "aug",
      },
      endDate: "present",
    },
  },
  {
    experienceType: "work",
    position: "Senior Student Belonging Activator",
    company: "Macquarie University",
    companyLogo: "/icons/mqu_logo.png",
    location: "Sydney, Australia ",
    description:
      "Supported recruitment through candidate screening and assessments, streamlined booking processes to improve efficiency and user experience, and led teams during campus activations by managing logistics, on-site coordination, and operations. Curated and scheduled branded content across multiple channels, boosting social media engagement by 50% through strategic planning and content creation.",
    duration: {
      startDate: {
        year: 2025,
        month: "apr",
      },
      endDate: "present",
    },
    positions: [
      {
        position: "Student Belonging Activator",
        description:
          "Handled a diverse range of responsibilities that includes setting up and managing stalls,preparing engagement materials, assisting with calling campaigns, and providing ushering services during graduations. Leveraged communication skills in order to provide essential information to more than 300 students during stalls regarding current activations and events. Engaged with 80-120 students over the phone per day during calling campaigns to communicate important information and gather data.",
        duration: {
          startDate: {
            year: 2024,
            month: "feb",
          },
          endDate: {
            year: 2025,
            month: "apr",
          },
        },
      },
    ],
  },
  {
    experienceType: "work",
    position: "Student Ambassador",
    company: "Faculty of Science and Engineering MQ",
    companyLogo: "/icons/mqu_logo.png",
    location: "Sydney, Australia ",
    description:
      "Conducted campus tours for incoming Science and Engineering students around faculty related facilities. Provided wayfinding assistance, ensuring that event attendees were able to navigate the event area effectively. Supported the setup, execution, and packdown of campus events, contributing to a positive student experience",
    duration: {
      startDate: {
        year: 2025,
        month: "feb",
      },
      endDate: "present",
    },
  },
  {
    experienceType: "non-work",
    position: "Secretary",
    company: "Filipino Students Society MQ",
    companyLogo: "/icons/fssmqu_logo.png",
    location: "Sydney, Australia ",
    description:
      "Enhnced membership experience by streamlining interaction processes with the society. ",
    duration: {
      startDate: {
        year: 2025,
        month: "jan",
      },
      endDate: "present",
    },
    positions: [
      {
        position: "Director of Events",
        description:
          "Directed and executed 4 small scale events with approximately 50 participants each, while managing tight deadlines and multitasking under pressure. Demonstrated strong project management skills through organising logistics, delegating tasks, and ensuring smooth operations during events. Led multiple team meetings and contributed valuable insight that aided in strategic decision-making. Improved team productivity by implementing event planning protocols and processes",
        duration: {
          startDate: {
            year: 2024,
            month: "jan",
          },
          endDate: {
            year: 2025,
            month: "jan",
          },
        },
      },
      {
        position: "General Officer",
        description:
          "Collaborated in organizing and setting up events, contributing to event success and satisfying membership experience. Assisted with tasks including email management, social media sponsorship promotions, and general support.",
        duration: {
          startDate: {
            year: 2023,
            month: "jan",
          },
          endDate: {
            year: 2024,
            month: "jan",
          },
        },
      },
    ],
  },
  {
    experienceType: "work",
    position: "Barista",
    company: "Diego’s Coffee and Donuts",
    companyLogo: "/icons/diegos_logo.jpg",
    location: "Sydney, Australia",
    description:
      "Served coffee and donuts with speed and a smile ☕🍩. Learned to thrive under pressure, balance multiple orders, and keep customers happy while working in a fast-paced team environment.",
    duration: {
      startDate: {
        year: 2023,
        month: "apr",
      },
      endDate: "present",
    },
  },
];
