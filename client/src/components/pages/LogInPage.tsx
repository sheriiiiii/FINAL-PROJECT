//import React from 'react';
import '../styles/LogInPage.css'; // Correct path

const LogInPage = () => {
  return (
    <div className="login-background">
      <div className="w-full max-w-md glassmorphism">
        <h2 className="text-2xl text-white font-bold text-center mb-6">Log In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col items-center mb-2">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6 w-full"
            >
              Log In
            </button>
            <a
              className="inline-block align-baseline text-sm text-white hover:text-gray-400"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
