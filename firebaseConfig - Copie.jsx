// firebaseConfig.js

import { initializeApp } from "firebase/app"; // Importing the Firebase initialization function
import { getFirestore, collection } from "firebase/firestore"; // Importing Firestore functions to interact with the database

// Firebase configuration object containing credentials and identifiers for your Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyBZaL", // API key for authenticating requests to Firebase
  authDomain: "todo-react-js-2024.firebaseapp.com", // Domain for authentication
  projectId: "todo-react-js-2024", // Firebase project ID
  storageBucket: "todo-react-js-2024.firebasestorage.app", // Storage bucket URL
  messagingSenderId: "105240", // Sender ID for Firebase Cloud Messaging
  appId: "1:1052406:web:bd9884e60c42" // Unique Firebase app ID
};

// Initialize Firebase with the provided configuration
const app = initializeApp(firebaseConfig);

// Initialize Firestore database instance
const db = getFirestore(app);

// Reference to the "tasks" collection in Firestore
const tasksCollection = collection(db, "tasks");

export { db, tasksCollection }; // Export the Firestore instance and tasks collection reference for use in other parts of the app

