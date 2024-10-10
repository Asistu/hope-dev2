import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './tailwind.css'; // Import Tailwind CSS here

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mt-6">
          Welcome to Hope AI
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          We are here to support you in your journey to recovery.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Get Support
        </button>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
