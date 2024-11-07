import { sections } from "../../db/data"
import { useAppContext } from "../../context/AppContext"

export function NavBarLinks() {
  const { setId } = useAppContext();

  return (
    <ul
      className="flex flex-col md:flex-row items-center justify-between gap-4 w-full"
      id="navlinks"
    >
      {sections.map((section, i) => (
        <li
          className="text-center"
          key={`${i}-${section.name}`}
          id={section.id}
        >
          {/* trocar pois nao vai ser um href e sim um botao que seta um contexto 
            Troquei:) 
          */}
          <button
            onClick={() => setId(section.id)} 
            className="leading-relaxed font-medium text-md lg:text-base hover:font-semibold transition-all"
          >
            {section.name}
          </button>
        </li>
      ))}
    </ul>
  )
}
