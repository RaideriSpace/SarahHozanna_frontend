import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";

function App() {
	return (
		<div className="flex flex-col items-center overflow-hidden">
			<Navbar />

			<Home />

			<Footer />
		</div>
	);
}

export default App;
