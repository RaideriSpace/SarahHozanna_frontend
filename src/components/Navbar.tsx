import logo from "../assets/logo.svg";

function Navbar() {
	return (
		<header className="w-full max-w-387.5 justify-self-center md:px-15 grid grid-cols-3 items-center">
			<nav className="cols-start-1 pt-8">
				<ul className="flex gap-4">
					<li> Quem Sou </li>
					<li> Peças </li>
					<li> Sob Medida </li>
					<li> Políticas </li>
				</ul>
			</nav>

			<img src={logo} alt="Logo" className="cols-start-2 justify-self-center w-37" />

			<div className="cols-start-3 justify-self-end pt-8">
				<button> Contato </button>
			</div>
		</header>
	);
}

export default Navbar;
