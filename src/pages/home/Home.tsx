import type { FC } from "react";
import { HeroSection } from "./HeroSection";
import { HandmadeSection } from "./HandmadeSection";
import { PiecesSection } from "./PiecesSection";
import { FeedbackSection } from "./FeedbackSection";
import { AboutSection } from "./AboutSection";

interface HomeProps {
	onWipClick: () => void;
}

export const Home: FC<HomeProps> = ({ onWipClick }) => {
	return (
		<main className="flex gap-16 flex-col items-center overflow-hidden max-w-475">
			<HeroSection onWipClick={onWipClick} />

			<HandmadeSection />

			<PiecesSection onWipClick={onWipClick} />

			<FeedbackSection onWipClick={onWipClick} />

			<AboutSection onWipClick={onWipClick} />
		</main>
	);
};
