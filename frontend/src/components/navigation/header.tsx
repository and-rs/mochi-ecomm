import Link from "next/link"
import CartAside from "../cart/cart-aside"
import { ThemeSwitch } from "../theme-switch"
import MenuAside from "./menu-aside"

export function Header() {
  return (
    <header className="fixed z-50 py-2 px-4 w-full h-20 border-b bg-background/50 backdrop-blur-md">
      <div className="grid grid-cols-3 justify-items-center w-full h-full">
        <HeaderRight />

        <div className="self-center place-self-start sm:hidden">
          <MenuAside />
        </div>

        <Link className="flex justify-center h-full" href="/">
          <h1 className="self-center text-4xl transition-all duration-150 hover:font-semibold -tracking-[0.07em]">
            Mochi
          </h1>
        </Link>

        <HeaderLeft />

        {/* <div className="col-start-3 place-self-end mx-1 h-full sm:hidden"> */}
        {/*   <CartAside /> */}
        {/* </div> */}
      </div>
    </header>
  )
}

export function HeaderRight() {
  return (
    <nav className="hidden gap-4 self-center sm:flex" role="navigation">
      <Link href="/">Inicio</Link>
      <Link href="/catalogue">Todos</Link>
      <Link href="/about">Nosotros</Link>
    </nav>
  )
}

function HeaderLeft() {
  return (
    <nav className="hidden gap-4 self-center sm:flex" role="navigation">
      <ThemeSwitch />
      <CartAside />
      {/* <SearchToggle /> */}
    </nav>
  )
}
