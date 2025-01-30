import React, { useState, useEffect } from 'react';
import { db, tasksCollection } from './firebaseConfig'; // Import Firebase configuration and tasks collection reference
import { collection, getDocs } from 'firebase/firestore'; // Import Firebase Firestore functions

const TaskList = () => {
  const [tasks, setTasks] = useState([]); // State to store tasks fetched from Firestore

  useEffect(() => {
    // Function to fetch tasks from Firestore
    const fetchTasks = async () => {
      const taskSnapshot = await getDocs(tasksCollection); // Get snapshot of tasks collection
      const taskList = taskSnapshot.docs.map(doc => doc.data()); // Extract data from each document
      setTasks(taskList); // Update state with the task data
    };

    fetchTasks(); // Call the function to fetch tasks on component mount
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {/* Render the list of tasks */}
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li> // Render each task's name
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

