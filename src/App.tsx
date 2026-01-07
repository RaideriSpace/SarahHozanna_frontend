import FeedbackSection from "./components/FeedbackSection";
import HandmadeSection from "./components/HandmadeSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PiecesSection from "./components/PiecesSection";

function App() {
	return (
		<>
			<Navbar />

			<main className="pt-2 flex gap-4 flex-col">
				<HeroSection />

				<HandmadeSection />

				<PiecesSection />

				<FeedbackSection />

				<section className="">
					<h2> Quem Sou </h2>

					<div className="flex justify-center">
						<div className="w-[60%]">
							<p>
								Pellentesque morbi purus urna tempor vitae metus lacus porta mattis. Id risus tortor gravida convallis ut cursus nunc consequat mi.
								Mattis sed justo maecenas in proin sed adipiscing velit. Fringilla vestibulum quis amet ac adipiscing vitae diam mauris. Lorem ac
								mattis tincidunt in sit tincidunt phasellus. Mauris ac nibh id sit tristique montes est. Quis pellentesque elementum eget lectus et
								vestibulum pretium. In sit at imperdiet id ut sit pellentesque sed amet. Eu tortor bibendum egestas lacus non maecenas egestas.
								Convallis posuere eget a vulputate habitant molestie risus quisque dictum. Aliquam lectus tellus libero platea fames amet semper. Eget
								in fermentum mi felis tortor egestas rhoncus. Condimentum lacus lectus proin dui hac. Fringilla vestibulum ultrices porttitor faucibus
								dui lectus.
							</p>
							<p>
								Phasellus habitant dapibus in in. Mauris at in senectus eros. Elit porttitor sem fermentum turpis erat urna elit. Risus elit duis
								vitae senectus lectus. Gravida sed felis nam proin. Lorem massa mus neque tellus non augue viverra. Pharetra in nisi nulla eget
								ultrices. In interdum quam gravida quisque egestas in auctor id. Leo tortor vitae eget lectus eget. Praesent egestas malesuada ut nisi
								in. Dictum pharetra nisl nisl elementum.
							</p>
						</div>
						<img src="" alt="Foto da Estilista Sarah Hozanna" className="w-[30%]" />
					</div>
				</section>
			</main>

			<footer></footer>
		</>
	);
}

export default App;
