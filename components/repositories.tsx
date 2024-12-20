"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MobileNav } from "./mobile-nav"
import { repositories } from "@/config/repositories"
import { RefreshCcw, Plus } from 'lucide-react'
import { RepositoryCard } from "./repository-card"

export function Repositories() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <MobileNav />
          <h1 className="text-2xl font-bold">Repositories</h1>
          <Badge variant="secondary">33 total repositories</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <RefreshCcw className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Repository
          </Button>
        </div>
      </div>
      <div className="mb-6">
        <Input placeholder="Search Repositories" className="max-w-md" />
      </div>
      <div className="space-y-4">
        {repositories.map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
      </div>
    </div>
  )
}

