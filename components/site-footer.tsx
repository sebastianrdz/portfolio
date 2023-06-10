import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/assets/icons"

export function SiteFooter() {
  return (
    <footer className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-32 items-center space-x-4 border-t sm:justify-between sm:space-x-0">
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
        <div className="flex flex-1 items-center justify-end space-x-4">
          <p className="text-muted-foreground text-sm sm:text-md">
            {siteConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
