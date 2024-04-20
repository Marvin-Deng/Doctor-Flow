import React, { useState } from "react";

import Modal from "react-modal";
import Patient from "../types/Patient";
import MedTable from "./MedTable";
import EmailModal from "./EmailModal";

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
      schedule: `Schedule ${(index % 3) + 1}`,
      drp: `DRP ${
        index % 2 === 0
          ? "neffectiveness, adverse drug effects, overdosage, underdosage, inappropriate treatment"
          : "overdosage, underdosage, inappropriate treatment"
      }`,
    }));
};

const PatientModal: React.FC<PatientModalProps> = ({
  isOpen,
  handleClose,
  patient,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  const handleOpenEmailModal = () => setIsEmailOpen(true);
  const handleCloseEmailModal = () => setIsEmailOpen(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleGenerateDRP = () => {
    console.log("Generating DRP...");
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
      <div className="relative p-4 w-full max-w-7xl max-h-[calc(100vh-5rem)] overflow-y-auto bg-white rounded-lg shadow-xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 font-bold flex items-center justify-center text-2xl rounded text-gray-600 hover:bg-gray-300"
          aria-label="Close"
          style={{ transition: "color 0.3s ease" }}
        >
          &times;
        </button>

        <div className="flex items-center justify-start space-x-4">
          <h2 className="text-xl font-bold mb-2">{patient.name}</h2>
          <button
            onClick={toggleEditMode}
            className="flex items-center justify-center text-lg rounded-full bg-blue-500 text-white hover:bg-blue-700 px-3 py-1 transform hover:scale-105"
            style={{ transition: "background 0.3s ease, transform 0.3s ease" }}
          >
            {isEditMode ? "Save Changes" : "Edit"}
          </button>
          <button
            onClick={handleGenerateDRP}
            className="flex items-center justify-center text-lg rounded-full bg-green-500 text-white hover:bg-green-700 px-3 py-1 transform hover:scale-105"
            style={{ transition: "background 0.3s ease, transform 0.3s ease" }}
          >
            Generate DRPs
          </button>
          <button
            onClick={handleOpenEmailModal}
            className="flex items-center justify-center text-lg rounded-full bg-green-500 text-white hover:bg-green-700 px-3 py-1 transform hover:scale-105"
            style={{ transition: "background 0.3s ease, transform 0.3s ease" }}
          >
            Email Report
          </button>
        </div>

        <p>ID: {patient.id}</p>
        <p>Sex: {patient.sex}</p>
        <p>Age: {patient.age}</p>
        <p>DOB: {new Date(patient.dob).toLocaleDateString()}</p>
        <MedTable medData={createMedicineData()} isEditMode={isEditMode} />
        <EmailModal
          isOpen={isEmailOpen}
          handleClose={handleCloseEmailModal}
          name={patient.name}
          email={patient.email}
        />
      </div>
    </Modal>
  );
};

export default PatientModal;
