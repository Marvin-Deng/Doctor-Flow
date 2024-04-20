const {client} = require('../config/db');
const databaseName = "Doctor-Flow"; // Your database name
const collectionName = "PatientRecords"; // Your collection name

async function addPatientToDatabase(patientData) {
    try {
        // Connect to MongoDB
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);

        // Insert the patient data into the collection
        const result = await collection.insertOne(patientData);
        return result.insertedId;
    } catch (error) {
        console.error("Error adding patient to database:", error);
        throw error;
    }
}

async function deletePatientById(patientId) {
    try {
        const database = client.db(databaseName);
        const collection = database.collection(collectionName);

        // Delete the patient with the given ID from the collection
        const result = await collection.deleteOne({ _id: patientId });

        // Check if a patient was deleted
        if (result.deletedCount === 1) {
            // Return the deleted patient if deletion was successful
            return { _id: patientId };
        } else {
            // If no patient was deleted (maybe the patient with the given ID doesn't exist),
            // return null or throw an error depending on your application's requirements
            return null;
        }
    } catch (error) {
        // Handle any errors that occur during the deletion process
        console.error("Error deleting patient:", error);
        throw error;
    }
}


module.exports = { addPatientToDatabase, deletePatientById };
