import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/assets/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {
  return (
    <footer className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-32 items-center space-x-4 border-t sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-end space-x-4">
          <p className="text-muted-foreground">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
