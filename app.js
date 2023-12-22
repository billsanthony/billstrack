document.addEventListener('DOMContentLoaded', () => {
    // Fetch random athlete names from the database
    const randomNames = [
        'Cristiano Ronaldo', 'Lionel Messi', 'Neymar Jr.', 'Robert Lewandowski', 'Mohamed Salah',
        'Usain Bolt', 'Serena Williams', 'Michael Phelps', 'Simone Biles', 'Floyd Mayweather'
    ];

    // Populate the dropdowns with random names
    const dropdowns = ['athleteNameDropdown', 'sportCategoryDropdown', 'genderDropdown'];
    dropdowns.forEach(id => populateDropdown(id, randomNames));

    // Attach event listeners
    document.getElementById('searchButton').addEventListener('click', searchAthlete);
    document.getElementById('randomSearchButton').addEventListener('click', showRandomPerformances);
    document.getElementById('newTabButton').addEventListener('click', showNewTabPerformances);
});

function populateDropdown(dropdownId, options) {
    const dropdown = document.getElementById(dropdownId);
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
    });
}

function searchAthlete() {
    const athleteName = getValueOrInput('athleteNameDropdown', 'athleteNameInput');
    const sportCategory = getValueOrInput('sportCategoryDropdown', 'sportCategoryInput');
    const gender = getValueOrInput('genderDropdown', 'genderInput');

    const resultBox = document.getElementById('resultBox');
    resultBox.innerHTML = '';

    const filteredAthletes = athletes.filter(athlete =>
        athlete.name.toLowerCase().includes(athleteName.toLowerCase()) &&
        athlete.sport.toLowerCase().includes(sportCategory.toLowerCase()) &&
        athlete.gender.toLowerCase().includes(gender.toLowerCase())
    );

    displayResults(filteredAthletes);
}

function showRandomPerformances() {
    const randomAthlete = generateRandomAthlete();
    displayResults([randomAthlete]);
}

function showNewTabPerformances() {
    const randomAthlete = generateNewTabRandomAthlete();
    displayResults([randomAthlete]);
}

function getValueOrInput(dropdownId, inputId) {
    const dropdown = document.getElementById(dropdownId);
    const input = document.getElementById(inputId);
    return dropdown.value || input.value;
}

function displayResults(athletes) {
    const resultBox = document.getElementById('resultBox');
    resultBox.innerHTML = '<h3>Result:</h3>';
    if (athletes.length > 0) {
        resultBox.innerHTML += '<table>';
        resultBox.innerHTML += '<tr><th>Name</th><th>Sport</th><th>Gender</th><th>Age</th></tr>';
        athletes.forEach(athlete => {
            resultBox.innerHTML += `<tr><td>${athlete.name}</td><td>${athlete.sport}</td><td>${athlete.gender}</td><td>${athlete.age}</td></tr>`;
        });
        resultBox.innerHTML += '</table>';
    } else {
        resultBox.innerHTML += '<p>No results found.</p>';
    }
}

function generateRandomAthlete() {
    const randomIndex = Math.floor(Math.random() * athletes.length);
    return athletes[randomIndex];
}

function generateNewTabRandomAthlete() {
    // Your existing code for generating random athlete data for the new tab
    return generateRandomAthlete();
}
