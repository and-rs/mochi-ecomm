import Link from "next/link"
import { ThemeSwitch } from "../theme-switch"

export function Footer() {
	return (
		<header className="py-2 px-4 h-20 border-y bg-background/50 backdrop-blur-md">
			<div className="grid grid-cols-3 justify-items-center w-full h-full">
				{/* <FooterRight /> */}

				{/* <div className="place-self-start mx-1 h-full sm:hidden"> */}
				{/* <MobileAside /> */}
				{/* </div> */}

				<Link className="flex justify-center h-full" href="/">
					<h1 className="self-center text-3xl font-medium tracking-tight">
						Footer
					</h1>
				</Link>
				<Link className="flex justify-center h-full" href="/">
					<h1 className="self-center text-3xl font-medium tracking-tight">
						Footer
					</h1>
				</Link>
				<Link className="flex justify-center h-full" href="/">
					<h1 className="self-center text-3xl font-medium tracking-tight">
						Footer
					</h1>
				</Link>

				{/* <FooterLeft /> */}

				{/* <div className="col-start-3 place-self-end mx-1 h-full sm:hidden"> */}
				{/*   <CartAside /> */}
				{/* </div> */}
			</div>
		</header>
	)
}

export function FooterRight() {
	return (
		<nav className="hidden gap-4 self-center sm:flex" role="navigation">
			<Link href="/">Inicio</Link>
			<Link href="/catalogue">Todos</Link>
			<Link href="/about">Nosotros</Link>
		</nav>
	)
}

function FooterLeft() {
	return (
		<nav className="hidden gap-4 self-center sm:flex" role="navigation">
			<span>part of the footer</span>
			<ThemeSwitch />
		</nav>
	)
}
