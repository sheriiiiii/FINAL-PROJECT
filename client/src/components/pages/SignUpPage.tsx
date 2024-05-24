import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUpPage.css";

const SignUpPage = () => {

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/user-info");
  };

  return (
    <div className="signup-background">
      <div className="w-full max-w-md glassmorphism">
        <h2 className="text-2xl text-white font-bold text-center mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
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
            <label
              className="block text-white text-sm mb-2"
              htmlFor="password"
            >
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
              className="bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="inline-block align-baseline text-sm text-white hover:text-gray-400 mt-2"
              onClick={() => navigate("/login")}
            >
              Already have an account? Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
