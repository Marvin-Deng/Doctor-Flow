import React, { useState } from "react";
import InputForm from "./InputForm";
import Modal from "react-modal";
import Patient from "../types/Patient";

interface NewPatientModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const NewPatientModal: React.FC<NewPatientModalProps> = ({
  isOpen,
  handleClose,
}) => {
  const [patient, setPatient] = useState<Patient>({
    id: 0,
    name: "",
    sex: "",
    age: 0,
    dob: new Date(),
    email: "",
    insurance: "",
    allergies: [],
    medications: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === "date") {
      setPatient((prev) => ({ ...prev, [name]: new Date(value) }));
    } else {
      setPatient((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    console.log("Submitting Patient Data:", patient);
    handleClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Patient Details"
      className="modal fixed inset-0 flex items-center justify-center z-50 p-10"
      overlayClassName="fixed inset-0 bg-gray-700 bg-opacity-60 flex items-center justify-center"
      ariaHideApp={false}
    >
      <div className="relative p-10 w-full max-w-3xl max-h-[calc(100vh-5rem)] overflow-y-auto bg-white rounded-lg shadow-xl flex flex-col justify-between">
        <h2 className="mx-8 text-xl font-bold text-center mb-4">
          Create Patient
        </h2>
        <button
          onClick={handleClose}
          className="absolute top-4 right-8 w-8 h-8 flex items-center justify-center text-2xl rounded text-gray-600 hover:bg-gray-300"
          aria-label="Close"
          style={{ transition: "color 0.3s ease" }}
        >
          &times;
        </button>
        <div>
          <InputForm
            label="Name"
            type="text"
            name="name"
            placeholder="Enter name"
            value={patient.name}
            onChange={handleChange}
          />
          <InputForm
            label="Sex"
            type="text"
            name="sex"
            placeholder="Enter sex"
            value={patient.sex}
            onChange={handleChange}
          />
          <InputForm
            label="Age"
            type="text"
            name="age"
            placeholder="Enter age"
            value={patient.age.toString()}
            onChange={handleChange}
          />
          <InputForm
            label="Date of Birth"
            type="date"
            name="dob"
            value={patient.dob.toISOString().substring(0, 10)}
            onChange={handleChange}
          />

          <InputForm
            label="Email"
            type="email"
            name="email"
            placeholder="Enter email"
            value={patient.email}
            onChange={handleChange}
          />
          <InputForm
            label="Allergies (optional)"
            type="text"
            name="allergies"
            placeholder="Enter allergies"
            value={patient.insurance}
            onChange={handleChange}
          />
          <InputForm
            label="Insurance"
            type="text"
            name="insurance"
            placeholder="Enter insurance"
            value={patient.insurance}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default NewPatientModal;
