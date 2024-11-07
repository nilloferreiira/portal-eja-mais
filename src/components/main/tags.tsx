import { GeneralData } from "../../db/data"
import { Tag } from "./tag"

export function Tags({ content }: { content: GeneralData }) {
  return (
    <div className="flex gap-4 items-center justify-start">
      {content.duration && <Tag content={content.duration} />}
      {content.category && <Tag content={content.category} />}
      {content.source && <Tag content={content.source} />}
    </div>
  )
}
