import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { Icons } from "./assets/icons"
import { MainNav } from "./main-nav"

export function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Icons.menu />
        </Button>
      </SheetTrigger>
      <SheetContent position="top">
        <MainNav items={siteConfig.mainNav} />
      </SheetContent>
    </Sheet>
  )
}
