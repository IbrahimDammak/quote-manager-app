// frontend/src/components/Sidebar.jsx
import React from 'react';
import { FaHome, FaFileAlt, FaBox, FaCog, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col  bg-gray-800 text-white w-64 p-4">
      <div className="flex flex-col gap-4">
        {/* Dashboard */}
        <Link to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
          <FaHome />
          <span>Dashboard</span>
        </Link>

        {/* Quotes History */}
        <Link to="/quotes-history" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
          <FaFileAlt />
          <span>Quotes History</span>
        </Link>

        {/* Articles */}
        <Link to="/articles" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
          <FaBox />
          <span>Articles</span>
        </Link>

        {/* Settings */}
        <Link to="/settings" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
          <FaCog />
          <span>Settings</span>
        </Link>

        {/* Account */}
        <Link to="/account" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
          <FaUser />
          <span>Account</span>
        </Link>
      </div>

      {/* Log Out Button */}
      <div className="mt-auto">
        <button className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-700 rounded">
          <FaSignOutAlt />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
