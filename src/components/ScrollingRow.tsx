import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import type { Cloths } from "../data/clothsData";

interface ScrollingRowProps {
	clothes: Cloths[];
	title: string;
	tag?: string;
	direction?: "left" | "right";
}

const imgClass =
	"m-0 block h-[260px] w-[180px] flex-shrink-0 cursor-pointer select-none object-cover object-center opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:w-[240px]";

export const ScrollingRow = ({ clothes, title, tag, direction = "left" }: ScrollingRowProps) => (
	<motion.div
		initial={{ opacity: 0, y: 24 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.3 }}
		transition={{ duration: 0.6, ease: "easeOut" }}
		className="relative w-full overflow-hidden border-y border-secondary-700/30 bg-dark-800">
		{/* etiqueta da categoria */}
		{/* <span className="pointer-events-none absolute top-4 right-4 z-20 rotate-3 rounded-sm bg-accent-400 px-3 py-1 text-xs font-bold tracking-wider text-dark-700 uppercase shadow-md">
			{tag}
		</span> */}

		{/* título */}
		<div className="pointer-events-none absolute top-3 left-1/2 z-20 -translate-x-1/2 text-center">
			<h2 className="glow text-2xl text-light-100 drop-shadow-md text-shadow-[2px_2px_5px_black]">{title}</h2>
			<span className="mx-auto mt-1 block h-0.5 w-12 bg-accent-400" />
		</div>

		{/* fade lateral */}
		<div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-dark-800 to-transparent" />
		<div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-dark-800 to-transparent" />

		<Marquee speed={20} gradient={false} pauseOnHover direction={direction} className="flex items-stretch">
			{clothes.map((cloth, index) => (
				<img key={`${cloth.id}-${index}`} src={cloth.src} alt={cloth.alt} className={imgClass} draggable={false} />
			))}
		</Marquee>
	</motion.div>
);
