import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/assets/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { NavSheet } from "./nav-sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center sm:justify-between ">
        <div className="flex sm:hidden">
          <NavSheet />
        </div>
        <div className="hidden sm:flex">
          <MainNav items={siteConfig.mainNav} />
        </div>

        <div className="flex flex-1 items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
