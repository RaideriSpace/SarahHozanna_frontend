import { useCallback, useEffect, useState, type FC } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { AvaliationCard } from "./AvaliationCard";
import type { Avaliations } from "../data/avaliationsData";

interface AvaliationCarouselProps {
	avaliations: Avaliations[];
}

export const AvaliationCarousel: FC<AvaliationCarouselProps> = ({ avaliations }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
		Autoplay({ delay: 6000, stopOnMouseEnter: true, stopOnInteraction: false }),
	]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
		emblaApi.on("select", onSelect);
		onSelect();

		return () => {
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi]);

	return (
		<div className="mx-auto w-full max-w-4xl">
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex">
					{avaliations.map((avaliation, index) => (
						<div key={`${avaliation.nome}-${index}`} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%]">
							<AvaliationCard avaliation={avaliation} />
						</div>
					))}
				</div>
			</div>

			<div className="mt-6 flex items-center justify-center gap-6">
				<button onClick={scrollPrev} aria-label="Depoimento anterior" className="cursor-pointer text-primary-700 transition-colors hover:text-primary-900">
					<LuChevronLeft size={24} />
				</button>

				<div className="flex gap-2">
					{avaliations.map((_, index) => (
						<button
							key={index}
							onClick={() => scrollTo(index)}
							aria-label={`Ir para depoimento ${index + 1}`}
							className={`h-2 rounded-full transition-all ${index === selectedIndex ? "w-6 bg-primary-700" : "w-2 bg-primary-200"}`}
						/>
					))}
				</div>

				<button onClick={scrollNext} aria-label="Próximo depoimento" className="cursor-pointer text-primary-700 transition-colors hover:text-primary-900">
					<LuChevronRight size={24} />
				</button>
			</div>
		</div>
	);
};

export default AvaliationCarousel;