import Medication from "./med"

export default interface Patient {
    id: string;
    name: string;
    sex: string;
    age: number;
    dob: Date;
    email: string;
    insurance: string;
    allergies?: string[];
    medications: Medication[];
  }
  