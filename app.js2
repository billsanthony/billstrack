// Firebase Configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBtQzEWXzrd2Ol-yBaw0OKCFTxgysyroLQ',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'stats-app-dbbee',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'stats-app'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Auth Form Elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Authentication Functions
const registerUser = async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('User registered:', userCredential.user);
    } catch (error) {
        console.error('Error registering user:', error.message);
    }
};

const loginUser = async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('User logged in:', userCredential.user);
    } catch (error) {
        console.error('Error logging in:', error.message);
    }
};

const logoutUser = async () => {
    try {
        await firebase.auth().signOut();
        console.log('User logged out');
    } catch (error) {
        console.error('Error logging out:', error.message);
    }
};

// Include Athlete API Code (to be implemented)

// Fetch Athletes from Backend
const fetchAthletes = async () => {
    try {
        const response = await fetch('/api/athletes'); // Update with your backend endpoint
        const data = await response.json();
        console.log('Fetched athletes:', data);
    } catch (error) {
        console.error('Error fetching athletes:', error.message);
    }
};
