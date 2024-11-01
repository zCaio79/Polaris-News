import { Logo } from "../style_components/Logo"
import { Searchbar } from "../style_components/inputs/Serchbar"


export function Header() {
  return (
    <header className="flex flex-col w-full justify-between h-13 font-poppins sm:flex-row gap-10 items-center">

      <div className="flex">
        <Logo />
      </div>

      <Searchbar />

    </header>
  )
}