import {
	useEffect,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface MobileNavigationProps {
	side: "right" | "left";
	sheetIsOpen: boolean;
	setSheetIsOpen: Dispatch<SetStateAction<boolean>>;
	children: ReactNode;
}

function MobileNavigation({
	side,
	sheetIsOpen,
	setSheetIsOpen,
	children,
}: MobileNavigationProps) {
	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 1024px)");
		const handler = () => {
			if (mediaQuery.matches) {
				setSheetIsOpen(false);
			}
		};

		handler();
		mediaQuery.addEventListener("change", handler);
		return () => mediaQuery.removeEventListener("change", handler);
	}, [setSheetIsOpen]);

	return (
		<Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
			<SheetTrigger asChild>
				<button className="cursor-pointer rounded-lg bg-[#04131F] p-1 opacity-100 ring-offset-background transition-opacity hover:opacity-70 focus:ring-0 focus:ring-transparent focus:ring-offset-0 focus:outline-none disabled:pointer-events-none lg:hidden">
					<Menu className="size-8 text-[#2DD4BF]" />
					<span className="sr-only">Open mobile navigation</span>
				</button>
			</SheetTrigger>
			<SheetContent
				side={side}
				className="bg-[#040404] rounded-tl-2xl rounded-bl-2xl"
			>
				<SheetHeader className="relative">
					<SheetTitle className="absolute top-5 left-4 text-[32px] font-extrabold">
						{/* <Logo /> */}
					</SheetTitle>
					<SheetDescription className="sr-only">
						Mobile navigation
					</SheetDescription>
				</SheetHeader>
				{children}
			</SheetContent>
		</Sheet>
	);
}

export default MobileNavigation;
