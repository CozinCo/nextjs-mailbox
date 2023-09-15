import Link from "next/link"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme/theme-toggle"

export function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      
      <Link
        href="/settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden lg:block md:block px-2"
      >
        Settings
      </Link>
      <ThemeToggle className="hidden lg:block md:block" />
    </nav>
  )
}
