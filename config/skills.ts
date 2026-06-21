import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Write clean, readable scripts and build robust frameworks for automated software testing.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "Selenium",
    description:
      "Automate web browsers effectively to execute UI regression suites and cross-browser testing.",
    rating: 5,
    icon: Icons.selenium,
  },
  {
    name: "SQL",
    description:
      "Perform database queries and transaction audits to ensure data integrity and persistence verification.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "Docker",
    description:
      "Isolate and deploy stable, reproducible test environments using containers and Docker Compose.",
    rating: 5,
    icon: Icons.docker,
  },
  {
    name: "Postman",
    description:
      "Design, execute, and validate automated API request collections and integration tests.",
    rating: 5,
    icon: Icons.post,
  },
  {
    name: "Linux",
    description:
      "Manage files, navigate directories, and execute commands efficiently in terminal environments like Linux Mint.",
    rating: 5,
    icon: Icons.linux,
  },
  {
    name: "Java",
    description:
      "Develop structured, object-oriented code for scalable backend test automation frameworks.",
    rating: 4,
    icon: Icons.java,
  },
  {
    name: "Jira",
    description:
      "Track issues, log defects, and manage Agile testing sprint lifecycles and bug reports.",
    rating: 4,
    icon: Icons.jira,
  },
  {
    name: "Pytest",
    description:
      "Create scalable, expressive, and easily maintainable unit and functional test suites in Python.",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "TestNG",
    description:
      "Configure advanced testing structures, annotations, and parallel execution logic for Java suites.",
    rating: 4,
    icon: Icons.java,
  },
  {
    name: "Maven",
    description:
      "Manage project dependencies, build life cycles, and plugins in complex Java automation environments.",
    rating: 4,
    icon: Icons.java,
  },
  {
    name: "Android Studio",
    description:
      "Inspect logs, configure emulators, and conduct mobile application performance and UI testing.",
    rating: 4,
    icon: Icons.androidstudio,
  },
  {
    name: "JSON",
    description:
      "Parse and validate structured data schemas for API payloads, configurations, and communication.",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "Figma",
    description:
      "Analyze UI/UX designs, structures, and user journeys to construct exact design-to-test case verifications.",
    rating: 4,
    icon: Icons.figma,
  },
  {
    name: "HTML 5",
    description:
      "Inspect DOM elements, locators, and web properties to write reliable, unbreakable CSS/XPath selectors.",
    rating: 4,
    icon: Icons.html5,
  }
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);