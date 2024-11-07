import { GeneralData, data } from "../db/data"

export function getContents(id: string): GeneralData[] | null {
  switch (id) {
    case "cursos":
      return data.cursos
    case "noticias":
      return data.noticias
    case "enem":
      return data.enem
    case "bem-estar":
      return data.bemEstar
    case "vocacao":
      return data.vocacao
    case "produtividade":
      return data.produtividade
    default:
      return null
  }
}
