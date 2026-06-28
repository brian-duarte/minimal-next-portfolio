import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Brian Duarte portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Ensuring software quality with presision.",
    metadata: {
      title: "Skills",
      description:
        "Brian Duarte Ensuring software quality with presision.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Brian Duarte's projects in software quality assurance and technical platform validation.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Brian Duarte.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Naman Barkiya's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Brian Duarte resume.",
    metadata: {
      title: "Resume",
      description: "Brian Duarte resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Thoughts on AI, software engineering, and building in public.",
    metadata: {
      title: "Blogs",
      description:
        "Naman Barkiya's blog — thoughts on AI, software engineering, and building in public.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Brian Duarte professional journey and experience timeline.",
    },
  },
};
