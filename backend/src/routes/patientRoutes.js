const express = require('express');
const router = express.Router();
const { testAddToCollection } = require('../services/dataOperations');

// Define route to test adding a record to the collection
router.post('/addRecord', async (req, res) => {
    try {
        // Call the testAddToCollection function to add a record
        const insertedId = await testAddToCollection();
        res.status(200).json({ insertedId });
    } catch (error) {
        console.error("Error adding record:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
