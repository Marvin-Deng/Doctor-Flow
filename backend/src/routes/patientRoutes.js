const express = require('express');
const router = express.Router();
const { addPatientToDatabase, deletePatientById } = require('../services/dataOperations');

// Define route to create a new patient
router.post('/addPatient', async (req, res) => {
    try {
        // Extract patient data from the request body
        const { name, sex, age, dob, email, insurance, allergies } = req.body;

        // Create patient data object
        const patientData = {
            name,
            sex,
            age,
            dob,
            email,
            insurance,
            allergies
        };

        const insertId = await addPatientToDatabase(patientData);

        // Return the created patient document ID as the response
        res.status(201).json({ insertId });
    } catch (error) {
        console.error("Error creating patient:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.delete('/deletePatient', async (req, res) => {
    try {
        const { id } = req.body; // Extract patient ID from request body
        if (!id) {
            // If ID is not provided in the request body, return a bad request response
            return res.status(400).json({ error: "Patient ID is required" });
        }
        const deletedPatient = await deletePatientById(id);

        if (!deletedPatient) {
            // If the patient with the given ID does not exist, return a not found response
            return res.status(404).json({ error: "Patient not found" });
        }
        // If deletion is successful, return a success response
        res.status(200).json({ message: "Patient deleted successfully", deletedPatient });
    } catch (error) {
        console.error("Error deleting patient:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;
