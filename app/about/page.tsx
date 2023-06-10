import AboutRowContent from "@/app/about/about-row-content"

import { aboutSections } from "./page.content"

export default function ContactPage() {
  return (
    <section className="container grid items-center gap-24 py-8 md:py-12 lg:gap-48">
      {aboutSections.map((item, index) => {
        return <AboutRowContent key={index} {...item} />
      })}
    </section>
  )
}
