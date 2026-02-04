import { useLayoutEffect, useRef, useState } from "react";

export const HandmadeSection = () => {
	const [textSize, setTextSize] = useState<number>(0);
	const textRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!textRef.current) return;

		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				setTextSize(entry.contentRect.height);
			}
		});

		resizeObserver.observe(textRef.current);

		return () => resizeObserver.disconnect();
	}, []);

	const imageSideClass =
		"w-[20vh] aspect-[2/3] rounded-2xl opacity-15 hover:opacity-100 hover:scale transition-all duration-300 md:w-[25v] lg:w-3/7 lg:opacity-45 xl:w-55";

	return (
		<section style={{ height: textSize > 0 ? `${textSize}px` : "auto" }} className={`w-full max-w-360 2xl:pb-20 flex justify-center lg:px-20`}>
			<div className="w-full h-full self-start flex flex-col gap-80 pt-30 md:gap-30 md:pt-15 lg:gap-[20vh] lg:items-end xl:pt-20 xl:gap-20  ">
				<div className={`bg-img-1 rotate-6 self-start ${imageSideClass}`}></div>
				<div className={`bg-img-3 -rotate-6 self-start ${imageSideClass}`}></div>
				<div className={`bg-img-5 rotate-6 self-start ${imageSideClass}`}></div>
			</div>

			<div ref={textRef} id="text" className="absolute lg:w-3/7 px-4 justify-center">
				<div className="text-center">
					<h2 className="text-4xl font-bold"> A Alma em Cada Ponto </h2>
					<h3 className="pb-6 text-2xl font-medium"> A Magia das Peças Feitas à Mão </h3>
				</div>

				<p>
					Em um mundo dominado pela produção em massa e pelo imediatismo do fast fashion, existe um movimento silencioso, mas profundamente poderoso,
					que resgata a essência do vestir: o <strong> feito à mão</strong>. Quando falamos de uma peça de vestuário artesanal, não estamos nos
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

			<div className="w-full h-full lg:items-start flex flex-col gap-80 pt-100 md:gap-30 md:pt-40 lg:gap-[20vh] xl:pt-20 xl:gap-20">
				<div className={`bg-img-2 -rotate-6 self-end ${imageSideClass}`}></div>
				<div className={`bg-img-4 rotate-6 self-end ${imageSideClass}`}></div>
				<div className={`bg-img-6 -rotate-6 self-end ${imageSideClass}`}></div>
			</div>
		</section>
	);
}
