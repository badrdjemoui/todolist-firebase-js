// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBZaL",
  authDomain: "todo-react-js-2024.firebaseapp.com",
  projectId: "todo-react-js-2024",
  storageBucket: "todo-react-js-2024.firebasestorage.app",
  messagingSenderId: "105240",
  appId: "1:1052406:web:bd9884e60c42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Firebase

const db = getFirestore(app);

// Reference to the "tasks" collection
const tasksCollection = collection(db, "tasks");

export { db, tasksCollection };
