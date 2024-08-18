const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // Changed to 5000

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB database connection established successfully"))
.catch(err => console.log("MongoDB connection error: ", err));

// Define routes here
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${port} is already in use. Please choose a different port.`);
  } else {
    console.log('An error occurred while starting the server:', err);
  }
});