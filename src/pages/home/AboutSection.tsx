import type { FC } from "react";
import sarah_photo from "../../assets/home_img/process_4.jpg";

interface AboutProps {
	onWipClick: () => void;
}

export const AboutSection: FC<AboutProps> = ({ onWipClick }) => {
	return (
		<section className="flex flex-col pb-8 items-center bg-pink-100 md:py-8 md:rounded-tr-none">
			<div className="flex flex-col md:flex-row justify-center items-center gap-8">
				<div className="order-1 w-full px-4 flex flex-col gap-16 md:order-0 md:w-[50%] md:px-0">
					<h2 className="text-center text-3xl font-bold"> Quem Sou </h2>
					<p>
						Olá! Meu nome é Sarah e minha história começa com minhas avós, que já trabalhavam com fiação e costura, com minha mãe, que também seguiu
						esse caminho da arte de costurar e com meu pai, que sempre me apoiou em cada escolha. Foi nesse ambiente de afeto, trabalho e presença que
						aprendi, desde cedo, o valor da dedicação, do cuidado e da construção feita com as próprias mãos. Com o tempo, escolhi transformar esse
						legado em caminho profissional. Busquei formação, estudei e segui construindo minha trajetória com constância e responsabilidade. Hoje,
						sou feita da união entre aquilo que recebi e aquilo que escolhi ser — alguém que caminha com firmeza, sensibilidade e respeito pela
						própria história.
					</p>
					<button onClick={onWipClick} className="bg-white px-8 py-2 w-fit self-center rounded-2xl cursor-pointer">
						{" "}
						Minha História{" "}
					</button>
				</div>
				<div className="w-full bg-white rounded-bl-[50%] md:w-[30%] md:bg-transparent">
					<img
						src={sarah_photo}
						alt="Foto da Estilista Sarah Hozanna"
						className="w-full h-85 rounded-tr-[50%] rounded-bl-[50%] object-cover  md:h-125  md:rounded-tl-[30%] md:rounded-br-[30%] md:rounded-tr-none md:rounded-bl-none"
					/>
				</div>
			</div>
		</section>
	);
};
