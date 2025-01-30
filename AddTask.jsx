// AddTask.js

import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { tasksCollection } from './firebaseConfig'; // Import Firebase configuration for the tasks collection

const AddTask = () => {
  const [taskName, setTaskName] = useState(""); // State to store the task name input

  // Function to add task to Firestore
  const addTask = async () => {
    if (taskName.trim()) { // Check if the task name is not empty or just whitespace
      try {
        // Add the task document to Firestore
        await addDoc(tasksCollection, { name: taskName, completed: false });
        setTaskName(""); // Clear the input field after adding the task
        alert("Task added successfully!"); // Show success message
      } catch (error) {
        console.error("Error adding task: ", error); // Log any error to the console
        alert("Failed to add task"); // Show error message if task fails to be added
      }
    } else {
      alert("Please enter a task name"); // Prompt the user if no task name is entered
    }
  };

  return (
    <div>
      {/* Input field for task name */}
      <input 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} // Update taskName state as user types
        placeholder="Enter task name"
      />
      {/* Button to trigger task addition */}
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTask;

