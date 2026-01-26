import AboutSection from "./AboutSection";
import FeedbackSection from "./FeedbackSection";
import HandmadeSection from "./HandmadeSection";
import HeroSection from "./HeroSection";
import PiecesSection from "./PiecesSection";

function Home() {
	return (
		<main className="flex gap-16 flex-col items-center overflow-hidden max-w-475">
			<HeroSection />

			<HandmadeSection />

			<PiecesSection />

			<FeedbackSection />

			<AboutSection />
		</main>
	);
}

export default Home;
