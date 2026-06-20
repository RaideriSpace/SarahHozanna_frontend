import { ImFacebook2, ImInstagram } from "react-icons/im";
import { BsMailbox2Flag } from "react-icons/bs";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { motion } from "motion/react";
import type { FC } from "react";
import { ModalLinks } from "./ModalLinks";

import logo from "../../assets/logo.svg";
import qrCode from "../../assets/qrCode_whatsapp.svg";
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
				className="w-9/10 sm:w-178 h-fit sm:h-99 py-5 sm:px-5 bg-white rounded-2xl flex flex-col sm:flex-row z-50 drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]"
				initial={{ opacity: 0, y: "-100vh" }}
				animate={{ opacity: 1, y: "0" }}
				transition={{ duration: 0.4, y: { type: "spring", visualDuration: 0.3, bounce: 0.4 } }}
				exit={{ opacity: 0, y: "-100vh" }}
				onClick={(e) => e.stopPropagation()}>
				<div className="w-full flex flex-col gap-3 items-center sm:items-start sm:w-3/5 sm:gap-5">
					<img src={logo} alt="Logo Sarah Hozanna" className="w-70" />
					<div className="sm:pl-16 flex flex-col items-center sm:items-start">
						<ModalLinks text="/sarahozanna" href="https://www.instagram.com/sarahozanna" Icon={ImInstagram} />
						<ModalLinks text="(11) 9 7331-4888" href="https://wa.me/5511973314888" Icon={PiWhatsappLogoDuotone} />
						<ModalLinks text="/sarahsillysad" href="https://www.facebook.com/sarahsillysad" Icon={ImFacebook2} />
						<ModalLinks text="sarahozanna@gmail.com" href="mailto:sarahozanna@gmail.com" Icon={BsMailbox2Flag} />
					</div>
				</div>

				<div className="w-full pr-4 pl-3 sm:pl-0 sm:pr-0 sm:w-3/5 flex sm:flex-col items-end sm:justify-between">
					<h2 className="self-center w-3/5 sm:w-auto delicate font-bold text-3xl sm:pt-8 sm:text-4xl text-center">
						Vamos juntos realizar o seu sonho
					</h2>
					<img src={qrCode} alt="QRCode para o Whatsapp" className="w-2/5 sm:w-auto" />
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ContactCardModal;
