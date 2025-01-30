import React, { useState, useEffect } from 'react';
import { db, tasksCollection } from './firebaseConfig'; // Make sure this import is correct
import { collection, getDocs } from 'firebase/firestore';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const taskSnapshot = await getDocs(tasksCollection);
      const taskList = taskSnapshot.docs.map(doc => doc.data());
      setTasks(taskList);
    };
    
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
