import React from "react";
import NewPatientForm from "../../components/NewPatientForm";
import PatientList from "../../components/PatientList"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <header className="w-full bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Doctor-Flow</h1>
        </div>
      </header>
      <PatientList />
      <NewPatientForm />
    </div>
  );
};

export default LandingPage;
