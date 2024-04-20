"use client";
import React, { useState } from "react";
import PatientModal from "./PatientModal";
import Patient from "../types/Patient";

interface PatientCardProps {
  patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div
        onClick={handleOpenModal}
        className="bg-white shadow-md rounded-xl p-4 flex flex-row items-center space-x-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
      >
        <div className="flex-grow flex flex-row flex-wrap items-center justify-start space-x-4">
          <h2 className="text-lg font-semibold">{patient.name}</h2>
          <p>ID: {patient.id}</p>
          <p>Sex: {patient.sex}</p>
          <p>Age: {patient.age}</p>
          <p>DOB: {new Date(patient.dob).toLocaleDateString()}</p>
        </div>
      </div>

      <PatientModal
        isOpen={isOpen}
        handleClose={handleCloseModal}
        patient={patient}
      />
    </div>
  );
};

export default PatientCard;
