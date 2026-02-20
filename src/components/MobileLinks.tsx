import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { RxChevronDown, RxChevronUp } from "react-icons/rx";
import { Link, useLocation } from "react-router";

function MobileLinks({ link, setSheetIsOpen }) {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const pathname = location.pathname.split("/");

	return (
		<Collapsible
			open={isOpen}
			onOpenChange={setIsOpen}
			className="flex flex-col gap-1 text-[#E5E5EA]"
		>
			<CollapsibleTrigger asChild>
				<div
					className={`flex items-center gap-2 text-base cursor-pointer hover:text-[#4DFFDF] ${pathname[1] === "features" ? "font-extrabold text-[#4DFFDF]" : "text-[#E5E5EA]"} `}
				>
					<h4 className="text-base">{link.title}</h4>
					{isOpen ? <RxChevronUp /> : <RxChevronDown />}
				</div>
			</CollapsibleTrigger>

			<CollapsibleContent className="flex flex-col gap-1">
				{link.children?.map((child, i: number) => (
					<div key={i}>
						<Link
							onClick={() => setSheetIsOpen(false)}
							to={child.href}
							className="p-1 flex gap-2 flex-row items-center"
						>
							<div className="bg-[#040404] rounded-xl shrink-0">
								<img src={child.icon} className="h-3 w-3" alt="" />
							</div>
							<div>
								<p className="font-light text-[14px] text-[#E5E5EA] ">
									{child.title}
								</p>
							</div>
						</Link>
					</div>
				))}
			</CollapsibleContent>
		</Collapsible>
	);
}

export default MobileLinks;
