import Features from "@/components/Features";
import { Button } from "@/components/ui/button";
import { MULTI_CHAIN_BRIDGE_METRICS } from "@/lib/constants";

function MultiChainBridge() {
	return (
		<>
			<Features />

			<div className="bg-[#040404] pt-30 pb-30">
				<div className="mx-auto w-full max-w-300 space-y-14 px-5">
					<div className="mx-auto max-w-300 space-y-8 text-center text-[#E5E5EA]">
						<p className="bg-[#081D2D] rounded-[64px] py-3 px-6 flex items-center gap-4 w-fit mx-auto text-[#4DA1FF] uppercase font-bold text-base">
							LIQUIDITY
						</p>
						<h2 className="text-[32px] font-extrabold md:text-[44px] bg-linear-to-b from-[#4DFFDF] to-[#4DA1FF] bg-clip-text text-white font-syne">
							Move Assets Across Chains
						</h2>
						<p className="mx-auto max-w-210.5 font-light md:text-[20px] ">
							Transfer stablecoins and custom assets between blockchains with
							deep liquidity pools. Validators verify each transaction and relay
							state across networks.
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
							<p className="text-[#4DA1FF] text-[20px] font-bold font-syne">
								Supported Chains
							</p>

							<p className="text-[#E5E5EA]">
								Ethereum, Avalanche, Stellar, Polygon, BNB, Arbitrium, Base
							</p>
						</div>

						<div className="rounded-xl p-8 bg-[#04131F] space-y-6">
							<p className="text-[#4DA1FF] font-syne text-[20px] font-bold">
								Earning
							</p>

							<p className="text-[#E5E5EA]">
								Liquidity providers capture fees from every cross-chain transfer
							</p>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-1 md:grid-cols-4 pt-10 [@media(max-width:379px)]:grid-cols-1">
						{MULTI_CHAIN_BRIDGE_METRICS.map((metric, i) => (
							<div
								key={i}
								className={`flex flex-col justify-center rounded-xl text-[#000B09] bg-[#4DA1FF] px-5 py-10 [@media(max-width:379px)]:items-center`}
							>
								<div className="text-[15px] lg:text-[24px] font-medium text-center">
									{metric.title}
								</div>
								<div className="font-bold font-syne text-[64px] text-center">
									{metric.count}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default MultiChainBridge;
