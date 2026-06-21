import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "urban-scooter",
    companyName: "Urban Scooter",
    type: "Academic" as any,
    category: ["Web" as any, "Postman" as any, "PostgreSQL" as any, "REST API" as any,"JSON", "Android Studio", "Jira"],
    shortDescription:
      "Design and execution of over 320 test scenarios, including mobile, SQL, and API tests, for delivery driver management services. Identifying over 50 high-priority defects.",
    githubLink: "https://github.com/brian-duarte/Urban-Scooter-End-to-End-Testing",
    techStack: [
      "Postman" as any,
      "PostgreSQL" as any,
      "REST API" as any,
      "JSON" as any,
      "Android Studio" as any,
      "Jira" as any,
      "cross-platform" as any,
      "Boundary Value Analysis, Equivalence Partitioning, Negative Testing" as any,
    ],
    startDate: new Date("2025-11-30"),
    endDate: new Date("2025-12-24"),
    companyLogoImg: "/projects/urban-scooter/logo.gif",
    pagesInfoArr: [ // 
    ],
    descriptionDetails: {
      paragraphs: [
        "Design and execution of over 320 test scenarios, including mobile, SQL, and API tests, for delivery driver management services. Identifying over 50 high-priority defects.",
        "* API Validation: Validated REST API endpoints using positive and negative test scenarios, verifying request handling, HTTP responses, and business rule compliance.",
        "* Test Design: Applied Boundary Value Analysis (BVA) and Equivalence Partitioning techniques to evaluate username and password constraints across valid and invalid data classes.",
        "* Mobile & Web Synchronization: Validated real-time synchronization between backend services, web interfaces, and mobile applications, ensuring data integrity and a consistent user experience across platforms.",
        "* Database Validation (PostgreSQL): Performed direct SQL queries to validate that orders were correctly created, stored, and updated in the backend, ensuring perfect synchronization between UI and Database.",
        "* Defect Detection & Documentation: Reported 50+ defects across web, mobile, and API layers in Jira, providing reproducible steps, logs, and validation evidence to support issue investigation and resolution.",
      ],
      bullets: [
        "Designed test cases",
        "Executed E2E testing",
        "Validated APIs",
        "Validated SQL",
        "Boundary Value Analysis, Equivalence Partitioning, and Negative Testing.",
        "cross-platform",
      ],
    },
  },
  {
    id: "urban-grocers",
    companyName: "Urban Grocers",
    type: "Academic" as any,
    category: ["Postman" as any, "REST API" as any, "JSON" as any, "HTTP Protocol" as any, "cURL" as any, "API Test Design" as any],
    shortDescription:
      "Validation of backend services and RESTful architectures. Revealing a 36.4% failure rate in key transactional flows. Executed 110 test cases, revealing a 36.4% failure rate and identified defects that allowed invalid configurations, directly violating business rules and compromising data integrity.",
    githubLink: "https://github.com/brian-duarte/Qa-Project-4-API-Testing",
    techStack: ["Postman" as any, "REST" as any, "HTTP" as any, "JSON" as any, "Bearer Token" as any, "Endpoints" as any],
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-08-15"),
    companyLogoImg: "/projects/urban-grocers/logo.gif",
    pagesInfoArr: [ //
    ],
    descriptionDetails: {
      paragraphs: [
        "Validation of backend services and RESTful architectures. Revealing a 36.4% failure rate in key transactional flows. Executed 110 test cases, revealing a 36.4% failure rate and identified defects that allowed invalid configurations, directly violating business rules and compromising data integrity.",
        "* API Validation & REST: Validated RESTful endpoints ensuring correct data exchange, HTTP status codes, and enforcement of business rules across backend services.",
        "* Postman Test Execution: Designed and executed API requests (GET, POST, PUT, DELETE) using Postman, managing environments.",
        "* Test Design Strategy: Designed structured test cases using Equivalence Partitioning and Boundary Value Analysis, uncovering defects in edge cases and invalid input handling.",
        "* Defect Reporting & Debugging Support: Documented bug reports including cURL commands, payloads, and response evidence, accelerating issue reproduction and resolution by developers.",
      ],
      bullets: [
        "Requirement Analysis",
        "Test Design & Strategy",
        "Postman Collection",
        "API Testing Execution",
        "Defect Management",
        "Results Documentation",
      ],
    },
  },
  {
    id: "selenium",
    companyName: "Urban Routes - Selenium Automation",
    type: "Academic" as any,
    category: ["Selenium WebDriver" as any, "Page Object Model (POM)" as any, "QA Automation" as any, "Pytest" as any, "ChromeDriver" as any, "CSS Selector" as any, "XPath" as any, "HTML" as any],
    shortDescription:
      "UI test automation for the Urban Routes web application, simulating the complete taxi request flow. Critical functionality was validated through 9 test cases, of which only 5 passed (55.6%), resulting in 4 failed tests (44.4%).",
    githubLink: "https://github.com/brian-duarte/qa-project-Urban-Routes-es",
    techStack: ["Selenium WebDriver" as any, "Page Object Model (POM)" as any, "QA Automation" as any, "Pytest" as any, "ChromeDriver" as any, "CSS Selector" as any, "XPath" as any, "HTML" as any],
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-11-14"),
    companyLogoImg: "/projects/selenium/logo.gif",
    pagesInfoArr: [
    ],
    descriptionDetails: {
      paragraphs: [
        "UI test automation for the Urban Routes web application, simulating the complete taxi request flow. Critical functionality was validated through 9 test cases, of which only 5 passed (55.6%), resulting in 4 failed tests (44.4%).",
        "* User Flow Simulation: Automation of taxi requests, from address selection to order confirmation and payment.",
        "* User Interface (UI) Validation: Verification of proper interaction with page elements, including input fields, buttons, and selections.",
        "* Page Object Model (POM) Implementation: Design of maintainable and scalable tests by separating page elements from test logic.",
      ],
      bullets: [
        "Page Object Model (POM) Implementation: Project structuring by separating locators from test logic, which facilitates code maintenance and scalability.",
        "Full Flow Automation: Step-by-step simulation of the user experience.",
        "Selenium Techniques: Application of WebDriverWait and expected_conditions to handle web page asynchrony, and JavaScript execution for complex interactions.",
        "Efficient Resource Management: Implementation of teardown methods to ensure proper browser closure and optimize system performance.",
      ],
    },
  },
  {
    id: "urban-lunch",
    companyName: "Urban Lunch",
    type: "Academic",
    category: ["Android Studio" as any, "Jira" as any, "Interruption Testing" as any, "Network Resiliency" as any,  "Mobile QA" as any],
    shortDescription:
      "Executed 180 comprehensive test cases, identifying 24 critical defects and a 13.3% failure rate in critical flows. Evaluated session stability and user retention risks to ensure a high-quality pre-release state.",
    githubLink: "https://github.com/brian-duarte/Qa-Project-5-Mobile-Testing-Urban-Lunch/tree/main",
    techStack: ["Android Studio" as any, "Jira" as any, "Interruption Testing" as any, "Network Resiliency" as any,  "Mobile QA" as any],
    startDate: new Date("2025-08-07"),
    endDate: new Date("2025-08-27"),
    companyLogoImg: "/projects/urban-lunch/logo.gif",
    pagesInfoArr: [
    ],
    descriptionDetails: {
      paragraphs: [
        "Executed 180 comprehensive test cases, identifying 24 critical defects and a 13.3% failure rate in critical flows. Evaluated session stability and user retention risks to ensure a high-quality pre-release state.",
        "* Mobile Resilience: Validated application behavior through Interruption Testing (calls, low battery, multitasking) and network transitions (WiFi/5G/Airplane Mode) to ensure data integrity in real-world scenarios.",
        "* User Flow Validation: Performed E2E testing from pickup selection to order completion, verifying UI consistency and business logic across emulators and physical devices.",
        "* Defect Management: Orchestrated technical documentation in Jira with environment logs and multimedia evidence, significantly reducing debugging and resolution turnaround times.",
      ],
      bullets: [
        " Pickup Point.",
        "Cart Management.",
        "Confirmation.",
        "Order Tracking.",
        "Order Delivered.",
        "Error Handling.",
      ],
    },
  },
  {
    id: "data-base",
    companyName: "Data Base - Taxi Chicago",
    type: "Academic" as any,
    category: ["PostgreSQL" as any, "DBeaver" as any, "SQL" as any, "JOINs" as any, "CASE WHEN" as any, "GROUP BY" as any],
    shortDescription:
      "Performed SQL-based analysis on Chicago taxi trip data to extract operational insights, evaluate fleet distribution, classify weather conditions, and rank taxi companies by trip activity.",
    githubLink: "https://github.com/brian-duarte/Qa-Project-6-Data-Base-Taxi-Chicago",
    techStack: ["PostgreSQL" as any, "DBeaver" as any, "SQL" as any, "JOINs" as any, "CASE WHEN" as any, "GROUP BY" as any,],
    startDate: new Date("2021-09-01"),
    endDate: new Date("2025-09-14"),
    companyLogoImg: "/projects/data-base/logo.png",
    pagesInfoArr: [
    ],
    descriptionDetails: {
      paragraphs: [
        "Performed SQL-based analysis on Chicago taxi trip data to extract operational insights, evaluate fleet distribution, classify weather conditions, and rank taxi companies by trip activity.",
        "* Fleet Analysis: Queried taxi registration data to identify total active vehicles and analyze fleet size distribution across companies.",
        "* Business Insights: Used aggregation functions (COUNT, GROUP BY, HAVING) to identify companies with smaller fleets and compare operational scale.",
        "* Weather Classification: Applied CASE WHEN logic to categorize weather conditions as Good or Bad for ride analysis.",
        "* Trip Volume Analysis: Built JOIN queries to rank taxi companies by completed trips during selected time periods.",
      ],
      bullets: [
      ],
    },
  },
  {
    id: "python",
    companyName: "Urban Grocer - Automation",
    type: "Academic" as any,
    category: ["Python" as any, "Pytest" as any, "REST API" as any, "HTTP GET/POST" as any, "Bearer Token" as any],
    shortDescription:
      "Automated test implementation for kit creation, identifying 12 critical API validation failures. System stability was evaluated through 21 comprehensive test cases.",
    githubLink: "https://github.com/brian-duarte/qa-project-Urban-Grocers-app-es",
    techStack: ["Python" as any, "Pytest" as any, "REST API" as any, "HTTP GET/POST" as any, "Bearer Token" as any],
    startDate: new Date("2025-10-29"),
    endDate: new Date("2025-10-13"),
    companyLogoImg: "/projects/python/logo.gif",
    pagesInfoArr: [
    ],
    descriptionDetails: {
      paragraphs: [
        "Automated test implementation for kit creation, identifying 12 critical API validation failures. System stability was evaluated through 21 comprehensive test cases.",
        "* User Automation: Complete user creation flow and Bearer Token management for secure authentication.",
        "* API Validation: Detection of status code inconsistencies (201 vs 400) when handling invalid data and malicious scripts.",
        "* Robustness Analysis: Boundary testing (512+ characters) and data integrity validation on the /api/v1/kits endpoint.",
      ],
      bullets: [
        "Automated user creation workflow.",
        "Dynamic Bearer Token authentication",
        "Positive and negative API testing",
        "Validation of business rules for name field",
        "HTTP response verification",
        "JSON schema and response structure validation.",
        "Boundary value testing",
        "Error handling validation",
      ],
    },
  },



];

export const featuredProjects = Projects.slice(0, 3);
