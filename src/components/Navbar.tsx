import { useCallback, useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import useMenuHamburguer from "../hooks/useMenuHamburguer";
import { LuMenu } from "react-icons/lu";
import { AiFillCloseCircle } from "react-icons/ai";

function Navbar() {
	const [open, setOpen] = useState(false);
	const menuHamburguer = useMenuHamburguer();

	const toggleMenu = useCallback(() => setOpen((prevOpen) => !prevOpen), []);
	const closeMenu = useCallback(() => setOpen(false), []);

	useEffect(() => {
		if (menuHamburguer) {
			document.body.classList.toggle("body--no--scroll", open);
		}

		return () => {
			document.body.classList.remove("body--no--scroll");
		};
	}, [open, menuHamburguer]);

	return (
		<>
			<header
				className={`w-full max-w-387.5 justify-self-center md:px-10 lg:px-20 md:py-1 2xl:py-3 grid md:grid-cols-12 items-center fixed bg-white z-40 shadow-[0_2px_5px_#00000050] transition-all ${open ? "rounded-bl-2xl" : "rounded-b-2xl"}`}>
				{menuHamburguer ?
					<button onClick={toggleMenu} aria-label={open ? "Fechar Menu" : "Abrir Menu"} className={`absolute ${open ? "right-5.5" : "right-6"}`}>
						{open ?
							<AiFillCloseCircle size={35} className="text-pink-300" />
						:	<LuMenu size={30} />}
					</button>
				:	<nav className="md:cols-start-1 md:col-span-5 pt-8">
						<ul className="flex gap-6 md:justify-self-center lg:justify-self-start">
							<li className="menu__link text-gray-600 before:bg-pink-200"> Sobre Mim </li>
							<li className="menu__link text-gray-600 before:bg-pink-200"> Peças </li>
							<li className="menu__link text-gray-600 before:bg-pink-200"> Sob Medida </li>
							<li className="menu__link text-gray-600 before:bg-pink-200"> Políticas </li>
						</ul>
					</nav>
				}

				<img src={logo} alt="Logo" className="py-2 md:py-0 col-span-12 md:cols-start-6 md:col-span-2  justify-self-center w-37 2xl:w-44" />

				{menuHamburguer && open && (
					<nav className="bg-white w-1/2 md:w-1/4 absolute right-0 top-24 md:top-20 px-6 py-4 rounded-b-2xl justify-items-end">
						<ul className="flex flex-col gap-4 text-right w-fit">
							<li className="menu__link text-gray-600 before:bg-pink-200"> Sobre Mim </li>
							<li className="menu__link text-gray-600 before:bg-pink-200"> Peças </li>
							<li className="menu__link text-gray-600 before:bg-pink-200"> Sob Medida </li>
							<li className="menu__link text-gray-600 before:bg-pink-200"> Políticas </li>
						</ul>
					</nav>
				)}

				{!menuHamburguer && (
					<div className="md:cols-start-9 md:col-span-5 justify-self-end pt-4">
						<button className="contact text-gray-600 hover:text-white before:bg-pink-200 hover:before:bg-pink-400 active:text-gray-200 active:before:bg-pink-800">
							<span>Contato</span>
						</button>
					</div>
				)}
			</header>

			{menuHamburguer && open && (
				<button onClick={closeMenu} className="fixed top-0 left-0 h-screen w-screen bg-black/35 z-10 transition-opacity"></button>
			)}
		</>
	);
}

export default Navbar;
