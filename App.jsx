// App.js
import React from 'react'; // Importing React library
import AddTask from './components/AddTask'; // Importing AddTask component for adding tasks
import TaskList from './components/TaskList'; // Importing TaskList component for displaying tasks

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1> {/* Displaying the main title of the app */}
      <AddTask /> {/* Rendering the AddTask component to allow users to add tasks */}
      <TaskList /> {/* Rendering the TaskList component to show the list of tasks */}
    </div>
  );
};

export default App; // Exporting the App component to be used in the main entry point (index.js)
