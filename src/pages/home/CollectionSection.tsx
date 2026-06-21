import type { FC } from "react";
import { ScrollingRow } from "../../components/ScrollingRow";
import { readyClothes, tailoredClothes } from "../../data/clothsData";

interface CollectionProps {
	onWipClick: () => void;
}

export const CollectionSection: FC<CollectionProps> = ({ onWipClick }) => {
	return (
		<section className="flex w-full flex-col">
			<div onClick={onWipClick} className="cursor-pointer">
				<ScrollingRow clothes={readyClothes} title="Coleção" direction="left" />
			</div>

			<div onClick={onWipClick} className="cursor-pointer">
				<ScrollingRow clothes={tailoredClothes} title="Noivas" direction="right" />
			</div>
		</section>
	);
};
