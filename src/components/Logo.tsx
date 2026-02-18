import { Link, useNavigate } from "react-router";

function Logo() {
	const navigate = useNavigate();

	return (
		<Link
			to="/"
			className="shrink-0"
			onClick={(e) => {
				e.preventDefault();

				navigate("/");
				window.scrollTo({
					top: 0,
				});
			}}
		>
			<img
				src="/Frame 1000002269.svg"
				className="w-full h-10"
				alt="Logo"
				width="100"
				height="100"
			/>
		</Link>
	);
}

export default Logo;
