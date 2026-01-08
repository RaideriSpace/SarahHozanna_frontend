function HeroImg() {
	return (
		<section className="hero w-full h-screen flex">
			<div className="self-end pl-20 pb-30 flex flex-col">
				<h1 className="glow text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-amber-800 h-30 content-end">
					PEÇAS ÚNICAS
				</h1>
				<h2 className="delicate text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-amber-800 h-20 content-center">
					Para Momentos Únicos
				</h2>
				<p className="text-xl pb-5">
					Roupas criadas à mão, onde cada ponto carrega <strong> amor </strong> e cada <br />
					detalhe conta a <strong> sua história </strong>. Sinta o cuidado de uma peça <br />
					feita <strong> exclusivamente </strong> para você.
				</p>
				<button className="animated-button">
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
