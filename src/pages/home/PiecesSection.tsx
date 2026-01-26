import type { FC } from "react";
import { ScrollingRow } from "../../components/ScrollingRow";
import { readyClothes, tailoredClothes } from "../../data/clothsData";

interface PiecesProps {
	onWipClick: () => void;
}

export const PiecesSection: FC<PiecesProps> = ( {onWipClick} ) => {

	return (
		<section className="w-full flex flex-col">
			<button onClick={onWipClick}>
				<ScrollingRow clothes={readyClothes} title="Peças Prontas" direction="right" />
			</button>
			<button onClick={onWipClick}>
				<ScrollingRow clothes={tailoredClothes} title="Sob Medida" direction="left" />
			</button>
		</section>
	);
}
