import { SUPPORTED_CHAINS } from "@/lib/constants";

function SupportedChains() {
	return (
		<div className="bg-[#040404]">
			<div className="mx-auto w-full max-w-300 space-y-8 px-5 py-10 md:py-26">
				<div className="mx-auto max-w-300 space-y-8 text-center text-[#050215]">
					<h2 className="text-[32px] font-extrabold md:text-[44px] bg-linear-to-b from-[#4DFFDF] to-[#4DA1FF] bg-clip-text text-transparent font-syne">
						Supported Chains
					</h2>
				</div>

				<div className="max-w-250 flex gap-6 items-center justify-center flex-wrap mx-auto">
					{SUPPORTED_CHAINS.map((chain, i) => (
						<div
							key={i}
							className="bg-[#04101A] rounded-[64px] py-3 px-6 flex items-center gap-4"
						>
							<img src={chain.icon} alt="" />

							<span className="text-[#E5E5EA] text-[24px]">{chain.title}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SupportedChains;
