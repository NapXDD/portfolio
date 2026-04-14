import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { defaultLinks } from "./header.constant";
import type { HeaderProps } from "./header.type";

export function Header({
  className,
  brand = "Portfolio",
  links = defaultLinks,
}: HeaderProps) {
  return (
    <header
      role="banner"
      className={cn(
        "sticky top-0 z-40 border-b bg-background/90 supports-backdrop-filter:backdrop-blur",
        className,
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Back to main page" className="shrink-0">
          <Button variant="ghost" className="gap-2">
            <span
              aria-hidden="true"
              className="inline-flex size-6 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground"
            >
              NP
            </span>
            <span className="font-medium">{brand}</span>
          </Button>
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((item) => (
              <li key={item.href}>
                <Button asChild variant="ghost" size="sm">
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group relative md:hidden">
          <summary className="list-none">
            <Button
              type="button"
              aria-label="Toggle navigation menu"
              variant="ghost"
              size="icon-sm"
              className="cursor-pointer"
            >
              <MenuIcon />
            </Button>
          </summary>

          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 mt-2 min-w-40 rounded-lg border bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10"
          >
            <ul className="flex flex-col gap-1">
              {links.map((item) => (
                <li key={item.href}>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
