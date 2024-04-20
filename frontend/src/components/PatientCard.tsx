import React from "react";
import Patient from "../types/Patient";

interface PatientCardProps {
  patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
      <div className="flex-grow">
        <h2 className="text-lg font-semibold">{patient.name}</h2>
        <p>ID: {patient.id}</p>
        <p>Sex: {patient.sex}</p>
        <p>Age: {patient.age}</p>
        <p>DOB: {new Date(patient.dob).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default PatientCard;
