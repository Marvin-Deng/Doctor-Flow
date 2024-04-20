"use client";
import React, { useState } from "react";
import InputForm from "./InputForm";
import Modal from "react-modal";

interface NewPatientModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const NewPatientModal: React.FC<NewPatientModalProps> = ({
  isOpen,
  handleClose,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [medicines, setMedicines] = useState([{ name: "", dosage: "" }]);

  const handleAddMedicine = () => {
    setMedicines((prevMedicines) => [
      ...prevMedicines,
      { name: "", dosage: "" },
    ]);
  };

  const handleRemoveMedicine = (index: number) => {
    setMedicines((prevMedicines) =>
      prevMedicines.filter((medicine, i) => i !== index)
    );
  };

  const handleMedicineChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setMedicines((prevMedicines) =>
      prevMedicines.map((medicine, i) =>
        i === index ? { ...medicine, [name]: value } : medicine
      )
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Patient Details"
      className="modal fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-gray-700 bg-opacity-60 flex items-center justify-center"
      ariaHideApp={false}
    >
      <div className="relative p-4 w-full max-w-5xl max-h-full bg-white rounded-lg shadow-xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-8 w-8 h-8 flex items-center justify-center text-2xl rounded text-gray-600 hover:bg-gray-300"
          aria-label="Close"
          style={{ transition: "color 0.3s ease" }}
        >
          &times;
        </button>
        <InputForm
          label="Name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputForm
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {medicines.map((medicine, index) => (
          <div key={index}>
            <InputForm
              label="Medicine Name"
              type="text"
              placeholder="Enter medicine name"
              value={medicine.name}
              onChange={(e) => handleMedicineChange(index, e)}
            />
            <InputForm
              label="Dosage"
              type="text"
              placeholder="Enter dosage"
              value={medicine.dosage}
              onChange={(e) => handleMedicineChange(index, e)}
            />
            <button onClick={() => handleRemoveMedicine(index)}>Remove</button>
          </div>
        ))}
        <button onClick={handleAddMedicine}>Add Medicine</button>
      </div>
    </Modal>
  );
};

export default NewPatientModal;
