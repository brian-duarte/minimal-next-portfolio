import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "Brian-Duarte",
    icon: Icons.gitHub,
    link: "https://github.com/brian-duarte",
  },
  {
    name: "LinkedIn",
    username: "Brian Duarte",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/brian-duarte-qa-engineer/",
  },
  {
    name: "Instagram",
    username: "@Brian_duartesuarez",
    icon: Icons.instagram,
    link: "https://www.instagram.com/brian_duartesuarez/",
  },
  {
    name: "Contact",
    username: "Brian-Duarte",
    icon: Icons.gmail,
    link: "/contact",
  },
];
