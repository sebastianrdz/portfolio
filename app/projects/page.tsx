import { projectsSections } from "./page.content"
import ProjectCard from "./project-card"

export default function ContactPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Projects
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Here is some of the projects I believe truly helped me grow and learn.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {projectsSections.map((item, index) => {
          return <ProjectCard key={index} {...item} />
        })}
      </div>
    </section>
  )
}
