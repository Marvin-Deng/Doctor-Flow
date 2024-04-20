const express = require('express');
const { connectToMongoDB } = require('./config/db'); 
const app = express();
const port = 3000;
const patientRoutes = require('./routes/patientRoutes');

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'Eu4LLF4/h/zNAvzzqB16oQmOI4fVrWyQ6uIbLMh0I1M=',
  baseURL: 'http://localhost:3000/login',
  clientID: 'd3AG5pNNKpHPll1aRjqypWq8R5vn6NiS',
  issuerBaseURL: 'https://dev-xdx10w8664v1a2yz.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Middleware for parsing request bodies (you can choose between body-parser or express.json())
app.use(express.json());

// Start Express app after connecting to MongoDB
connectToMongoDB()
  .then(() => {
    // Add routes and other configurations here
    app.use('/patients', patientRoutes);

    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })
  .catch(error => {
    console.error("Unable to start the server:", error);
    process.exit(1); // Exit the process with a failure code
});
