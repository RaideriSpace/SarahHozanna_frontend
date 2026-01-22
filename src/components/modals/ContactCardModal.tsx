import { ImFacebook2, ImInstagram } from "react-icons/im";
import { BsMailbox2Flag } from "react-icons/bs";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { motion } from "motion/react";

import logo from "../../assets/logo.svg";
import qrCode from "../../assets/qrCode_whatsapp.svg";
import type { FC } from "react";

interface ContactCardModalProps {
	onClose: () => void;
}

const ContactCardModal: FC<ContactCardModalProps> = ({ onClose }) => {
	const modalVariants = {
		hidden: { opacity: 0, y: "-100vh" },
		visible: {
			opacity: 1,
			y: "0",
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 250,
			},
		},
		exit: {
			opacity: 0,
			y: "-100vh",
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	return (

		<motion.div
    className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-40"
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0 }}
    onClick={onClose}>

			<div className="w-178 h-99 bg-white rounded-2xl flex z-50">
				<div className="w-2/5">
					<img src={logo} alt="Logo Sarah Hozanna" className="w-70 pt-5 pl-5" />
					<div className="pl-16 pt-5 flex flex-col">
						<div className="flex items-center gap-2 transition-all group w-fit px-2 py-2 hover:bg-pink-100 hover:rounded-tr-3xl hover:rounded-bl-3xl">
							<ImInstagram size={30} className="transition-all text-pink-700 group-hover:text-pink-900" />
							<a href="/" className="transition-all font-bold group-hover:text-pink-700">
								<p>/sarahhozanna</p>
							</a>
						</div>
						<div className="flex items-center gap-2">
							<PiWhatsappLogoDuotone size={30} className="transition-all text-pink-700" />
							<a href="/" className="font-bold">
								<p>(11) 9 7331 - 4888</p>
							</a>
						</div>
						<div className="flex items-center gap-2">
							<ImFacebook2 size={30} className="transition-all text-pink-700" />
							<a href="/" className="font-bold">
								<p>/sarahsillysad</p>
							</a>
						</div>
						<div className="flex items-center gap-2">
							<BsMailbox2Flag size={30} className="transition-all text-pink-700" />
							<a href="/" className="font-bold">
								<p> sarahozanna@gmail.com</p>
							</a>
						</div>
					</div>
				</div>
				<div className="w-3/5 flex flex-col items-end">
					<h2 className="pt-14 pr-14 delicate font-bold text-4xl text-center"> Vamos juntos realizar o seu sonho </h2>
					<img src={qrCode} alt="QRCode para o Whatsapp" className="pt-7 pr-5" />
				</div>
			</div>

		</motion.div>

	);
};

export default ContactCardModal;
