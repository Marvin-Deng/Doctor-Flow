import Medication from "./Med";

export default interface Patient {
  id: number;
  name: string;
  sex: string;
  age: number;
  dob: Date;
  email: string;
  insurance: string;
  allergies?: string[];
  medications: Medication[];
}
