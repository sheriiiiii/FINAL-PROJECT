import { useState } from 'react';
import '../styles/InfoPage.css';

const InfoPage = () => {
  const [userType, setUserType] = useState('retailer');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="info-background">
      <div className="glassmorphism">
        <h2 className="text-2xl text-white font-bold text-center mb-6">User Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="user-type">
              User Type
            </label>
            <select
              id="user-type"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="retailer">Retailer</option>
              <option value="distributor">Distributor</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoPage;
