import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"

export default function CartButton() {
	return (
		<Button
			// className="flex gap-1 self-center px-2 w-fit"
			aria-label="View cart"
			variant={"ghost"}
			size={"icon"}
			// asChild
		>
			<ShoppingCart />
		</Button>
	)
}
