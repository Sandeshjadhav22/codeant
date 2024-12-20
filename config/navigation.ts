import { FileCode2, Cloud, HelpCircle, Settings, MessageCircle, LogOut } from 'lucide-react'
import { NavigationItem } from '@/types/repository'

export const navigationItems: NavigationItem[] = [
  {
    label: "Repositories",
    icon: FileCode2,
    href: "/repositories",
    variant: "default",
  },
  {
    label: "AI Code Review",
    icon: FileCode2,
    href: "/ai-review",
  },
  {
    label: "Cloud Security",
    icon: Cloud,
    href: "/security",
  },
  {
    label: "How to Use",
    icon: HelpCircle,
    href: "/help",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export const bottomNavigationItems: NavigationItem[] = [
  {
    label: "Support",
    icon: MessageCircle,
    href: "/support",
  },
  {
    label: "Logout",
    icon: LogOut,
    href: "/logout",
    variant: "destructive",
  },
]

