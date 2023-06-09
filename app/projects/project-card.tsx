import React from "react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string[]
  icon: React.JSX.Element
  link?: string
  tags?: string[]
}

function ProjectCard({
  title,
  description,
  icon,
  link,
  tags,
}: ProjectCardProps) {
  const card = (
    <div className="flex h-full cursor-pointer flex-col gap-4 overflow-hidden rounded-2xl p-4 duration-200 hover:bg-muted md:p-10">
      <h2 className="flex min-h-[40px] max-w-[500px] items-center gap-4 text-xl font-bold leading-tight tracking-tighter">
        <div className="rounded-full bg-primary p-2 text-primary-foreground ">
          {icon}
        </div>
        <span className="border-l-2 border-primary pl-2">{title}</span>
      </h2>
      {description.map((item, index) => {
        return (
          <p
            key={index}
            className="max-w-[700px] text-lg text-muted-foreground"
          >
            {item}
          </p>
        )
      })}
      {tags && (
        <div className="grid w-fit grid-flow-col grid-rows-1 gap-2">
          {tags.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground"
              >
                {item}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )

  return link ? (
    <Link target="_blank" href={link}>
      {card}
    </Link>
  ) : (
    card
  )
}

export default ProjectCard
