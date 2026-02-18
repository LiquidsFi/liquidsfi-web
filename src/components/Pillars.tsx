import { PILLARS } from "@/lib/constants";
import { Link } from "react-router";

function Pillars() {
	return (
		<div className="bg-[#040404]">
			<div className="mx-auto w-full max-w-300 space-y-8 px-5 py-10 md:py-26">
				<div className="mx-auto max-w-300 space-y-8 text-center text-[#E5E5EA]">
					<h2 className="text-[32px] font-extrabold md:text-[44px] bg-linear-to-b from-[#4DFFDF] to-[#4DA1FF] bg-clip-text text-white font-syne">
						LiquidsFi Pillars
					</h2>

					<p className="mx-auto max-w-210.5 font-light md:text-[20px]">
						Send arbitrary messages across chains. Smart contracts on one
						blockchain react instantly to events on another, with no
						intermediaries.
					</p>
				</div>

				<div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
					{PILLARS.map((pillar, index) => (
						<div key={index} className="rounded-xl p-8 bg-[#04131F] space-y-6">
							<div className="flex items-center gap-4">
								<div
									className={`rounded-xl w-fit  p-3 ${
										pillar.title === "Cross-Chain Interoperability Layer" ||
										pillar.title === "Computational Function Abstraction"
											? "bg-[#A96EFF]"
											: pillar.title === "Built-In Cross-Chain Bridge" ||
												  pillar.title === "Asset Price Feed"
												? "bg-[#2E8FFC]"
												: pillar.title ===
															"Smart Contract Automation & Triggers" ||
													  pillar.title === "Off-Chain Data On-Ramp APIs"
													? "bg-[#00A606]"
													: ""
									}`}
								>
									<img src={pillar.icon} alt="" />

									{/* {pillar.icon && (
								<pillar.icon
									className={`inline-block text-[30px] ${
										service.title === "Monetization Setup (USA & UK)" ||
										service.title === "Collaboration Opportunities" ||
										service.title === "Sponsorship for Content Projects"
											? "text-[#FE7A04]"
											: service.title ===
														"Content Production & Studio Access" ||
												  service.title === "Training & Mentorship" ||
												  service.title === "Global Visibility and Recognition"
												? "text-[#2A1552]"
												: service.title === "Resources & Equipment Support" ||
													  service.title === "Promotion & Growth" ||
													  service.title === "Analytics & Compliance Support"
													? "text-[#FFDF00]"
													: ""
									}`}
								/>
							)} */}
								</div>

								<p className="text-[#FFFFFF] text-[20px] font-bold">
									{pillar.title}
								</p>
							</div>

							<div className="gap-4 flex flex-col justify-between">
								<p className="font-light text-[#E5E5EA] text-[18px]">
									{pillar.description}
								</p>

								<Link
									to={pillar.href}
									className="bg-[#061B2B] block  w-fit rounded-2xl font-semibold text-[#4DFFDF] p-4"
								>
									Learn More
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Pillars;
