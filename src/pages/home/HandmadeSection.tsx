function HandmadeSection() {
	const imageSideClass =
		"w-50 lg:w-full xl:w-50 aspect-[2/3] rounded-2xl opacity-15 lg:opacity-45 hover:opacity-100 hover:scale transition-all duration-300";

	return (
		<section className="w-fit flex gap-4 lg:px-20 justify-center overflow-hidden">
			<div className="absolute lg:items-end h-full flex flex-col gap-40 lg:gap-[20vh] xl:gap-20 pt-40 xl:pt-20 -left-15 lg:left-20 lg:w-1/6">
				<div className={`bg-img-1 ${imageSideClass} rotate-6`}></div>
				<div className={`bg-img-3 ${imageSideClass} -rotate-6`}></div>
				<div className={`bg-img-5 ${imageSideClass} rotate-6`}></div>
			</div>

			<div className="lg:w-3/6 px-4">
				<div className="text-center">
					<h2 className="text-4xl font-bold"> A Alma em Cada Ponto </h2>
					<h3 className="pb-6 text-2xl font-medium"> A Magia das Peças Feitas à Mão </h3>
				</div>

				<p>
					Em um mundo dominado pela produção em massa e pelo imediatismo do fast fashion, existe um movimento silencioso, mas profundamente poderoso,
					que resgata a essência do vestir: o <strong> feito à mão </strong>. Quando falamos de uma peça de vestuário artesanal, não estamos nos
					referindo apenas a fios, tecidos ou agulhas. Estamos falando de um processo íntimo, onde cada ponto carrega consigo uma carga imensa de{" "}
					<strong>amor, carinho e cuidado</strong>.
				</p>
				<br />
				<p>
					Diferente das máquinas industriais que replicam padrões em milissegundos, as mãos de um artesão trabalham no ritmo do coração. Existe uma
					intenção genuína por trás de cada escolha, desde a seleção da matéria-prima até o arremate final. Esse cuidado se traduz em uma qualidade
					sensorial que a tecnologia ainda não consegue replicar: o toque macio, o caimento ajustado com precisão e a resistência de algo que foi
					construído para durar gerações.
				</p>

				<h4 className="py-8 text-2xl font-semibold text-center"> Por que o Artesanal é Tão Importante? </h4>
				<p>
					A importância das peças feitas à mão vai muito além da estética. Elas representam uma resistência cultural e emocional através de pilares
					fundamentais:
				</p>
				<ul className="flex flex-col gap-6 pt-3 text-center">
					<li>
						<strong>Singularidade:</strong> <br /> Nenhuma peça manual é idêntica à outra. Mesmo seguindo o mesmo molde, a pressão do ponto ou a
						sutileza do corte tornam aquela peça única no mundo, assim como quem a veste.
					</li>
					<li>
						<strong>Sustentabilidade e Ética:</strong> <br /> O artesanato respeita o tempo da natureza e do ser humano. Promove um consumo
						consciente, valorizando o comércio local e reduzindo o desperdício têxtil.
					</li>
					<li>
						<strong>Conexão Humana:</strong> <br /> Ao vestir algo feito à mão, você carrega a história de quem o produziu. É um diálogo invisível
						entre o criador e o usuário, uma celebração do talento e da paciência.
					</li>
					<li>
						<strong>Autoestima e Conforto:</strong> <br /> Há um carinho especial em saber que alguém dedicou horas de sua vida para criar algo belo.
						Esse afeto é sentido no corpo, proporcionando um conforto que transpassa o tecido.
					</li>
				</ul>
				<h4 className="py-8 text-2xl font-semibold text-center"> O Luxo da Atenção aos Detalhes </h4>
				<p>
					O verdadeiro luxo contemporâneo não está na logomarca, mas na atenção. O cuidado de quem molda uma gola, borda um detalhe ou tece uma trama
					de tricô reflete um compromisso com a excelência que as grandes fábricas ignoram. É a celebração do erro humano que se torna detalhe
					charmoso, da textura que conta uma história e da peça que se torna uma extensão da identidade de quem a possui. <br /> <br /> Valorizar o
					vestuário artesanal é, em última análise, valorizar a humanidade. É escolher colocar no mundo — e sobre a própria pele — algo que nasceu do
					desejo de criar beleza com as próprias mãos, garantindo que a tradição do cuidado nunca saia de moda.
				</p>
			</div>

			<div className="absolute lg:items-star h-full flex flex-col gap-40 lg:gap-[20vh]  xl:gap-20 pt-100 xl:pt-20 -right-15 lg:right-20 lg:w-1/6">
				<div className={`bg-img-2 ${imageSideClass} -rotate-6`}></div>
				<div className={`bg-img-4 ${imageSideClass} rotate-6`}></div>
				<div className={`bg-img-4 ${imageSideClass} -rotate-6`}></div>
			</div>
		</section>
	);
}

export default HandmadeSection;
