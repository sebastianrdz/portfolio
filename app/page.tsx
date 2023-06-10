import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/assets/icons"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-12 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-6">
        <h1 className="max-w-[700px] text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Hey!
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Hello! I&apos;m Sebastian Rodriguez. Welcome to my portfolio. Feel
          free to contact me if you have any questions. In the meantime you can
          browse through the page and get to know me a little better. the page
          and get to know me a little better.
        </p>
        <nav className="flex items-center space-x-1">
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.linkedin className="h-5 w-5" />
              <span className="sr-only">Linkedin</span>
            </div>
          </Link>
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
        </nav>
        <div className="grid min-w-[400px] gap-8 rounded-md border p-4">
          <h1 className="text-xl font-bold leading-tight tracking-tighter">
            Experience
          </h1>

          <div className="flex items-center gap-4">
            <div className="rounded-full bg-primary p-2 text-primary-foreground ">
              <Icons.umbrage className="h-8 w-8" />
            </div>
            <span className="flex flex-col gap-1 border-l-2 border-primary pl-2">
              <h2 className="text-xl font-bold leading-tight tracking-tighter">
                Umbrage
              </h2>
              <p className="text-sm font-medium text-muted-foreground">
                Associate Web Crafter Engineer
              </p>
            </span>
          </div>
          <a href="/SebastianRodriguez_Resume.pdf" download>
            <Button variant="outline" className="w-full">
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
