import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-full p-6">
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <IoMdClose size={24} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
