import { Icon } from "lucide-react"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Sebastian Rodriguez",
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
  copyright: "© 2023 Sebatian Rodriguez. All rights reserved.",
  links: {
    twitter: "",
    github: "https://github.com/sebastianrdz",
    linkedin: "https://www.linkedin.com/in/sebastian-rodriguez123/",
    docs: "https://ui.shadcn.com",
  },
  aboutSections: [
    {
      title: "Hello! I'm Sebastian Rodriguez, recent university graduate and gym enthusiast",
      subTitle: "",
      descritpion: "Hello there! My name is Sebastian Rodriguez, and I am thrilled to introduce myself as an aspiring computer science engineer. With a recent graduation under my belt, I am now eagerly seeking opportunities to expand my knowledge, skills, and expertise in this ever-evolving field.",
    },
    {
      title: "Hello! I'm Sebastian Rodriguez, recent university graduate and gym enthusiast",
      subTitle: "",
      descritpion: "Hello there! My name is Sebastian Rodriguez, and I am thrilled to introduce myself as an aspiring computer science engineer. With a recent graduation under my belt, I am now eagerly seeking opportunities to expand my knowledge, skills, and expertise in this ever-evolving field.",
    }
  ]
}
