import { Icons } from "@/components/assets/icons"

export const projectsSections = [
  {
    title: "Personal Portfolio",
    description: [
      "The website you are currently navigating is my portfolio. With Next.js, I've created a fast and highly interactive platform. Leveraging Next.js's built-in routing capabilities, I've ensured smooth navigation and intuitive user interactions. This project highlights my expertise in creating dynamic and engaging frontend experiences.",
    ],
    icon: <Icons.logo className="h-10 w-10" />,
    link: "https://github.com/sebastianrdz/portfolio",
    tags: ["Next.JS", "shadcn/ui", "TypeScript"],
  },
  {
    title: "Wizeline Questions",
    description: [
      "At Wizeline, we revamped the web forum app for enhanced usability and user experience. With a dynamic React front-end deployed on AWS S3 and secure REST API endpoints on the back-end, we created a collaborative and knowledge-sharing platform. Our coding mastery transformed user experiences at Wizeline.",
    ],
    icon: <Icons.wizeline className="h-10 w-10" />,
    link: "",
    tags: ["React", "AWS", "PostgersQL", "Express.JS"],
  },
]
