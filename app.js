// Dummy Athletes Data
const athletes = [
    { name: 'Cristiano Ronaldo', sport: 'Football', gender: 'Male', age: 36 },
    { name: 'Lionel Messi', sport: 'Football', gender: 'Male', age: 34 },
    { name: 'Serena Williams', sport: 'Tennis', gender: 'Female', age: 40 },
    { name: 'Usain Bolt', sport: 'Track and Field', gender: 'Male', age: 35 },
    { name: 'Simone Biles', sport: 'Gymnastics', gender: 'Female', age: 24 },
    { name: 'LeBron James', sport: 'Basketball', gender: 'Male', age: 37 },
    { name: 'Roger Federer', sport: 'Tennis', gender: 'Male', age: 40 },
    { name: 'Tom Brady', sport: 'American Football', gender: 'Male', age: 44 },
    { name: 'Naomi Osaka', sport: 'Tennis', gender: 'Female', age: 24 },
    { name: 'Novak Djokovic', sport: 'Tennis', gender: 'Male', age: 34 },
];

function searchAthlete() {
    const athleteName = document.getElementById('athleteNameInput').value;
    const sportCategory = document.getElementById('sportCategoryInput').value;
    const gender = document.getElementById('genderInput').value;

    const resultBox = document.getElementById('resultBox');
    resultBox.innerHTML = '';

    const filteredAthletes = athletes.filter(athlete =>
        athlete.name.toLowerCase().includes(athleteName.toLowerCase()) &&
        athlete.sport.toLowerCase().includes(sportCategory.toLowerCase()) &&
        athlete.gender.toLowerCase().includes(gender.toLowerCase())
    );

    if (filteredAthletes.length > 0) {
        resultBox.innerHTML = '<h3>Search Results:</h3>';
        resultBox.innerHTML += '<table>';
        resultBox.innerHTML += '<tr><th>Name</th><th>Sport</th><th>Gender</th><th>Age</th></tr>';
        for (const athlete of filteredAthletes) {
            resultBox.innerHTML += `<tr><td>${athlete.name}</td><td>${athlete.sport}</td><td>${athlete.gender}</td><td>${athlete.age}</td></tr>`;
        }
        resultBox.innerHTML += '</table>';
    } else {
        resultBox.innerHTML = '<p>No results found.</p>';
    }
}

function showRandomPerformances() {
    const randomAthlete = generateRandomAthlete();
    displayResult(randomAthlete);
}

function showNewTabPerformances() {
    const randomAthlete = generateNewTabRandomAthlete();
    displayResult(randomAthlete);
}

function displayResult(athlete) {
    const resultBox = document.getElementById('resultBox');
    resultBox.innerHTML = '<h3>Result:</h3>';
    resultBox.innerHTML += '<table>';
    resultBox.innerHTML += '<tr><th>Name</th><th>Sport</th><th>Gender</th><th>Age</th></tr>';
    resultBox.innerHTML += `<tr><td>${athlete.name}</td><td>${athlete.sport}</td><td>${athlete.gender}</td><td>${athlete.age}</td></tr>`;
    resultBox.innerHTML += '</table>';
}

function generateRandomAthlete() {
    // Your existing code for generating random athlete data
}

function generateNewTabRandomAthlete() {
    // Your existing code for generating random athlete data for the new tab
}
