import { motion } from "motion/react";

const cards = [
	{
		bgClass: "bg-img-1",
		title: "Criado Para Você",
		text: "Cada peça é desenvolvida com atenção plena ao seu estilo, suas medidas e a história que deseja contar. Do primeiro atendimento aos acabamentos finais, cada etapa é conduzida com cuidado para criar algo verdadeiramente seu.",
	},
	{
		bgClass: "bg-img-4",
		title: "A Diferença do Sob Medida",
		text: "Modelagem, tecidos, acabamentos e caimento são desenvolvidos de forma personalizada. O resultado é uma criação que valoriza sua individualidade — peças que unem conforto, elegância e autenticidade em cada detalhe.",
	},
	{
		bgClass: "bg-img-6",
		title: "Qualidade em Cada Etapa",
		text: "Da escolha dos materiais aos remates finais, todo o processo é conduzido com rigor para garantir conforto, beleza e durabilidade. Peças pensadas para acompanhar diferentes momentos da sua vida e permanecer relevantes ao longo dos anos.",
	},
];

export const HandmadeSection = () => {
	return (
		<section className="w-full max-w-360 px-4 pb-8 md:px-10 lg:px-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="mb-6 text-center md:mb-8">
				<span className="text-xs font-bold tracking-[0.3em] text-secondary-500 uppercase">Ateliê</span>
				<h2 className="mt-2 text-4xl font-bold text-dark-400 md:text-5xl">A Arte do Feito à Mão</h2>
				<span aria-hidden="true" className="mx-auto mt-4 block h-1 w-16 rounded-full bg-accent-400" />
			</motion.div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{cards.map(({ bgClass, title, text }, i) => (
					<motion.div
						key={title}
						initial={{ opacity: 0, y: 32 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
						className={`group relative overflow-hidden rounded-2xl ${bgClass} aspect-4/3 md:aspect-3/4`}>
						<div className="absolute inset-0 bg-linear-to-t from-dark-700/95 via-dark-700/60 to-dark-700/70 md:via-dark-700/30 md:to-transparent" />

						<div className="absolute inset-0 bg-dark-600/0 transition-colors duration-500 md:group-hover:bg-dark-600/30" />

						<div className="absolute bottom-0 left-0 right-0 p-6 md:translate-y-2 md:transition-transform md:duration-500 md:group-hover:translate-y-0">
							<h3 className="glow mb-3 text-xl text-light-200 text-center cursor-default">{title}</h3>
							<p className="text-sm leading-relaxed text-light-400 md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100 text-center cursor-default">
								{text}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default HandmadeSection;
