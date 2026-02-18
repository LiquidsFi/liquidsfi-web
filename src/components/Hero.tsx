import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "./ui/button";

function Hero() {
	return (
		<div className="bg-[#040404] pt-30">
			<div className="mx-auto w-full max-w-300 space-y-14 px-5">
				<div className="space-y-12">
					<div className="space-y-8 text-center text-[#E5E5EA]">
						<h1 className="text-[36px] font-extrabold md:text-[44px] bg-linear-to-b from-[#4DFFDF] to-[#4DA1FF] bg-clip-text text-transparent font-syne">
							Connect Every Blockchain Through One Protocol
						</h1>
						<p className="mx-auto max-w-210.5 font-light md:text-[20px]">
							LiquidsFi is an interoperability layer that bridges EVM chains and
							Soroban with secure asset transfers, cross-chain data, automation,
							oracles, and off-chain computation—all through a unified
							decentralized protocol.
						</p>
					</div>

					<div className="flex gap-4 justify-center">
						<Button
							className="cursor-pointer bg-[#2DD4BF] hover:bg-[#2DD4BF]/90 text-base text-[#000B09]"
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
							View Cross-Chain Bridge
						</Button>

						<Button
							className="cursor-pointer bg-[#04131F] hover:bg-[#04131F]/80 text-base text-[#4DFFDF]"
							// onClick={() => {
							// 	window.open(
							// 		"https://bridge.liquids.fi/",
							// 		"_blank",
							// 		"noopener,noreferrer",
							// 	);
							// }}
							variant="secondary"
							size="lg"
						>
							Integrate LIP Protocol
							<FaExternalLinkAlt />
						</Button>
					</div>
				</div>

				<img
					className="h-auto w-full"
					src="/image 8 (1).svg"
					alt="Dashboard image"
					height="314"
					width="372"
				/>
			</div>
		</div>
	);
}

export default Hero;
