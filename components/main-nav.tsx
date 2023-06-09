"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/assets/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-6 sm:flex-row md:gap-10">
      <Link href="/" className="flex items-center gap-2">
        <Icons.logo className="h-10 w-10" />
      </Link>
      {items?.length ? (
        <nav className="flex flex-col gap-6 sm:flex-row">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "relative flex items-center text-sm font-medium text-muted-foreground duration-200",
                    item.disabled && "cursor-not-allowed opacity-80",
                    pathname === item.href &&
                      "font-bold text-primary before:absolute before:-left-2 before:h-4 before:border-2 before:border-primary"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
