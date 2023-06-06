import React from "react"

import { aboutConfig } from "@/config/about"

import { Icons } from "./icons"

interface RowContentAction {
  title: string
  onClick: () => void
}

interface RowContentProps {
  title?: string
  subTitle?: string
  descritpion?: string
  actions?: RowContentAction[]
  image?: React.JSX.Element
  imagePosition?: string
}

export default function AboutRowContent({
  title,
  subTitle,
  descritpion,
  actions,
  image,
  imagePosition,
}: RowContentProps) {
  const temp = image ? (
    <div className="grid animate-pulse items-center justify-center">
      {image}
    </div>
  ) : (
    <div className="grid animate-pulse items-center justify-center">
      <Icons.logo className="h-10 w-10" />
    </div>
  )

  return (
    <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
      {imagePosition === "start" && temp}
      <div className="grid gap-4">
        <h1 className="max-w-[500px] text-xl font-bold leading-tight tracking-tighter text-muted-foreground">
          {subTitle}
        </h1>
        <h1 className="max-w-[500px] text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {title}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          {descritpion}
        </p>
      </div>
      {!(imagePosition === "start") && temp}
    </section>
  )
}
