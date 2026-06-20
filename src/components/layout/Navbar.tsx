import { useCallback, useEffect, useState, type FC } from "react";
import { LuMenu } from "react-icons/lu";
import { AiFillCloseCircle } from "react-icons/ai";
import { AnimatePresence, motion } from "motion/react";

import logo from "../../assets/logo.svg";
import useMenuHamburguer from "../../hooks/useMenuHamburguer";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
	onContactClick: () => void;
	onWipClick: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onContactClick, onWipClick }) => {
	const [open, setOpen] = useState(false);
	const menuHamburguer = useMenuHamburguer();
	const navigate = useNavigate();

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

	const goTo = useCallback(
		(path: string) => {
			navigate(path);
			closeMenu();
		},
		[navigate, closeMenu],
	);

	return (
		<>
			<header
				className={`w-full max-w-387.5 justify-self-center md:px-10 lg:px-20 md:py-1 2xl:py-3 grid md:grid-cols-12 items-center fixed bg-white z-40 shadow-[0_2px_5px_var(--color-shadow-soft)] transition-all ${open ? "rounded-bl-2xl" : "rounded-b-2xl"}`}>
				{menuHamburguer ?
					<button onClick={toggleMenu} aria-label={open ? "Fechar Menu" : "Abrir Menu"} className={`absolute ${open ? "right-5.5" : "right-6"}`}>
						{open ?
							<AiFillCloseCircle size={35} className="text-primary-300" />
						:	<LuMenu size={30} />}
					</button>
				:	<nav className="md:cols-start-1 md:col-span-5 pt-8">
						<ul className="flex gap-6 md:justify-self-center lg:justify-self-start">
							<li className="menu__link text-gray-600 before:bg-primary-400">
								<button onClick={() => onWipClick()} className="cursor-pointer">
									Sobre Mim
								</button>
							</li>

							<li className="menu__link text-gray-600 before:bg-primary-400 cursor-pointer">
								<button onClick={() => goTo("/pecas")} className="cursor-pointer">
									Peças
								</button>
							</li>
							<li className="menu__link text-gray-600 before:bg-primary-400 cursor-pointer">
								<button onClick={() => onWipClick()} className="cursor-pointer">
									Sob Medida
								</button>
							</li>
							<li className="menu__link text-gray-600 before:bg-primary-400 cursor-pointer">
								<button onClick={() => onWipClick()} className="cursor-pointer">
									Políticas
								</button>
							</li>
						</ul>
					</nav>
				}

				<img
					src={logo}
					onClick={() => goTo("/")}
					alt="Logo"
					className="py-2 md:py-0 col-span-12 md:cols-start-6 md:col-span-2 cursor-pointer justify-self-center w-37 2xl:w-44"
				/>

				<AnimatePresence>
					{menuHamburguer && open && (
						<motion.nav
							className="transition-all bg-white w-1/2 md:w-1/4 absolute right-0 top-24 md:top-20 px-6 py-4 rounded-b-2xl justify-items-end shadow-[-2px_3px_2px_#00000050]"
							initial={{ height: "0px" }}
							animate={{ height: "auto" }}
							exit={{ height: "0px" }}
							transition={{ duration: 0.24 }}>
							<motion.div
								initial={{ opacity: 0, transition: { delay: 0.06, duration: 0.6 } }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, transition: { duration: 0.06 } }}>
								<div>
									<button
										onClick={() => onContactClick()}
										className="transition-all duration-500 contact-mobile w-full text-end bg-primary-500 text-light-200 focus:bg-primary-800 focus:text-primary-100 px-6 py-2 rounded-xl">
										<span>Contato</span>
									</button>
								</div>
								<hr className="w-full py-1 text-primary-300" />
								<ul className="flex flex-col gap-4 text-right w-fit">
									<li className="menu__link text-gray-600 before:bg-primary-200">
										<button onClick={() => onWipClick()}>Sobre Mim</button>
									</li>
									<li className="menu__link text-gray-600 before:bg-primary-200">
										<button onClick={() => goTo("/pecas")}> Peças</button>
									</li>
									<li className="menu__link text-gray-600 before:bg-primary-200">
										<button onClick={() => onWipClick()}> Sob Medida </button>
									</li>
									<li className="menu__link text-gray-600 before:bg-primary-200">
										<button onClick={() => onWipClick()}>Políticas</button>
									</li>
								</ul>
							</motion.div>
						</motion.nav>
					)}
				</AnimatePresence>

				{!menuHamburguer && (
					<div className="md:cols-start-9 md:col-span-5 justify-self-end pt-4">
						<button
							onClick={() => onContactClick()}
							className="contact text-gray-600 hover:text-white before:bg-primary-200 hover:before:bg-primary-400 active:text-gray-200 active:before:bg-primary-800">
							<span>Contato</span>
						</button>
					</div>
				)}
			</header>

			<AnimatePresence>
				{menuHamburguer && open && (
					<motion.button
						onClick={closeMenu}
						className="fixed top-0 left-0 h-screen w-screen bg-black z-10"
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.6 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.24 }}></motion.button>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
