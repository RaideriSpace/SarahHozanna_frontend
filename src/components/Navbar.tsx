import logo from "../assets/logo.svg";

function Navbar() {

	return (
		<header className="w-full max-w-387.5 justify-self-center md:px-20 md:py-1 grid grid-cols-3 items-center fixed bg-white z-40 shadow-[0_2px_5px_#00000050]">
			<nav className="cols-start-1 pt-8">
				<ul className="flex gap-6">
					<li className="menu__link text-gray-600 before:bg-pink-200"> Quem Sou </li>
					<li className="menu__link text-gray-600 before:bg-pink-200"> Peças </li>
					<li className="menu__link text-gray-600 before:bg-pink-200"> Sob Medida </li>
					<li className="menu__link text-gray-600 before:bg-pink-200"> Políticas </li>
				</ul>
			</nav>

			<img src={logo} alt="Logo" className="cols-start-2 justify-self-center w-37" />

			<div className="cols-start-3 justify-self-end pt-4">
				<button className="contact text-gray-600 hover:text-white before:bg-pink-200 hover:before:bg-pink-400 active:text-gray-200 active:before:bg-pink-800">
					<span>Contato</span>
				</button>
			</div>
		</header>
	);
}

export default Navbar;
