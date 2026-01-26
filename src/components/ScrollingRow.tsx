import Marquee from "react-fast-marquee";
import type { Cloths } from "../data/clothsData";

const imgClass = "h-67 w-45 md:w-64 object-cover object-center opacity-50 transition-all hover:opacity-100 duration-300 flex-shrink-0 cursor-pointer";

export const ScrollingRow = ({
	clothes,
	title,
	direction = "left" as "left" | "right",
}: {
	clothes: Cloths[];
	title: string;
	direction?: "left" | "right";
}) => (
	<div className="w-full h-67 relative overflow-hidden bg-black group">
		<h2 className="absolute top-2 left-1/2 -translate-x-1/2 text-2xl text-white font-bold text-shadow-md z-20 pointer-events-none">{title}</h2>

		<Marquee speed={20} gradient={false} pauseOnClick={true} direction={direction}>
			{clothes.map((cloth, index) => (
				<img key={`${cloth.id}-${index}`} className={imgClass} src={cloth.src} alt={cloth.alt} />
			))}
		</Marquee>
	</div>
);
