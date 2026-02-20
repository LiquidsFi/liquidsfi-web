import Logo from "./Logo";

function Footer() {
	return (
		<div className="bg-[#04131F] text-[#E5E5EA]">
			<footer className="mx-auto w-full max-w-300 space-y-16 px-5 py-20 md:px-10">
				<div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
					<div className="flex flex-1 flex-col gap-8">
						<div className="w-full max-w-120.7s space-y-4">
							<div className=" w-fit">
								<Logo />
							</div>
							<p className="font-medium text-[#E5E5EA]">
								© {new Date().getFullYear()} Liquids.Fi. All rights reserved
							</p>
						</div>
					</div>

					<div className="grid w-fit grid-cols-1 gap-5 lg:flex-1 lg:grid-cols-3">
						{/* {FOOTER_LINKS.map((link, i) => (
							<Fragment key={i}>
								<Link
									className="font-normal text-[#1C1C1E] hover:underline"
									to={link.href}
								>
									{link.title}
								</Link>
							</Fragment>
						))} */}
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
