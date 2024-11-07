import { Header } from "./components/header/header"
import { Main } from "./components/main/main"

export function App() {
  return (
    <div className="flex flex-col px-6 py-16 lg:py-20 gap-6">
      <Header />
      <Main />
    </div>
  )
}
