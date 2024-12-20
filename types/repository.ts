export interface Repository {
    id: string
    name: string
    visibility: "Public" | "Private"
    language: string
    size: string
    updatedAt: string
  }
  
  export interface NavigationItem {
    label: string
    icon: React.ComponentType<{ className?: string }>
    href: string
    variant?: "default" | "ghost" | "destructive"
  }
  
  