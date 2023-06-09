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
  {
    title: "NLP Chatbot",
    description: [
      "Natural Language Processing chatbot can do accurate attribute extraction and intention classification. The chatbot delivers personalized responses and guides users through their queries seamlessly. An impressive feature is its ability to capture and process text fields to map locations on a map, providing tailored directions.",
    ],
    icon: <Icons.inegi className="h-10 w-10" />,
    link: "https://github.com/sebastianrdz/mapa-interactivo",
    tags: ["React", "Python", "FastAPI"],
  },
  {
    title: "WhatsApp Clone",
    description: [
      "In my side project, I developed a WhatsApp clone using Flutter. Leveraging Flutter's cross-platform capabilities, I created a responsive mobile app with features similar to WhatsApp. Integrating Firebase for authentication and database functionalities ensured secure user access and efficient data storage. The project highlights my expertise in mobile app development and showcases my ability to utilize Flutter and Firebase for building robust applications.",
    ],
    icon: <Icons.whatsApp className="h-10 w-10" />,
    link: "https://github.com/sebastianrdz/whatsapp_messager",
    tags: ["Flutter", "Dart", "Firebase"],
  },
]
