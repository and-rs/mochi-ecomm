import Link from "next/link";
import { ThemeSwitch } from "../theme-switch";

export function Header() {
  return (
    <header className="fixed z-50 py-2 px-4 w-full h-20 border-b bg-background/50 backdrop-blur-md">
      <div className="grid grid-cols-3 justify-items-center w-full h-full">
        <HeaderMenu />

        <div className="place-self-start mx-1 h-full sm:hidden">
          {/* <MobileAside /> */}
        </div>

        <Link className="flex justify-center h-full" href="/">
          <h1 className="self-center text-3xl font-medium tracking-tight">
            Mochi
          </h1>
        </Link>

        <HeaderCtas />

        {/* <div className="col-start-3 place-self-end mx-1 h-full sm:hidden"> */}
        {/*   <CartAside /> */}
        {/* </div> */}
      </div>
    </header>
  );
}

export function HeaderMenu() {
  return (
    <nav className="hidden gap-4 self-center sm:flex" role="navigation">
      <Link href="/">Catalogue</Link>
      <Link href="/">Search</Link>
      <Link href="/">Home</Link>
    </nav>
  );
}

function HeaderCtas() {
  return (
    <nav className="hidden gap-4 self-center sm:flex" role="navigation">
      <ThemeSwitch />
      {/* <SearchToggle /> */}
      {/* <CartAside /> */}
    </nav>
  );
}
