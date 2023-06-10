import React from "react"

import { Icons } from "../../components/assets/icons"

interface RowContentAction {
  title: string
  onClick: () => void
}

interface RowContentProps {
  title?: string
  subTitle?: string
  description?: string[]
  actions?: RowContentAction[]
  image?: React.JSX.Element
  imagePosition?: string
}

export default function AboutRowContent({
  title,
  subTitle,
  description,
  actions,
  image,
  imagePosition,
}: RowContentProps) {
  const temp = (
    <div className="hidden h-full items-center justify-center lg:grid">
      {image ? image : <Icons.logo className="h-10 w-10" />}
    </div>
  )

  return (
    <section className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12 ">
      {imagePosition === "start" && temp}
      <div className="grid gap-4">
        <h2 className="max-w-[500px] text-xl font-bold leading-tight tracking-tighter text-muted-foreground">
          {subTitle}
        </h2>
        <h1 className="max-w-[500px] text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {title}
        </h1>
        {description?.map((item, index) => {
          return (
            <p
              key={index}
              className="max-w-[700px] text-lg text-muted-foreground"
            >
              {item}
            </p>
          )
        })}
      </div>
      {!(imagePosition === "start") && temp}
    </section>
  )
}
