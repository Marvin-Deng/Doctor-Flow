'use client';
import React, { useState } from 'react';
import InputForm from './InputForm';

const NewPatientForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [medicines, setMedicines] = useState([{ name: '', dosage: '' }]);

    const handleAddMedicine = () => {
        setMedicines((prevMedicines) => [...prevMedicines, { name: '', dosage: '' }]);
    };

    const handleRemoveMedicine = (index: number) => {
        setMedicines((prevMedicines) => prevMedicines.filter((medicine, i) => i !== index));
    };

    const handleMedicineChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setMedicines((prevMedicines) =>
            prevMedicines.map((medicine, i) =>
                i === index ? { ...medicine, [name]: value } : medicine
            )
        );
    };

    return (
        <div className="form-container">
            <div className="form-content">
                <InputForm
                    label="Name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <InputForm
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {medicines.map((medicine, index) => (
                    <div key={index} className="medicine-form">
                        <InputForm
                            label="Medicine Name"
                            type="text"
                            placeholder="Enter medicine name"
                            value={medicine.name}
                            onChange={(e) => handleMedicineChange(index, e)}
                        />
                        <InputForm
                            label="Dosage"
                            type="text"
                            placeholder="Enter dosage"
                            value={medicine.dosage}
                            onChange={(e) => handleMedicineChange(index, e)}
                        />
                        <button onClick={() => handleRemoveMedicine(index)}>Remove</button>
                    </div>
                ))}
                <button onClick={handleAddMedicine}>Add Medicine</button>
            </div>
        </div>
    );
};

export default NewPatientForm;
