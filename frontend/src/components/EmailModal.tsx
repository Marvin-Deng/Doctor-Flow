import React from "react";
import Modal from "react-modal";


interface EmailModalProps {
  isOpen: boolean;
  handleClose: () => void;
  name: string;
  email: string;
}

const EmailModal: React.FC<EmailModalProps> = ({
  isOpen,
  handleClose,
  name,
  email,
}) => {
  const handleSendEmail = () => {
    console.log("Sending email...");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Send Personal Medication List"
      className="modal fixed inset-0 flex items-center justify-center z-50 p-10"
      overlayClassName="fixed inset-0 bg-gray-700 bg-opacity-60 flex items-center justify-center"
      ariaHideApp={false}
    >
      <div className="relative p-4 w-full max-w-3xl max-h-[calc(100vh-5rem)] overflow-y-auto bg-white rounded-lg shadow-xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 font-bold flex items-center justify-center text-2xl rounded text-gray-600 hover:bg-gray-300"
          aria-label="Close"
          style={{ transition: "color 0.3s ease" }}
        >
          &times;
        </button>

        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-lg font-semibold mb-4 w-3/4">
            Are you sure you want to send this Personal Medication List to
            patient {name} at {email}?
          </h2>
          <button
            onClick={handleSendEmail}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EmailModal;
