import Features from "@/components/Features";
import { Button } from "@/components/ui/button";

function OffChainDataIngestion() {
	return (
		<>
			<Features />

			<div className="bg-[#040404] pt-30 pb-30">
				<div className="mx-auto w-full max-w-300 space-y-14 px-5">
					<div className="mx-auto max-w-300 space-y-8 text-center text-[#E5E5EA]">
						<p className="bg-[#081D2D] rounded-[64px] py-3 px-6 flex items-center gap-4 w-fit mx-auto text-[#62C565] uppercase font-bold text-base">
							Ingestion
						</p>
						<h2 className="text-[32px] font-extrabold md:text-[44px] bg-linear-to-b from-[#4DFFDF] to-[#4DA1FF] bg-clip-text text-white font-syne">
							Securely Bring Custom Off-Chain data On-Chain.
						</h2>
						<p className="mx-auto max-w-210.5 font-light md:text-[20px] ">
							Enable contracts to execute automatically without manual calls.
							Supports time-based, event-based, and cross-chain triggers.
						</p>
					</div>

					<div className="flex gap-4 justify-center flex-wrap">
						<Button
							className="cursor-pointer bg-linear-to-b from-[#4DFFDF] to-[#4DA1FF] text-[#000B09]"
							// onClick={() => {
							// 	window.open(
							// 		"https://explorer.liquids.fi/",
							// 		"_blank",
							// 		"noopener,noreferrer",
							// 	);
							// }}
							variant="secondary"
							size="lg"
						>
							Get Started
						</Button>
					</div>

					<div className="mx-auto grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 w-full">
						<div className="rounded-xl p-8 bg-[#04131F] space-y-6">
							<p className="text-[#62C565] text-[20px] font-bold font-syne">
								Time-Based Triggers
							</p>

							<p className="text-[#E5E5EA]">
								Execute every X seconds or ledgers. Perfect for scheduled
								payments and recurring distributions.
							</p>
						</div>

						<div className="rounded-xl p-8 bg-[#04131F] space-y-6">
							<p className="text-[#62C565] font-syne text-[20px] font-bold">
								Cross-Chain Triggers
							</p>

							<p className="text-[#E5E5EA]">
								Action on one chain when an event fires on another. Coordinate
								complex logic across multiple blockchains.
							</p>
						</div>

						<div className="rounded-xl p-8 bg-[#04131F] space-y-6">
							<p className="text-[#62C565] font-syne text-[20px] font-bold">
								Event-Driven Triggers
							</p>

							<p className="text-[#E5E5EA]">
								React to on-chain or cross-chain events instantly. Liquidations,
								arbitrage, and governance execution happen automatically.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OffChainDataIngestion;
