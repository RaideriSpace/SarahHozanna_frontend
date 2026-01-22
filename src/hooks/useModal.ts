import { useCallback, useEffect, useState } from "react";

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	return { isOpen, openModal, closeModal };
};

export const useModalCloseOnEsc = (isOpen: boolean, onClose: () => void): void => {
	const handleEscapeKey = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === "Escape") onClose();
		},
		[onClose],
	);

	useEffect(() => {
		if (isOpen) document.addEventListener("keydown", handleEscapeKey);

		return () => {
			document.removeEventListener("keydown", handleEscapeKey);
		};
	}, [isOpen, handleEscapeKey]);
};
