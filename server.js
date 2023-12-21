const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Express Middleware
app.use(express.static('public'));

// Dummy Athletes Data (Replace with MongoDB)
const athletes = generateRandomAthletes(50);

// API Endpoint to Fetch Athletes
app.get('/api/athletes', (req, res) => {
    res.json(athletes);
});

// Function to generate random athlete data
function generateRandomAthletes(count) {
    const sports = ['Football', 'Basketball', 'Tennis', 'Swimming', 'Golf'];
    const genders = ['Male', 'Female'];

    const randomAthletes = [];
    for (let i = 1; i <= count; i++) {
        const randomSport = sports[Math.floor(Math.random() * sports.length)];
        const randomGender = genders[Math.floor(Math.random() * genders.length)];

        const athlete = {
            name: `Athlete ${i}`,
            sport: randomSport,
            gender: randomGender,
            age: Math.floor(Math.random() * 10) + 20, // Random age between 20 and 29
            // Add more athlete details as needed
        };

        randomAthletes.push(athlete);
    }

    return randomAthletes;
}

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
