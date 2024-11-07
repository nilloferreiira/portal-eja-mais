import React, { createContext, useContext, useState } from "react"

interface AppContextType {
  id: string
  setId: React.Dispatch<React.SetStateAction<string>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [id, setId] = useState<string>("enem")

  return (
    <AppContext.Provider value={{ id, setId }}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error(
      "useAppContext necessita ser usado dentro de um AppProvider :)"
    )
  }
  return context
}
