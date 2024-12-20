import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Repository } from "@/types/repository"
import { languageColors } from "@/config/repositories"

interface RepositoryCardProps {
  repository: Repository
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{repository.name}</h3>
            <Badge variant="outline">{repository.visibility}</Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className={`h-3 w-3 rounded-full ${languageColors[repository.language]}`} />
              {repository.language}
            </div>
            <span>{repository.size}</span>
            <span>Updated {repository.updatedAt}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

