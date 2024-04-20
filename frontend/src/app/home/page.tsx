"use client";
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
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <header className="w-full bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Doctor-Flow</h1>
        </div>
      </header>
      <button
        className="fixed right-4 top-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleOpenModal}
      >
        Add New Patient
      </button>
      <PatientList />
      <NewPatientForm isOpen={isOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default LandingPage;
