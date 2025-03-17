import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet"
import CartButton from "./cart-button"

export default function CartAside() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<CartButton />
			</SheetTrigger>
			<SheetContent className="w-[90%] sm:max-w-xl" side={"right"}>
				<SheetDescription className="sr-only">
					Carrito de compras
				</SheetDescription>
				<SheetTitle className="pb-4">Carrito</SheetTitle>

				{/* <Suspense> */}
				{/* <Await resolve={cart}>{(cart) => <CartMain cart={cart} />}</Await> */}
				{/* </Suspense> */}
			</SheetContent>
		</Sheet>
	)
}
