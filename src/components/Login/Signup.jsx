import React, { useState } from "react";


import Eye from "../../assets/eye.png"
import Eye2 from "../../assets/eye2.png"
import { Link } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
  };

  return (
    <div className="flex md:flex-row-reverse items-center justify-center h-screen bg-gray-100">
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 hidden lg:flex flex-row-reverse">
   
      </div>

      {/* Form Container */}
      <div className="md:w-1/2 lg:w-1/3 bg-white shadow-lg p-8 rounded-md">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>

        {/* Name Input */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-indigo-500"
            id="nameInput"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-indigo-500"
            id="emailInput"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-indigo-500"
            id="passwordInput"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? (
              <img src={Eye} alt="" className="h-5"/>
            ) : (
              <img src={Eye2} alt="" className="h-5"/>
            )}
          </span>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4">
          <input
            type="password"
            className="w-full px-4 py-2 rounded border focus:outline-none focus:border-indigo-500"
            id="confirmPasswordInput"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Sign Up Button */}
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>

        {/* OR Divider */}
        <div className="my-4 flex items-center">
          <hr className="flex-1 border-t border-gray-300" />
          <p className="mx-4 mb-0 text-center font-semibold text-gray-700">OR</p>
          <hr className="flex-1 border-t border-gray-300" />
        </div>

        {/* Continue with Google */}
        <div className="mb-6 text-lg font-semibold rounded-md w-full bg-white border border-indigo-500 text-indigo-600 flex items-center justify-center p-4">
          <img
            className="w-8 h-full mr-2"
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt=""
          />
          <span>Continue with Google</span>
        </div>

        {/* Don't have an account */}
        <div className="text-lg text-center font-semibold rounded-md w-full bg-white border border-indigo-500 text-indigo-600 p-4">
          
          <Link to="/signin" className="text-center">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
