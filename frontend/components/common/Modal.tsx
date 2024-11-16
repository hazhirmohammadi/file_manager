"use client"
import React, { useEffect, useState, ReactNode, useMemo } from "react";
import ReactDOM from "react-dom";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "small" | "medium" | "large" | "full";
  position?: "center" | "top" | "bottom" | "left" | "right";
  modalTitle?: string;
}

const Modal: React.FC<ModalProps> = React.memo(
  ({
    isOpen,
    onClose,
    children,
    size = "medium",
    position = "center",
    modalTitle,
  }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (isOpen) {
        setIsVisible(true);
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
      } else {
        document.getElementsByTagName("body")[0].style.overflowY = "scroll";

        const timer = setTimeout(() => setIsVisible(false), 300);
        return () => clearTimeout(timer);
      }
    }, [isOpen]);

    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    const sizeClasses = useMemo(
      () => ({
        small: "w-1/3",
        medium: "w-1/2",
        large: "w-2/3",
        full: "w-full max-w-[851px]",
      }),
      [],
    );

    const positionClasses = useMemo(() => {
      switch (position) {
        case "center":
          return "items-center justify-center";
        case "top":
          return "items-start justify-center ";
        case "bottom":
          return "items-end justify-center  ";
        case "left":
          return "items-center justify-start ";
        case "right":
          return "items-center justify-end ";
        default:
          return "items-center justify-center";
      }
    }, [position]);

    if (!isVisible && !isOpen) return null;

    return ReactDOM.createPortal(
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex ${positionClasses} z-50 transition-opacity duration-300 ${
          isOpen && isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      >
        <div
          className={`bg-white overflow-y-scroll hidden-scrollbar md:p-14 p-8 shadow-lg relative transform transition-all duration-300 ${
            isOpen && isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          } ${position == "bottom" ? "rounded-t-[64px] !p-6" : "rounded-[64px]"} ${sizeClasses[size]}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <p className="text-[15px]">
              {modalTitle}
            </p>
            <button
              className=" text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              X
            </button>
          </div>

          {children}
        </div>
      </div>,
      document.body,
    );
  },
);

Modal.displayName = "Modal";

export default Modal;

//
// const [isFilterModalOpen, setFilterModalOpen] = useState<boolean>(false);
// const openModal = () => setFilterModalOpen(true);
// const closeModal = () => setFilterModalOpen(false);
//
// <Modal
//   isOpen={isFilterModalOpen}
//   onClose={closeModal}
//   position={isMobile ? "bottom" : "center"}
//   size={isMobile ? "full" : "small"}
//   modalTitle="حذف گزارش"
// >