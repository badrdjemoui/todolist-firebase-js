// AddTask.js

import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { tasksCollection } from './firebaseConfig';

const AddTask = () => {
  const [taskName, setTaskName] = useState("");

  // Function to add task to Firestore
  const addTask = async () => {
    if (taskName.trim()) {
      try {
        await addDoc(tasksCollection, { name: taskName, completed: false });
        setTaskName(""); // Clear the input field after adding the task
        alert("Task added successfully!");
      } catch (error) {
        console.error("Error adding task: ", error);
        alert("Failed to add task");
      }
    } else {
      alert("Please enter a task name");
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        placeholder="Enter task name"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
