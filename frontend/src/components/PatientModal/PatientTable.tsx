import React from "react";
import Patient from "../../types/Patient";
import { TableCell, TableHeader } from "./PatientDetails/DetailTableUnits";

interface PatientTableProps {
  patient: Patient;
}

const PatientRow: React.FC<PatientTableProps> = ({ patient }) => {
  return (
    <tr>
      <TableCell content={patient.id} />
      <TableCell content={patient.name} />
      <TableCell content={patient.sex} />
      <TableCell content={patient.age} />
      <TableCell content={patient.dob.toLocaleDateString()} />
      <TableCell content={patient.email} />
      <TableCell content={patient.insurance} />
      <TableCell
        content={patient.allergies ? patient.allergies.join(", ") : "None"}
      />
    </tr>
  );
};

const PatientTable: React.FC<PatientTableProps> = ({ patient }) => {
  return (
    <table className="min-w-full leading-normal border-collapse mt-5">
      <thead>
        <tr>
          <TableHeader title="ID" />
          <TableHeader title="Name" />
          <TableHeader title="Sex" />
          <TableHeader title="Age" />
          <TableHeader title="DOB" />
          <TableHeader title="Email" />
          <TableHeader title="Insurance" />
          <TableHeader title="Allergies" />
        </tr>
      </thead>
      <tbody>
        <PatientRow patient={patient} />
      </tbody>
    </table>
  );
};

export default PatientTable;
