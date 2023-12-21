// Your existing code...

// Function to fetch athletes from the backend
const fetchAthletes = async () => {
    try {
        const response = await fetch('/api/athletes'); // Update with your backend endpoint
        const data = await response.json();
        console.log('Fetched athletes:', data);
    } catch (error) {
        console.error('Error fetching athletes:', error.message);
    }
};
