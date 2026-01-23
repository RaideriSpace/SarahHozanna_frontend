import { ImFacebook2, ImInstagram } from "react-icons/im";
import { BsMailbox2Flag } from "react-icons/bs";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { motion } from "motion/react";

import logo from "../../assets/logo.svg";
import qrCode from "../../assets/qrCode_whatsapp.svg";
import type { FC } from "react";
import { ModalLinks } from "./ModalLinks";

interface ContactCardModalProps {
	onClose: () => void;
}

const ContactCardModal: FC<ContactCardModalProps> = ({ onClose }) => {
	return (
		<motion.div
			className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-40"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClose}>
			<motion.div
				className="w-178 h-99 bg-white rounded-2xl flex z-50"
				initial={{ opacity: 0, y: "-100vh" }}
				animate={{ opacity: 1, y: "0" }}
				transition={{ duration: 0.4, y: { type: "spring", visualDuration: 0.3, bounce: 0.4 } }}
				exit={{ opacity: 0, y: "-100vh" }}
				onClick={(e) => e.stopPropagation()}>
				<div className="w-3/5">
					<img src={logo} alt="Logo Sarah Hozanna" className="w-70 pt-5 pl-5" />
					<div className="pl-16 pt-5 flex flex-col">
						<ModalLinks text="/sarahhozanna" href="https://www.instagram.com/sarahhozanna" Icon={ImInstagram} />
						<ModalLinks text="(11) 9 7331-4888" href="https://wa.me/5511973314888" Icon={PiWhatsappLogoDuotone} />
						<ModalLinks text="/sarahsillysad" href="https://www.facebook.com/sarahsillysad" Icon={ImFacebook2} />
						<ModalLinks text="sarahozanna@gmail.com" href="mailto:sarahozanna@gmail.com" Icon={BsMailbox2Flag} />
					</div>
				</div>
				<div className="w-3/5 flex flex-col items-end">
					<h2 className="pt-14 pr-14 delicate font-bold text-4xl text-center"> Vamos juntos realizar o seu sonho </h2>
					<img src={qrCode} alt="QRCode para o Whatsapp" className="pt-7 pr-5" />
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ContactCardModal;
