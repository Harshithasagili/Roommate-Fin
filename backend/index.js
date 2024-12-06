const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory data store
let roommates = [];

// API Endpoints
app.get('/', (req, res) => {
  res.send('Welcome to the Roommate Finder API!');
});

// Add a roommate post
app.post('/api/roommates', (req, res) => {
    const { name, number, budget, preferences, searchType } = req.body;
  
    // Validation
    if (!name || !number || !budget || !preferences || !searchType) {
      return res.status(400).send({ message: 'All fields are required.' });
    }
  
    const roommate = { name, number, budget, preferences, searchType };
    roommates.push(roommate);
  
    res.status(201).send({ message: 'Roommate added successfully', roommate });
  });
  
// Get roommate listings
app.get('/api/roommates', (req, res) => {
  res.json(roommates);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
