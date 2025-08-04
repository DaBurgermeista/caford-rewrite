// StatsModal.tsx
import { ReactNode } from "react";
import { FaCircleXmark } from "react-icons/fa6";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-stone-900 text-white rounded-lg shadow-lg p-6 relative w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-lg"
        >
          <FaCircleXmark />
        </button>
        {children}
      </div>
    </div>
  );
}
