import {
	AUTOMATION_USE_CASES,
	DAPP_USE_CASES,
	DEFI_USE_CASES,
} from "@/lib/constants";

function UseCase() {
	return (
		<div className="bg-[#040404]">
			<div className="mx-auto w-full max-w-300 space-y-8 px-5 py-10 md:py-26">
				<div className="mx-auto max-w-300 space-y-8 text-center text-[#E5E5EA]">
					<div className="bg-[#04101A] rounded-[64px] py-3 px-6 flex items-center gap-4 w-fit mx-auto">
						<p className="text-base font-extrabold bg-linear-to-b from-[#4DFFDF] to-[#4DA1FF] bg-clip-text text-transparent font-syne">
							Real-World Applications
						</p>
					</div>
					<h2 className="text-[32px] font-extrabold md:text-[44px] bg-linear-to-b from-[#4DFFDF] to-[#4DA1FF] bg-clip-text text-white font-syne">
						Built for Every Use Case
					</h2>

					<p className="mx-auto max-w-210.5 font-light md:text-[20px]">
						From DeFi protocols to enterprise solutions, LiquidsFi provides the
						infrastructure for the next generation of blockchain applications.
					</p>
				</div>

				<div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
					<div className="rounded-xl p-8 bg-[#04131F] space-y-6">
						<p className="text-[#FFFFFF] text-[20px] font-bold">
							DeFi Protocols
						</p>

						<ul>
							{DEFI_USE_CASES.map((useCase, index) => (
								<li
									key={index}
									className="text-[#E5E5EA] font-light text-[18px] mb-5 flex items-center gap-3"
								>
									<div className="h-2 w-2 rounded-full bg-[#BC94FE]" />
									{useCase}
								</li>
							))}
						</ul>
					</div>

					<div className="rounded-xl p-8 bg-[#04131F] space-y-6">
						<p className="text-[#FFFFFF] text-[20px] font-bold">
							Automation & Triggers
						</p>

						<ul>
							{AUTOMATION_USE_CASES.map((useCase, index) => (
								<li
									key={index}
									className="text-[#E5E5EA] font-light text-[18px] mb-5 flex items-center gap-3"
								>
									<div className="h-2 w-2 rounded-full bg-[#4DA1FF]" />
									{useCase}
								</li>
							))}
						</ul>
					</div>

					<div className="rounded-xl p-8 bg-[#04131F] space-y-6">
						<p className="text-[#FFFFFF] text-[20px] font-bold">
							dApp Builders
						</p>

						<ul>
							{DAPP_USE_CASES.map((useCase, index) => (
								<li
									key={index}
									className="text-[#E5E5EA] font-light text-[18px] mb-5 flex items-center gap-3"
								>
									<div className="h-2 w-2 rounded-full bg-[#C14494]" />

									{useCase}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UseCase;
