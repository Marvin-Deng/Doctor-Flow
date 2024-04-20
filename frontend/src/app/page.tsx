import Image from "next/image";
import MedTable from "../components/MedTable"
import NewPatientForm from "../components/NewPatientForm"

export default function Home() {
  return (
    <main>
      <MedTable />
      <NewPatientForm />
    </main>
  );
}
