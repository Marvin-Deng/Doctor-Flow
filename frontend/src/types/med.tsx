export default interface Medicine {
  id: number;
  rx: string;
  dose: number;
  unit: string;
  condition?: string;
  prescriber: string;
  pharmacy: string;
  notes?: string;
  schedule?: string;
  drp?: string;
}