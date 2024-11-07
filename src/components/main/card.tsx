import { useAppContext } from "../../context/AppContext"
import { GeneralData } from "../../db/data"
import { clsx } from "clsx"
import { CardIcons } from "./card-icons"
import { Tags } from "../../components/main/tags"
import { useState } from "react"

interface CardProps {
  content: GeneralData
}

export function Card({ content }: CardProps) {
  const { id } = useAppContext()

  const [open, setOpen] = useState(false)

  function hanldeCard() {
    setOpen(!open)
    console.log(open)
  }

  return (
    <div
      className={clsx(
        "w-full min-h-52 rounded-xl flex flex-col justify-between gap-2 truncate cursor-pointer",
        !open && "max-h-52",
        id === "cursos" && "bg-coursePurple",
        id === "enem" && "bg-enemBlue",
        id === "bem-estar" && "bg-wellBeingGreen",
        id === "noticias" && "bg-newsRed text-black",
        id === "vocacao" && "bg-vocationalYellow text-black",
        id === "produtividade" && "bg-productivityPink"
      )}
    >
      <div
        onClick={() => hanldeCard()}
        className={clsx(
          "p-4 flex flex-col gap-4 w-full min-h-32",
          !open && "max-h-40"
        )}
      >
        <div className="flex flex-col items-start gap-2 w-full h-full">
          <div
            className={clsx(
              "flex gap-2 justify-start whitespace-pre-line",
              open ? "items-start" : "items-center"
            )}
          >
            <div className="bg-darkGray rounded-lg p-2">
              <CardIcons id={id} />
            </div>
            <h3
              className={clsx(
                "font-bold text-md lg:text-lg",
                open ? "line-clamp-3" : "line-clamp-1"
              )}
            >
              {content.title}
            </h3>
          </div>
          <div className="w-full whitespace-pre-line">
            {content.description && (
              <p
                className={clsx(
                  "font-semibold",
                  open ? "line-clamp-4" : "line-clamp-2",
                  id === "noticias" || id === "vocacao"
                    ? "text-black"
                    : "text-zinc-300"
                )}
              >
                {content.description}
              </p>
            )}
          </div>
        </div>
        {/* tags  */}
        <Tags content={content} />
      </div>

      <a
        href={content.link}
        target="_blank"
        className="bg-zinc-300 w-full font-bold text-black text-lg text-center py-2 hover:bg-zinc-50 transition-all"
      >
        Acessar agora
      </a>
    </div>
  )
}
