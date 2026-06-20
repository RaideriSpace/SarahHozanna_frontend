import type { FC } from "react";
import { ScrollingRow } from "../../components/ScrollingRow";
import { readyClothes, tailoredClothes } from "../../data/clothsData";

interface PiecesProps {
	onWipClick: () => void;
}

export const PiecesSection: FC<PiecesProps> = ({ onWipClick }) => {
	return (
		<section className="flex w-full flex-col">
			<div onClick={onWipClick} className="cursor-pointer">
				<ScrollingRow
					clothes={readyClothes}
					title="Peças Prontas"
					direction="left"
				/>
			</div>

			<div onClick={onWipClick} className="cursor-pointer">
				<ScrollingRow
					clothes={tailoredClothes}
					title="Sob Medida"
					direction="right"
				/>
			</div>
		</section>
	);
};