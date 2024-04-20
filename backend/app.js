const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = 3000;

// MongoDB connection URI
const uri = "mongodb+srv://genekung428:5vDW33eDgRjoqLZA@cluster0.fixbrar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    // Return the connected client
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    throw error;
  }
}

// Start Express app after connecting to MongoDB
connectToMongoDB()
  .then(() => {
    // Add routes and other configurations here
    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })
  .catch(error => {
    console.error("Unable to start the server:", error);
    process.exit(1); // Exit the process with a failure code
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})
