const express = require('express');
const mongoose = require('mongoose');
const dataRouter = require('./Router'); // Update this path based on the actual location of your router file

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Assignment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/data', dataRouter); // Use '/api/data' as the base path

// Start the server
app.listen(9000, () => {
  console.log(`Server is running on port 9000`);
});