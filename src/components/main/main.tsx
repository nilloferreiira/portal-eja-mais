import { Search } from "lucide-react"
import { useAppContext } from "../../context/AppContext"
import { ChangeEvent, useEffect, useState } from "react"
import { GeneralData, sections } from "../../db/data"
import { getContents } from "../../utils/get-contents"
import { GridCards } from "./grid-cards"

export function Main() {
  const { id } = useAppContext()
  const [contents, setContents] = useState<GeneralData[] | null>(null)
  const sectionName = sections.find((section) => section.id == id)
  const [search, setSearch] = useState("")

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  useEffect(() => {
    const data = getContents(id)
    if (data) {
      setContents(data)
    }
  }, [id])

  return (
    <div className="flex flex-col gap-3 w-full text-zinc-300">
      {contents ? (
        <>
          <h2 className="text-2xl lg:text-3xl font-semibold">
            {sectionName?.name}
          </h2>
          {/* search bar  */}
          <div className="bg-shark px-4 py-2 w-full flex gap-2 items-center justify-start rounded-lg">
            <Search />
            <input
              type="text"
              placeholder="search..."
              onChange={handleSearch}
              className="bg-transparent outline-none focus-visible:ring-0"
            />
          </div>

          <GridCards contents={contents} search={search} />
        </>
      ) : (
        <p>Nenhum conteúdo encontrado</p>
      )}
    </div>
  )
}
