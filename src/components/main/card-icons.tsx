import {
  BookCopy,
  GraduationCap,
  Heart,
  Lightbulb,
  Newspaper,
  TrendingUp
} from "lucide-react"

export function CardIcons({ id }: { id: string }) {
  switch (id) {
    case "cursos":
      return <BookCopy className="text-white" />
    case "enem":
      return <GraduationCap className="text-white" />
    case "bem-estar":
      return <Heart className="text-white" />
    case "noticias":
      return <Newspaper className="text-white" />
    case "vocacao":
      return <Lightbulb className="text-white" />
    case "produtividade":
      return <TrendingUp className="text-white" />
    default:
      return <BookCopy className="text-white" />
  }
}
