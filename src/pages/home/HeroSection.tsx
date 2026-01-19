function HeroImg() {
	return (
		<section className="hero w-full h-screen md:h-screen flex">
			<div className="self-end pl-4 pb-20 md:pl-10 lg:pl-30 md:pb-45 lg:pb-70 flex flex-col gap-2">
				<h1 className="glow text-7xl font-bold text-white text-shadow-[0_0_5px_#000000] md:text-shadow-none">PEÇAS ÚNICAS</h1>
				<h2 className="delicate text-5xl font-bold text-white pb-4 text-shadow-[0_0_5px_#000000] md:text-shadow-none">Para Momentos Únicos</h2>
				<p className="text-base w-2/3 lg:w-2/5 md:text-xl pb-5 text-black md:text-white text-shadow-[0_0_3px_#ffffff] md:text-shadow-[0_0_6px_#000000]">
					Roupas criadas à mão, onde cada ponto carrega <strong> amor </strong> e cada detalhe conta a <strong> sua história</strong>. Sinta o
					cuidado de uma peça feita <strong> exclusivamente </strong> para você.
				</p>
				<button className="animated-button self-center md:self-auto">
					<svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
					</svg>
					<span className="text">REALIZE SEU SONHO</span>
					<span className="circle"></span>
					<svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
					</svg>
				</button>
			</div>
		</section>
	);
}

export default HeroImg;
