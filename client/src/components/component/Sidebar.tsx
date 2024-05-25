//import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-6">
      <Link to="/" className="block py-2 px-4 mb-2 bg-gray-700 rounded hover:bg-gray-600">Home</Link>
      <div className="mb-2">
        <button
          onClick={toggleDropdown}
          className="w-full text-left py-2 px-4 bg-gray-700 rounded hover:bg-gray-600 flex justify-between items-center"
        >
          Manage Users
          <svg
            className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="mt-2 pl-4">
            <Link to="/all-users" className="block py-2 px-4 bg-gray-600 rounded hover:bg-gray-500">All Users</Link>
            <Link to="/add-user" className="block py-2 px-4 mt-2 bg-gray-600 rounded hover:bg-gray-500">Add a User</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;


// // const Sidebar: React.FC = () => {
// //   return (
// //     <div className="sidebar">
// //       <Link to="/" className="sidebar-link">Home</Link>
// //       <Link to="/manage-users" className="sidebar-link">Manage Users</Link>
// //       <Link to="/profile" className="sidebar-link">Profile</Link>
// //     </div>
// //   );
// // };

// // export default Sidebar;

// // import React from 'react';
// // import { Link } from 'react-router-dom';

// const Sidebar: React.FC = () => {
//   return (
//     <div className="w-64 bg-gray-800 text-white min-h-screen p-6">
//       <Link to="/" className="block py-2 px-4 mb-2 bg-gray-700 rounded hover:bg-gray-600">Home</Link>
//       <Link to="/manage-users" className="block py-2 px-4 mb-2 bg-gray-700 rounded hover:bg-gray-600">Manage Users</Link>
//       <Link to="/profile" className="block py-2 px-4 mb-2 bg-gray-700 rounded hover:bg-gray-600">Profile</Link>
//     </div>
//   );
// };

// export default Sidebar;
