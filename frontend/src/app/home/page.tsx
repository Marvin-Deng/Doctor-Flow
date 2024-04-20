"use client"
import React, { useState } from "react";
import NewPatientForm from "../../components/NewPatientForm";
import PatientList from "../../components/PatientList";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="mt-10 w-full bg-white shadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Doctor-Flow</h1>
        </div>
      </header>
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
