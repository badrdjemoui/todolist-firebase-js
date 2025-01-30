import { StrictMode } from 'react'; // Importing StrictMode from React for additional checks and warnings in development
import { createRoot } from 'react-dom/client'; // Importing createRoot for rendering the app in the DOM
import './index.css'; // Importing global CSS for the app
import App from "./App"; // Importing the main App component

// Creating a root and rendering the App component wrapped in StrictMode for development mode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Rendering the App component inside StrictMode for better development feedback */}
  </StrictMode>,
);
