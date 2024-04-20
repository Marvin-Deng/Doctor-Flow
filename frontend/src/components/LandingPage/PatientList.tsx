import React from "react";
import PatientCard from "./PatientCard";
import Patient from "../../types/Patient";

const PatientsList: React.FC = () => {
  const dummyPatients: Patient[] = [
    {
      id: 1,
      name: "John Doe",
      sex: "Male",
      age: 35,
      dob: new Date("1989-03-15"),
      email: "john@example.com",
      insurance: "Provider A",
      allergies: ["Peanuts"],
      medications: [
        {
          id: 1,
          rx: "Medication A",
          dose: 10.0,
          unit: "mg",
          prescriber: "Dr. Smith",
          pharmacy: "Pharmacy A",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      sex: "Female",
      age: 28,
      dob: new Date("1994-09-22"),
      email: "jane@example.com",
      insurance: "Provider B",
      allergies: ["Penicillin"],
      medications: [
        {
          id: 2,
          rx: "Medication B",
          dose: 20.0,
          unit: "mg",
          prescriber: "Dr. Johnson",
          pharmacy: "Pharmacy B",
        },
        {
          id: 2,
          rx: "Medication B",
          dose: 20.0,
          unit: "mg",
          prescriber: "Dr. Johnson",
          pharmacy: "Pharmacy B",
        },
        {
          id: 2,
          rx: "Medication B",
          dose: 20.0,
          unit: "mg",
          prescriber: "Dr. Johnson",
          pharmacy: "Pharmacy B",
        },
      ],
    },
    {
      id: 3,
      name: "John Doe",
      sex: "Male",
      age: 35,
      dob: new Date("1989-03-15"),
      email: "john@example.com",
      insurance: "Provider A",
      allergies: ["Peanuts"],
      medications: [
        {
          id: 3,
          rx: "Medication A",
          dose: 10.0,
          unit: "mg",
          prescriber: "Dr. Smith",
          pharmacy: "Pharmacy A",
        },
      ],
    },
    {
      id: 4,
      name: "John Doe",
      sex: "Male",
      age: 35,
      dob: new Date("1989-03-15"),
      email: "john@example.com",
      insurance: "Provider A",
      allergies: ["Peanuts"],
      medications: [
        {
          id: 4,
          rx: "Medication A",
          dose: 10.0,
          unit: "mg",
          prescriber: "Dr. Smith",
          pharmacy: "Pharmacy A",
        },
      ],
    },
  ];

  return (
    <div className="mt-5 grid grid-cols-1 gap-4">
      {dummyPatients.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </div>
  );
};

export default PatientsList;
