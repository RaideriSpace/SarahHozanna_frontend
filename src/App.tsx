import Footer from "./components/Footer";
import ContactCardModal from "./components/modals/ContactCardModal";
import Navbar from "./components/Navbar";
import { Home } from "./pages/home/Home";
import { useModal } from "./hooks/useModal";
import { AnimatePresence } from "motion/react";
import WorkInProgressModal from "./components/modals/WorkInProgressModal";

function App() {
	const { isOpen: isContactModalOpen, openModal: handleOpenContactModal, closeModal: handleCloseContactModal } = useModal();
  const {isOpen: isWipModalOpen, openModal: handleOpenWipModal, closeModal: handleCloseWipModal } = useModal();

	return (
		<div className="flex flex-col items-center overflow-hidden">
			<Navbar onContactClick={handleOpenContactModal} onWipClick={handleOpenWipModal} />

			<Home onWipClick={handleOpenWipModal} />

			<Footer />

			<AnimatePresence>{isContactModalOpen && <ContactCardModal onClose={handleCloseContactModal} />}</AnimatePresence>

			<AnimatePresence>{isWipModalOpen && <WorkInProgressModal onClose={handleCloseWipModal} />}</AnimatePresence>
		</div>
	);
}

export default App;
