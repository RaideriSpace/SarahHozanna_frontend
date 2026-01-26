import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { motion } from "motion/react";
import type { FC } from "react";
import { ModalLinks } from "./ModalLinks";

import logo from "../../assets/logo.svg";
interface WorkInProgressProps {
  onClose: () => void;
}

const WorkInProgressModal: FC<WorkInProgressProps> = ({ onClose }) => {
  return (
		<motion.div
			className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-40"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClose}>
			<motion.div
				className="w-9/10 sm:w-200 h-fit sm:h-105 back-bg rounded-4xl z-50 overflow-hidden drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]"
				initial={{ opacity: 0, y: "-100vh" }}
				animate={{ opacity: 1, y: "0" }}
				transition={{ duration: 0.4, y: { type: "spring", visualDuration: 0.3, bounce: 0.4 } }}
				exit={{ opacity: 0, y: "-100vh" }}
				onClick={(e) => e.stopPropagation()}>
				<div className="front-bg flex py-5 sm:px-5 flex-col gap-3 items-center justify-between sm:items-start sm:w-3/5 sm:gap-5">
					<img src={logo} alt="Logo Sarah Hozanna" className="w-50" />
					<div className="flex flex-col w-6/10 gap-2 items-center text-center sm:items-start">
						<p className="self-center"> Estamos modelando esta página... </p>
						<h2 className="delicate font-bold text-4xl"> Em breve, mais novidades aqui para você!</h2>
						<div className="self-center flex flex-col items-center">
							<p className="text-pink-500 font-bold">Por enquanto, fale comigo</p>
							<div>
								<ModalLinks text="(11) 9 7331-4888" href="https://wa.me/5511973314888" Icon={PiWhatsappLogoDuotone} />
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default WorkInProgressModal;
