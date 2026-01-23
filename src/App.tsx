import Footer from "./components/Footer";
import ContactCardModal from "./components/modals/ContactCardModal";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import { useModal } from "./hooks/useModal";
import { AnimatePresence } from "motion/react";

function App() {
	const { isOpen: isContactModalOpen, openModal: handleOpenContactModal, closeModal: handleCloseContactModal } = useModal();

	return (
		<div className="flex flex-col items-center overflow-hidden">
			<Navbar onContactClick={handleOpenContactModal} />

			<Home />

			<Footer />

			<AnimatePresence>{isContactModalOpen && <ContactCardModal onClose={handleCloseContactModal} />}</AnimatePresence>
		</div>
	);
}

export default App;
