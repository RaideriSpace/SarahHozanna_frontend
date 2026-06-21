import type { FC } from "react";

type Piece = {
	id: number;
	name: string;
	category: string;
	image: string;
	description: string;
};

const mockPieces: Piece[] = [
	{
		id: 1,
		name: "Vestido Floral Midi",
		category: "Sob Medida",
		image: "https://images.unsplash.com/photo-1520975928310-17f3a0a0d2b1?auto=format&fit=crop&w=800&q=80",
		description: "Vestido leve com estampa floral e acabamento artesanal.",
	},
	{
		id: 2,
		name: "Blusa Linho Natural",
		category: "Pronta Entrega",
		image: "https://images.unsplash.com/photo-1520975682031-a9d0f2b5c6e2?auto=format&fit=crop&w=800&q=80",
		description: "Peça minimalista com tecido respirável e caimento suave.",
	},
	{
		id: 3,
		name: "Conjunto Elegante Bege",
		category: "Sob Medida",
		image: "https://images.unsplash.com/photo-1520975958223-0d1d2f4d7e10?auto=format&fit=crop&w=800&q=80",
		description: "Conjunto sofisticado com design contemporâneo.",
	},
	{
		id: 4,
		name: "Saia Longa Fluida",
		category: "Pronta Entrega",
		image: "https://images.unsplash.com/photo-1520975928310-17f3a0a0d2b1?auto=format&fit=crop&w=800&q=80",
		description: "Movimento leve com toque elegante e feminino.",
	},
];

export const CollectionPage: FC = () => {
	return (
		<section className="relative min-h-screen overflow-hidden py-16 mt-10">
			{/* FUNDO ORGÂNICO */}
			<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary-50 via-light-100 to-primary-100" />

			<div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-secondary-200/25 blur-3xl" />
			<div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-[40%_60%_70%_30%/50%_60%_40%_50%] bg-primary-300/20 blur-3xl" />

			{/* HEADER */}
			<div className="mx-auto mb-12 max-w-5xl px-6 text-center">
				<h1 className="text-4xl font-semibold tracking-tight text-primary-800">Peças</h1>

				<p className="mt-3 text-base text-primary-600">Conheça modelos exclusivos criados com cuidado, técnica e identidade.</p>
			</div>

			{/* GRID */}
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 px-6 sm:grid-cols-2 lg:grid-cols-3">
				{mockPieces.map((piece) => (
					<article
						key={piece.id}
						className="group relative overflow-hidden rounded-[28px] border border-primary-100 bg-light-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
						{/* IMAGEM */}
						<div className="relative h-72 w-full overflow-hidden">
							<img
								src={piece.image}
								alt={piece.name}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>

							{/* overlay mais suave */}
							<div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 via-transparent to-transparent" />

							{/* badge */}
							<span className="absolute left-4 top-4 rounded-full border border-light-200 bg-light-100/90 px-3 py-1 text-xs font-medium text-primary-700 backdrop-blur">
								{piece.category}
							</span>
						</div>

						{/* CONTEÚDO */}
						<div className="space-y-2 p-5">
							<h3 className="text-lg font-semibold text-primary-800">{piece.name}</h3>

							<p className="text-sm leading-relaxed text-primary-600">{piece.description}</p>

							<button
								className="
									mt-3 text-sm font-medium text-secondary-600
									transition-colors hover:text-secondary-800
								">
								Ver detalhes →
							</button>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default CollectionPage;
