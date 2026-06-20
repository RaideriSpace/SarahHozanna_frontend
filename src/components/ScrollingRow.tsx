import Marquee from "react-fast-marquee";
import type { Cloths } from "../data/clothsData";

interface ScrollingRowProps {
	clothes: Cloths[];
	title: string;
	direction?: "left" | "right";
}

const imgClass =
	"h-[260px] w-[180px] md:w-[240px] object-cover object-center opacity-50 transition-all duration-300 hover:opacity-100 flex-shrink-0 cursor-pointer select-none";

export const ScrollingRow = ({
	clothes,
	title,
	direction = "left",
}: ScrollingRowProps) => (
	<div className="relative w-full overflow-hidden bg-black group">
		{/* título */}
		<h2 className="pointer-events-none absolute top-3 left-1/2 z-20 -translate-x-1/2 text-2xl font-bold text-white drop-shadow-md">
			{title}
		</h2>

		{/* fade lateral (opcional mas melhora MUITO o visual) */}
		<div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent" />
		<div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent" />

		<Marquee
			speed={20}
			gradient={false}
			pauseOnHover={true}
			direction={direction}
			className="flex items-stretch"
		>
			{clothes.map((cloth, index) => (
				<img
					key={`${cloth.id}-${index}`}
					src={cloth.src}
					alt={cloth.alt}
					className={`${imgClass} block m-0 p-0`}
					draggable={false}
				/>
			))}
		</Marquee>
	</div>
);