import logo from "../assets/logo.svg";

import { ImInstagram, ImFacebook2 } from "react-icons/im";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

function Footer() {
	return (
		<footer>
			<div className="h-70 w-full grid grid-cols-3">
				<div className="col-start-2 self-center justify-self-center">
					<img src={logo} alt="Logo escrito Sarah Hozanna estilizado com um manequim e uma agulha" className="w-80" />
					<div className="flex justify-center gap-4 pt-2">
						<a href="https://www.instagram.com/sarahhozanna" rel="noopener noreferrer" target="_blank">
							<ImInstagram size={30} />
						</a>
						<a href="https://wa.me/5511989157255" rel="noopener noreferrer" target="_blank">
							<PiWhatsappLogoDuotone size={30} />
						</a>
						<a href="https://www.facebook.com/sarahsillysad" rel="noopener noreferrer" target="_blank">
							<ImFacebook2 size={30} />
						</a>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center">
				<hr className="border-pink-200 w-[90%]" />
				<small className="py-4 text-center">
					Copyright SarahHozanna - Desenvolvido por{" "}
					<a href="https://raiderispace.vercel.app/" rel="noopener noreferrer" target="_blank">
						@RaideriSpace.
					</a>
					<br /> @2026. Todos os direitos reservados.
				</small>
			</div>
		</footer>
	);
}

export default Footer;
