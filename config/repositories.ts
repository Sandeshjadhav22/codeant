import { Repository } from '@/types/repository'

export const repositories: Repository[] = [
  {
    id: "1",
    name: "design-system",
    visibility: "Public",
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago",
  },
  {
    id: "2",
    name: "codeant-ci-app",
    visibility: "Private",
    language: "JavaScript",
    size: "5871 KB",
    updatedAt: "2 days ago",
  },
  {
    id: "3",
    name: "analytics-dashboard",
    visibility: "Private",
    language: "Python",
    size: "4521 KB",
    updatedAt: "5 days ago",
  },
]

export const languageColors: Record<string, string> = {
  React: "bg-blue-500",
  JavaScript: "bg-yellow-500",
  Python: "bg-green-500",
  Swift: "bg-orange-500",
  Java: "bg-red-500",
  "HTML/CSS": "bg-purple-500",
  PHP: "bg-indigo-500",
}

