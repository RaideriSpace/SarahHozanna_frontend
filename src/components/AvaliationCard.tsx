import { useState, type FC } from "react";
import { createPortal } from "react-dom";
import type { Avaliations } from "../data/avaliationsData";

interface AvaliationCardProps {
	avaliation: Avaliations;
}

const StarIcon: FC = () => (
	<svg
		fill="currentColor"
		viewBox="0 0 20 20"
		className="h-4 w-4 text-amber-500 drop-shadow-sm"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true">
		<path d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z" />
	</svg>
);

export const AvaliationCard: FC<AvaliationCardProps> = ({ avaliation }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<article className="w-full flex px-4 h-full flex-col rounded-xl border border-primary-300 bg-linear-to-br from-primary-100 to-primary-200 p-5 shadow-md transition-all duration-300 hover:shadow-xl">
				<header className="mb-4 flex items-start justify-between gap-3">
					<div className="flex flex-col gap-2 md:flex-row">
						<h3 className="text-lg font-bold text-dark-800">{avaliation.nome}</h3>

						<span className="w-fit rounded-full content-center bg-primary-50 px-3 py-1 text-xs font-medium text-dark-700 shadow-sm">
							{avaliation.modelo}
						</span>
					</div>

					{/* BADGE DE ESTRELAS (RETRO MODERNO) */}
					<div
						className="flex shrink-0 items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 shadow-sm"
						role="img"
						aria-label={`Avaliação de ${avaliation.nota} de 5 estrelas`}>
						<span className="text-sm font-bold text-amber-700">{avaliation.nota}.0</span>

						<div className="flex gap-0.5">
							{Array.from({ length: avaliation.nota }).map((_, index) => (
								<StarIcon key={index} />
							))}
						</div>
					</div>
				</header>

				<blockquote className="relative flex-1 rounded-xl bg-primary-50 p-4 shadow-inner">
					<span aria-hidden="true" className="absolute -top-3 left-3 text-5xl text-primary-300">
						“
					</span>

					<p className="line-clamp-4 text-sm leading-relaxed text-gray-700 cursor-default">{avaliation.text}</p>

					<button
						type="button"
						onClick={() => setIsOpen(true)}
						className="mt-4 text-sm font-semibold text-secondary-600 transition-colors hover:text-primary-900 cursor-pointer">
						Ler depoimento completo
					</button>
				</blockquote>
			</article>

			{typeof window !== "undefined" &&
				isOpen &&
				createPortal(
					<div className="fixed inset-0 z-9999 flex items-center justify-center bg-dark-900/60 p-4 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
						<div className="max-h-[85vh] w-full max-w-2xl rounded-2xl bg-primary-300 shadow-2xl" onClick={(e) => e.stopPropagation()}>
							{/* HEADER DO MODAL */}
							<div className="sticky top-0 rounded-t-2xl border-b border-primary-200 bg-primary-100 p-6 z-20">
								<div className="flex items-start justify-between gap-4">
									<div>
										<h3 className="text-2xl font-bold text-dark-800">{avaliation.nome}</h3>

										<div className="mt-2 flex items-center gap-2">
											<span className="inline-flex rounded-full bg-light-100 px-3 py-1 text-sm text-dark-700 shadow-sm">{avaliation.modelo}</span>
										</div>

										<div className="mt-3 flex items-center gap-2" role="img" aria-label={`Avaliação de ${avaliation.nota} de 5 estrelas`}>
											<div className="flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 shadow-sm">
												<span className="text-sm font-bold text-amber-700">{avaliation.nota}.0</span>

												<div className="flex gap-0.5">
													{Array.from({
														length: avaliation.nota,
													}).map((_, index) => (
														<StarIcon key={index} />
													))}
												</div>
											</div>
										</div>
									</div>

									<button
										type="button"
										onClick={() => setIsOpen(false)}
										aria-label="Fechar modal"
										className="flex h-10 w-10 items-center justify-center rounded-full text-2xl transition hover:bg-white/60">
										×
									</button>
								</div>

								<div className="mt-4 h-1 w-16 rounded-full bg-amber-400" />
							</div>

							{/* CONTEÚDO */}
							<div className="p-6">
								<blockquote
									className="relative rounded-xl bg-primary-50 p-6 shadow-inner h-[50vh] overflow-auto 
                    [scrollbar-width:thin] 
                    [scrollbar-color:theme(colors.primary.300)_theme(colors.primary.50)] 
                    [&::-webkit-scrollbar]:w-2 
                    [&::-webkit-scrollbar-track]:bg-primary-50 
                    [&::-webkit-scrollbar-thumb]:bg-primary-700 
                    [&::-webkit-scrollbar-thumb]:rounded-full">
									<span aria-hidden="true" className="absolute left-4 top-2 text-6xl text-primary-200">
										“
									</span>

									<p className="pt-6 text-base leading-8 text-dark-700">{avaliation.text}</p>
								</blockquote>
							</div>
						</div>
					</div>,
					document.body,
				)}
		</>
	);
};

export default AvaliationCard;
