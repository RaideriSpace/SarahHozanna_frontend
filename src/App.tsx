import Footer from "./components/layout/Footer";
import ContactCardModal from "./components/modals/ContactCardModal";
import { Home } from "./pages/home";
import { useModal } from "./hooks/useModal";
import { AnimatePresence } from "motion/react";
import WorkInProgressModal from "./components/modals/WorkInProgressModal";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CollectionPage from "./pages/collection";
import { Navbar } from "./components/layout/Navbar";
import RouteEffects from "./components/layout/RouteEffects";

function App() {
	const { isOpen: isContactModalOpen, openModal: handleOpenContactModal, closeModal: handleCloseContactModal } = useModal();

	const { isOpen: isWipModalOpen, openModal: handleOpenWipModal, closeModal: handleCloseWipModal } = useModal();

	return (
		<BrowserRouter>
      <RouteEffects />

			<div className="flex flex-col items-center overflow-hidden">
				<Navbar onContactClick={handleOpenContactModal} onWipClick={handleOpenWipModal} />

				<Routes>
					<Route path="/" element={<Home onWipClick={handleOpenWipModal} />} />

					<Route path="/colecao" element={<CollectionPage />} />
				</Routes>

				<Footer />

				<AnimatePresence>{isContactModalOpen && <ContactCardModal onClose={handleCloseContactModal} />}</AnimatePresence>

				<AnimatePresence>{isWipModalOpen && <WorkInProgressModal onClose={handleCloseWipModal} />}</AnimatePresence>
			</div>
		</BrowserRouter>
	);
}

export default App;
