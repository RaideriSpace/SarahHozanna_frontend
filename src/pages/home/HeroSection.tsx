function HeroImg() {
	return (
		<section className="hero w-full h-150 flex">
			<div className="self-end pl-40 pb-30 flex flex-col gap-2">
				<h1 className="text-5xl font-bold">
					Peças Únicas <br /> Para Momentos Únicos
				</h1>
				<p className="text-xl"> Feitas sob medida</p>
				<button className="self-start border-amber-300 border text-white rounded-xl px-4 py-3">
					<p className="font-bold text-2xl"> Encomende a Sua </p>
				</button>
			</div>
		</section>
	);
}

export default HeroImg;
