import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { navBarAnimation } from "../../animaitons/navbar"
import { NavBarLinks } from "./navbar-links"

export function Header() {
  const [showNavbar, setShowNavBar] = useState(false)

  function toggleNavbar() {
    if (showNavbar) {
      navBarAnimation.close().then(() => setShowNavBar(false))
    } else {
      setShowNavBar(true)
    }
  }

  useEffect(() => {
    if (showNavbar) {
      navBarAnimation.open()
    }
  }, [showNavbar])
  return (
    <header className="flex flex-col items-center gap-5 text-white">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-medium text-lg lg:text-xl leading-relaxed w-1/2">
          Portal EJA+
        </h1>

        <nav className="flex items-center md:w-1/2 w-full gap-4">
          {/* desktop  */}
          <div className="hidden md:flex w-full">
            <NavBarLinks />
          </div>

          {/* mobile */}
          <div className="md:hidden w-full flex items-center justify-end">
            <button onClick={() => toggleNavbar()}>
              {showNavbar ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>

      {/* mobile  */}
      {showNavbar && (
        <div id="navbar" className="md:hidden">
          <NavBarLinks />
        </div>
      )}
    </header>
  )
}
