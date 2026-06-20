import type { FC } from "react";
import AvaliationCarousel from "../../components/AvaliationCarousel";
import { AllAvaliations } from "../../data/avaliationsData";

interface FeedbackProps {
	onWipClick: () => void;
}

export const FeedbackSection: FC<FeedbackProps> = ({ onWipClick }) => {
	return (
		<section className="w-full px-16 pt-4 pb-6 md:px-20 flex flex-col justify-center gap-8">
			<h2 className="text-center text-3xl font-bold"> Depoimentos </h2>

			<div className="w-full flex justify-center">
				<AvaliationCarousel avaliations={AllAvaliations} />
			</div>

			<div className="self-center flex flex-col md:flex-row gap-4">
				<button onClick={onWipClick} className="buttondepo">
					Peças Prontas
				</button>
				<button onClick={onWipClick} className="buttondepo">
					Sob Medida
				</button>
			</div>
		</section>
	);
};