const express = require('express');
const { connectToMongoDB } = require('./config/db'); 
const app = express();
const port = 3000;

const indexRoutes = require('./routes/index');

// Start Express app after connecting to MongoDB
connectToMongoDB()
  .then(() => {
    // Add routes and other configurations here
    app.use('/', indexRoutes);

    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })
  .catch(error => {
    console.error("Unable to start the server:", error);
    process.exit(1); // Exit the process with a failure code
});
