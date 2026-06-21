import type { FC } from "react";
import { motion } from "motion/react";
import { LuScissors } from "react-icons/lu";
import sarah_photo from "../../assets/home_img/process_4.jpg";

interface AboutProps {
	onWipClick: () => void;
}

export const AboutSection: FC<AboutProps> = ({ onWipClick }) => {
	return (
		<section className="relative flex flex-col items-center overflow-hidden bg-tertiary-100 py-16 md:py-24">
			<div className="flex w-full flex-col items-center justify-center gap-12 px-4 md:flex-row md:gap-16 md:px-10 lg:px-20">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="order-1 flex w-full flex-col gap-6 md:order-0 md:w-[55%]">
					<div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
						<span className="text-xs font-bold tracking-[0.3em] text-secondary-600 uppercase">Minha História</span>
						<h2 className="text-4xl font-bold text-dark-400 md:text-5xl">Quem Sou</h2>
						<span aria-hidden="true" className="h-1 w-16 rounded-full bg-accent-400" />
					</div>

					<p className="leading-relaxed text-dark-300 md:first-letter:float-left md:first-letter:mr-2 md:first-letter:text-6xl md:first-letter:leading-[0.8] md:first-letter:font-bold md:first-letter:text-secondary-600">
						Olá! Meu nome é Sarah e minha história começa com minhas avós, que já trabalhavam com fiação e costura, com minha mãe, que também seguiu
						esse caminho da arte de costurar e com meu pai, que sempre me apoiou em cada escolha. Foi nesse ambiente de afeto, trabalho e presença que
						aprendi, desde cedo, o valor da dedicação, do cuidado e da construção feita com as próprias mãos. Com o tempo, escolhi transformar esse
						legado em caminho profissional. Busquei formação, estudei e segui construindo minha trajetória com constância e responsabilidade. Hoje,
						sou feita da união entre aquilo que recebi e aquilo que escolhi ser — alguém que caminha com firmeza, sensibilidade e respeito pela
						própria história.
					</p>

					<button onClick={onWipClick} className="animated-button_about self-center md:self-start">
						<svg viewBox="0 0 24 24" className="arr-2_about" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
						</svg>
						<span className="text_about ">Continue lendo</span>
						<span className="circle_about"></span>
						<svg viewBox="0 0 24 24" className="arr-1_about " xmlns="http://www.w3.org/2000/svg">
							<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
						</svg>
					</button>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
					className="order-0 w-full px-6 md:order-1 md:w-[38%] md:px-0">
					<div className="relative mx-auto w-full max-w-xs">
						<span aria-hidden="true" className="absolute -top-6 -left-6 h-full w-full rounded-sm bg-secondary-300 md:-top-8 md:-left-8" />

						<div className="relative z-10 -rotate-2 rounded-sm bg-light-100 p-3 shadow-xl transition-transform duration-500 hover:rotate-0 md:rotate-3">
							<img src={sarah_photo} alt="Foto da Estilista Sarah Hozanna" className="h-85 w-full rounded-sm object-cover md:h-125" />
							<p className="delicate pt-3 text-center text-xl text-dark-300">Sarah Hozanna</p>
						</div>

						<div className="absolute -right-6 -bottom-6 z-20 hidden h-28 w-28 items-center justify-center md:flex">
							<svg viewBox="0 0 100 100" className="animate-spin-slow absolute h-full w-full">
								<defs>
									<path id="about-badge-path" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
								</defs>
								<text className="fill-dark-500 text-[9px] font-bold tracking-[0.25em] uppercase">
									<textPath href="#about-badge-path"> Três Gerações de Costura • 🧵 • </textPath>
								</text>
							</svg>
							<span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-400 text-dark-600 shadow-md">
								<LuScissors size={22} />
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSection;
