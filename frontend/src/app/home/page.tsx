"use client"
import React, { useState } from "react";
import NewPatientForm from "../../components/NewPatient/NewPatientForm";
import PatientList from "../../components/LandingPage/PatientList";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center">
        <button
          className="fixed right-8 bottom-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleOpenModal}
        >
          Add New Patient
        </button>
        <PatientList />
        <NewPatientForm isOpen={isOpen} handleClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default LandingPage;
