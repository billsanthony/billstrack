const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Express Middleware
app.use(express.static('public'));

// Dummy Athletes Data (Replace with MongoDB)
const athletes = [
    { name: 'Athlete 1', sport: 'Football', age: 25 },
    { name: 'Athlete 2', sport: 'Basketball', age: 28 },
    // Add more athletes
];

// API Endpoint to Fetch Athletes
app.get('/api/athletes', (req, res) => {
    res.json(athletes);
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
