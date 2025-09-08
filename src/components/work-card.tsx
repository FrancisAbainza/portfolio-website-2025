import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "./ui/badge"

type Work = {
  title: string
  description: string
  src: string
  stack: string[]
  url: string
  alt: string
}

type WorkCardProps = {
  work: Work
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Link
      href={work.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group" // Added group class for hover effects
    >
      <Card
        className="bg-secondary/40 border-cyan-500/20 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:border-cyan-500/40 cursor-pointer h-full p-0" // Added hover animations and cursor pointer
      >
        <CardContent className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            {/* Added relative positioning and overflow hidden for image hover effect */}
            <Image
              src={work.src || "/placeholder.svg"}
              alt={work.description}
              width={1200}
              height={800}
              className="h-60 w-full object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" // Added image scale hover effect
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            {/* Added overlay for hover effect */}
          </div>
          <div className="p-4">
            <h3 className="font-medium group-hover:text-cyan-400 transition-colors duration-300">{work.title}</h3>
            {/* Added title color change on hover */}
            <p className="text-sm text-muted-foreground">{work.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {work.stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-cyan-400/10 text-cyan-300 border-cyan-400/20 hover:bg-cyan-400/20 transition-colors duration-200"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
