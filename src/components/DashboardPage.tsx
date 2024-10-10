import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-purple-900">Welcome, {user.name}</h1>
          <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Premium Plan
          </div>
        </div>
        
        <Link to="/chat" className="block bg-purple-600 text-white py-4 px-6 rounded-lg mb-8 text-center text-xl font-semibold hover:bg-purple-700 transition duration-300">
          Start New Chat
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: +1234567890</p>
            <label className="flex items-center mt-4">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
              <span className="ml-2 text-sm">Receive marketing emails</span>
            </label>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Subscription</h2>
            <p>Current Plan: Premium</p>
            <p>Next billing date: 01/05/2024</p>
            <div className="mt-4 space-x-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">
                Change Plan
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
                Cancel Subscription
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Chat History</h2>
            <ul className="space-y-2">
              <li>Session 1 - 01/04/2024</li>
              <li>Session 2 - 31/03/2024</li>
              <li>Session 3 - 30/03/2024</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300 mb-4">
              Update Password
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
              Delete Account
            </button>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;