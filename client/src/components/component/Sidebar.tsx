import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/Sidebar.css';

const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar w-64 bg-gray-800 text-white min-h-screen p-6">
      <Link to="/homepage" className="sidebar-link block py-2 px-4 mb-2 bg-gray-700 rounded hover:bg-gray-600">
        <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
        <span className="sidebar-text ml-2">Home</span>
      </Link>
      <div className="mb-2">
        <button onClick={toggleDropdown} className="sidebar-button w-full text-left py-2 px-4 bg-gray-700 rounded hover:bg-gray-600 flex items-center justify-between">
          <div className="sidebar-button-content flex items-center">
            <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
            <span className="sidebar-text ml-2">Manage Users</span>
          </div>
          <svg
            className={`dropdown-icon w-4 h-4 ml-2 transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content mt-2">
            <Link to="/all-users" className="dropdown-link block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">All Users</Link>
            <Link to="/add-user" className="dropdown-link block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600 mt-2">Add a User</Link>
          </div>
        )}
      </div>
      <Link to="/edit-profile" className="sidebar-link block py-2 px-4 mb-2 bg-gray-700 rounded hover:bg-gray-600">
        <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
        <span className="sidebar-text ml-2">Edit Profile</span>
      </Link>
    </div>
  );
};

export default Sidebar;
