import React from "react";
import Modal from "react-modal";
import Patient from "../types/Patient";
import MedTable from "./MedTable";

interface PatientModalProps {
  isOpen: boolean;
  handleClose: () => void;
  patient: Patient;
}

const createMedicineData = () => {
  return Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      rx: `Medicine Name ${index + 1}`,
      dose: 10 * (index + 1),
      unit: "mg",
      condition: index % 2 === 0 ? "Condition A" : "Condition B",
      prescriber: `Dr. Prescriber ${index + 1}`,
      pharmacy: `Pharmacy ${index + 1}`,
      notes: index % 2 === 0 ? "Eat your pills :)" : undefined,
    }));
};

const PatientModal: React.FC<PatientModalProps> = ({
  isOpen,
  handleClose,
  patient,
}) => {
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

        <h2 className="text-xl font-bold mb-2">{patient.name}</h2>
        <p>ID: {patient.id}</p>
        <p>Sex: {patient.sex}</p>
        <p>Age: {patient.age}</p>
        <p>DOB: {new Date(patient.dob).toLocaleDateString()}</p>
        <MedTable medData={createMedicineData()} />
      </div>
    </Modal>
  );
};

export default PatientModal;
