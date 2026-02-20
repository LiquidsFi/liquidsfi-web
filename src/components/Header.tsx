import { LANDING_NAV_LINKS } from "@/lib/constants";
import { Fragment, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "./Logo";
import { Button } from "./ui/button";
import MobileNavigation from "./MobileNavigation";
import MobileLinks from "./MobileLinks";

function Header() {
	const [sheetIsOpen, setSheetIsOpen] = useState(false);
	const location = useLocation();
	const pathname = location.pathname.split("/");

	return (
		<header className="mx-auto flex w-full max-w-300 items-center justify-between px-6 py-4 lg:py-6 bg-[#040404]">
			<Logo />

			{/* DESKTOP NAV */}
			<NavigationMenu className="hidden lg:block relative">
				<NavigationMenuList className="flex gap-5 lg:gap-10">
					{LANDING_NAV_LINKS.map((link) => {
						return (
							<NavigationMenuItem key={link.title}>
								{link.title === "Use Cases" ? (
									<NavigationMenuLink
										asChild
										className={`bg-transparent text-base focus:bg-transparent focus:text-[#4DFFDF] hover:bg-transparent  hover:text-[#4DFFDF] ${location.hash === link.href?.slice(1) ? "font-extrabold text-[#4DFFDF]" : "text-[#E5E5EA]"}`}
									>
										<NavLink to={link.href ?? "#"}>{link.title}</NavLink>
									</NavigationMenuLink>
								) : (
									<>
										<NavigationMenuTrigger
											className={`${pathname[1] === "features" ? "font-extrabold text-[#4DFFDF]" : "text-[#E5E5EA]"} bg-transparent text-base hover:bg-transparent  hover:text-[#4DFFDF] focus:hover:text-[#4DFFDF] focus:bg-transparent focus:text-[#E5E5EA] data-[state=open]:focus:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:hover:text-[#4DFFDF] data-[state=open]:focus:text-[#4DFFDF]`}
										>
											{link.title}
										</NavigationMenuTrigger>
										<NavigationMenuContent className="bg-[#081D2D] text-[#E5E5EA] p-0 focus:border-none border-none data-[state=open]:focus:border-none data-[state=open]:border-none">
											<ul className="grid grid-cols-2 w-195">
												{link.children?.map((child, i) => (
													<li
														key={i}
														className={`border-[#040404] border-r border-b nth-[2n]:border-r-0 ${link.children.length / 2 === 0 && "nth-last-[-n+2]:border-b-0"}`}
													>
														<NavigationMenuLink
															asChild
															className="bg-[#081D2D] hover:bg-[#081D2D]/50 hover:text-[#E5E5EA]"
														>
															<Link
																to={child.href}
																className="p-5 flex gap-3 flex-row items-center"
															>
																<div className="bg-[#040404] rounded-xl p-2 shrink-0">
																	<img
																		src={child.icon}
																		className="h-6 w-6"
																		alt=""
																	/>
																</div>
																<div className="space-y-2">
																	<p className="font-bold text-[#E5E5EA] text-[20px] ">
																		{child.title}
																	</p>
																	<p className="text-[#B2B9C7] text-sm font-light">
																		{child.description}
																	</p>
																</div>
															</Link>
														</NavigationMenuLink>
													</li>
												))}
											</ul>
										</NavigationMenuContent>
									</>
								)}
							</NavigationMenuItem>
						);
					})}
				</NavigationMenuList>
			</NavigationMenu>

			<div className="hidden lg:flex gap-4">
				<Button
					className="cursor-pointer bg-[#E2E2E2] hover:bg-[#E2E2E2]/90 text-base"
					onClick={() => {
						window.open(
							"https://explorer.liquids.fi/",
							"_blank",
							"noopener,noreferrer",
						);
					}}
					variant="secondary"
					size="lg"
				>
					LIP Explorer
				</Button>

				<Button
					className="cursor-pointer bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 text-base"
					onClick={() => {
						window.open(
							"https://bridge.liquids.fi/",
							"_blank",
							"noopener,noreferrer",
						);
					}}
					variant="secondary"
					size="lg"
				>
					Launch Bridge
				</Button>
			</div>

			{/* MOBILE NAV */}
			<MobileNavigation
				side="right"
				sheetIsOpen={sheetIsOpen}
				setSheetIsOpen={setSheetIsOpen}
			>
				<div className="flex min-h-1/2 flex-col gap-6 px-4 pt-6">
					{LANDING_NAV_LINKS.map((link, i) => (
						<Fragment key={i}>
							{link.title === "Use Cases" ? (
								<Link
									onClick={() => setSheetIsOpen(false)}
									className={`bg-transparent text-base focus:bg-transparent focus:text-[#4DFFDF] hover:bg-transparent hover:text-[#4DFFDF] ${location.hash === link.href?.slice(1) ? "font-extrabold text-[#4DFFDF]" : "text-[#E5E5EA]"}`}
									to={link.href ?? "#"}
								>
									{link.title}
								</Link>
							) : (
								<MobileLinks link={link} setSheetIsOpen={setSheetIsOpen} />
							)}
						</Fragment>
					))}

					<div className="flex flex-col gap-4">
						<Button
							className="cursor-pointer bg-[#E2E2E2] hover:bg-[#E2E2E2]/90 text-base"
							onClick={() => {
								window.open(
									"https://explorer.liquids.fi/",
									"_blank",
									"noopener,noreferrer",
								);
								setSheetIsOpen(false);
							}}
							variant="secondary"
							size="lg"
						>
							LIP Explorer
						</Button>

						<Button
							className="cursor-pointer bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 text-base"
							onClick={() => {
								window.open(
									"https://bridge.liquids.fi/",
									"_blank",
									"noopener,noreferrer",
								);
								setSheetIsOpen(false);
							}}
							variant="secondary"
							size="lg"
						>
							Launch Bridge
						</Button>
					</div>
				</div>
			</MobileNavigation>
		</header>
	);
}

export default Header;
