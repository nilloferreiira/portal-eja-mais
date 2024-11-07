import { GeneralData } from "../../db/data"
import { Card } from "./card"

interface GridCardProps {
  contents: GeneralData[]
  search: string
}

export function GridCards({ contents, search }: GridCardProps) {
  // grid recebe o search como props e entao filtra e repassa

  const filteredContents =
    search !== ""
      ? contents?.filter((content) =>
          content.title!.toLowerCase().includes(search.toLocaleLowerCase())
        )
      : contents

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 items-start justify-center mt-5">
      {filteredContents.length === 0 ? (
        <p className="text-zinc-400 font-extralight">
          Nenhum conteúdo encontrado.{" "}
          <span className="text-zinc-300 font-light">
            Lembre de usar acentos na pesquisa!
          </span>
        </p>
      ) : (
        filteredContents.map((content) => (
          <Card key={content.id} content={content} />
        ))
      )}
    </div>
  )
}
