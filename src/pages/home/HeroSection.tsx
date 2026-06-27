import type { FC } from "react";

interface HeroProps {
	onWipClick: () => void;
}

export const HeroSection:FC<HeroProps> = ( { onWipClick } ) => {
	return (
		<section className="hero w-full h-screen min-h-159 max-h-263 md:h-screen">
			<div className="px-4 pt-35 md:pl-10 lg:pl-20 lg:pt-[12%] flex flex-col gap-2">
				<h1 className="glow text-6xl mt-35 sm:text-7xl font-bold text-white text-shadow-[0_0_5px_#000000] md:text-shadow-none">
					Para momentos
				</h1>
				<h2 className="delicate text-5xl font-extrabold text-white text-shadow-[0_0_5px_#000000] md:text-shadow-none">
					que merecem ser lembrados
				</h2>
				<p className="text-base w-2/3 lg:w-2/5 md:text-xl pb-8 sm:pb-5 text-white text-shadow-[0_0_6px_#000000]">
					Vestidos e peças sob medida criados com tempo, cuidado e atenção aos detalhes.
				</p>
				<button onClick={onWipClick} className="animated-button self-center md:self-auto mt-5">
					<svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
					</svg>
					<span className="text md:text-shadow-[0_0_6px_#000000]">REALIZE SEU SONHO</span>
					<span className="circle"></span>
					<svg viewBox="0 0 24 24" className="arr-1 md:drop-shadow-[0_0_3px_#000000]" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
					</svg>
				</button>
			</div>
		</section>
	);
};
