"use client"

import { cn } from "@/lib/utils"
import { NavigationItems } from "./navigation-items"
import { navigationItems, bottomNavigationItems } from "@/config/navigation"

interface SideNavProps extends React.HTMLAttributes<HTMLDivElement> {
  onSelect?: () => void
}

export function SideNav({ className, onSelect }: SideNavProps) {
  return (
    <div className={cn("pb-12 w-64 border-r bg-background", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mb-4 flex items-center gap-2">
            <h2 className="text-lg font-semibold">CodeAnt AI</h2>
          </div>
          <NavigationItems items={navigationItems} onSelect={onSelect} />
        </div>
        <div className="px-3 py-2">
          <NavigationItems items={bottomNavigationItems} onSelect={onSelect} />
        </div>
      </div>
    </div>
  )
}

