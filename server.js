require('dotenv').config();  // Load environment variables
const express = require('express');
const connectDB = require('./config/databaseConfig');  // Import the connectDB function

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to the MongoDB database
connectDB();

// Define a simple route (GET request)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server using the port from the .env file
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
