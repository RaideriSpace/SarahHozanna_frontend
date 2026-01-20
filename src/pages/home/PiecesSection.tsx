import { ScrollingRow } from "../../components/ScrollingRow";
import { readyClothes, tailoredClothes } from "../../data/clothsData";

function PiecesSection() {

	return (
		<section className="w-full flex flex-col">
			<ScrollingRow clothes={readyClothes} title="Peças Prontas" direction="right" />
			<ScrollingRow clothes={tailoredClothes} title="Sob Medida" direction="left" />
		</section>
	);
}

export default PiecesSection;
