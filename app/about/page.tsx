import AboutRowContent from "@/components/about-row-content"

import { aboutSections } from "./helpers"

export default function ContactPage() {
  return (
    <section className="container grid items-center gap-48 py-8 md:py-12">
      {aboutSections.map((item) => {
        return <AboutRowContent {...item} />
      })}
    </section>
  )
}
