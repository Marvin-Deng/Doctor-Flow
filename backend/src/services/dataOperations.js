const {connectToMongoDB, client} = require('../config/db');

async function testAddToCollection() {
    try {
        // Connect to MongoDB
        const databaseName = "Doctor-Flow"; // Your database name
        const collectionName = "PatientRecords"; // Your collection name

        // Sample document to insert
        const document = {
            name: "John Doe",
            age: 30,
            email: "john@example.com"
        };

        const database = client.db(databaseName);
        const collection = database.collection(collectionName);

        // Insert the document into the collection
        const result = await collection.insertOne(document);
        console.log("Document inserted successfully:", result.insertedId);

        return result.insertedId; // Return the ID of the inserted document
    } catch (error) {
        console.error("Error adding record to collection:", error);
        throw error;
    } 
}

module.exports = { testAddToCollection };
