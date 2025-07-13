import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

const pages = [
  { name: "Inicio", href: "/" },
  { name: "Todos", href: "/catalogue" },
  { name: "Nosotros", href: "/about" },
]

export default function MenuAside() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuButton />
      </SheetTrigger>
      <SheetContent className="w-[90%] sm:max-w-xl" side={"left"}>
        <SheetDescription className="sr-only">Menu movil</SheetDescription>
        <SheetTitle className="self-center mt-4 text-4xl transition-all duration-150 -tracking-[0.07em]">
          Mochi
        </SheetTitle>

        <nav className="flex flex-col gap-4 p-4" role="navigation">
          {pages.map((page, i) => (
            <Link key={i} href={page.href}>
              <SheetClose>{page.name}</SheetClose>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

function MenuButton() {
  return (
    <Button aria-label="View cart" variant={"ghost"} size={"icon"}>
      <Menu />
    </Button>
  )
}
