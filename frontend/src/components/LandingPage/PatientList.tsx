"use client";
import React, { useState, useEffect } from "react";
import PatientCard from "./PatientCard";
import Patient from "../../types/Patient";
import SearchBar from "../units/SearchBar";

const PatientsList: React.FC = () => {
  const [results, setResults] = useState<string>("");
  const [currPatients, setCurrPatients] = useState<Patient[]>();

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
      name: "William Doe",
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
      name: "Gene Doe",
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

  function formatDateString(date: Date) {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }

  useEffect(() => {
    if (results !== "") {
      const filteredPatients = dummyPatients.filter(
        (patient) =>
          patient.name.toLowerCase().includes(results.toLowerCase()) ||
          patient.email.toLowerCase().includes(results.toLowerCase()) ||
          patient.sex.toLowerCase() === results.toLowerCase() ||
          patient.age.toString() === results ||
          formatDateString(patient.dob).slice(0, 10).includes(results) ||
          patient.insurance.toLowerCase().includes(results.toLowerCase()) ||
          patient.allergies?.some((allergy) =>
            allergy.toLowerCase().includes(results.toLowerCase())
          ) ||
          patient.medications.some(
            (med) =>
              med.rx.toLowerCase().includes(results.toLowerCase()) ||
              med.prescriber.toLowerCase().includes(results.toLowerCase()) ||
              med.pharmacy.toLowerCase().includes(results.toLowerCase())
          )
      );
      setCurrPatients(filteredPatients);
    } else {
      setCurrPatients(dummyPatients);
    }
  }, [results]);

  return (
    <>
      <SearchBar setResults={setResults} />
      <div className="mt-5 grid grid-cols-1 gap-4">
        {currPatients &&
          currPatients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
      </div>
    </>
  );
};

export default PatientsList;
