import { Button } from "@/components/ui/button"
import { NavigationItem } from "@/types/repository"

interface NavigationItemsProps {
  items: NavigationItem[]
  onSelect?: () => void
}

export function NavigationItems({ items, onSelect }: NavigationItemsProps) {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <Button
          key={item.href}
          variant={item.variant || "ghost"}
          className="w-full justify-start"
          onClick={onSelect}
        >
          <item.icon className="mr-2 h-4 w-4" />
          {item.label}
        </Button>
      ))}
    </div>
  )
}

