import AboutSection from "./AboutSection";
import FeedbackSection from "./FeedbackSection";
import HandmadeSection from "./HandmadeSection";
import HeroSection from "./HeroSection";
import PiecesSection from "./PiecesSection";

function Home() {
	return (
		<main className="pt-2 flex gap-16 flex-col">
			<HeroSection />

			<HandmadeSection />

			<PiecesSection />

			<FeedbackSection />

			<AboutSection />
		</main>
	);
}

export default Home;
