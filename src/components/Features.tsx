import { FEATURES } from "@/lib/constants";

function Features() {
	return (
		<div className="bg-[#040404] pt-30">
			<div className="mx-auto w-full max-w-300 space-y-14 px-5">
				<div className="mx-auto max-w-300 space-y-8 text-center text-[#050215]">
					<h2 className="text-[32px] font-extrabold md:text-[44px] bg-linear-to-b from-[#4DFFDF] to-[#4DA1FF] bg-clip-text text-white font-syne">
						Features
					</h2>
				</div>

				<div className="max-w-250 flex gap-6 items-center justify-center flex-wrap mx-auto">
					{FEATURES.map((chain, i) => (
						<div
							key={i}
							className="bg-[#081D2D] rounded-[64px] py-3 px-6 flex items-center gap-4"
						>
							<span className="text-[#E5E5EA] text-[20px]">{chain.title}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Features;
