import AboutSection from "../components/AboutSection";
import FeedbackSection from "../components/FeedbackSection";
import HandmadeSection from "../components/HandmadeSection";
import HeroSection from "../components/HeroSection";
import PiecesSection from "../components/PiecesSection";

function Home() {
	return (
		<main className="pt-2 flex gap-4 flex-col">
			<HeroSection />

			<HandmadeSection />

			<PiecesSection />

			<FeedbackSection />

			<AboutSection />
		</main>
	);
}

export default Home;
