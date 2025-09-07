import React, { useState } from "react";

const Signup = ({ onClose, switchToLogin }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Save user in localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    onClose(); // close modal after signup
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      {/* Modal box */}
      <div className="relative flex flex-col items-center gap-4 border border-gray-300 p-6 rounded-2xl w-96 shadow-2xl bg-white">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-black"
        >
          ✖
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Signup Form
        </h2>

        {/* Inputs */}
        <input
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          className="border-gray-300 border-2 w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500  placeholder-gray-500 placeholder-opacity-100 text-black "
          name="name"
          value={input.name}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          className="border-gray-300 border-2 w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500  placeholder-gray-500 placeholder-opacity-100 text-black "
          name="email"
          value={input.email}
          type="email"
          placeholder="Email Address"
        />
        <input
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          className="border-gray-200 border-2 w-full p-2 rounded text-black  placeholder-gray-500 placeholder-opacity-100"
          name="password"
          value={input.password}
          type="password"
          placeholder="Password"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-950 text-white w-full p-2 rounded hover:bg-blue-800 transition"
        >
          Signup
        </button>

        {/* Bottom message */}
        <div className="flex flex-row gap-1 text-black">
          <p>Already a member?</p>
          <p
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={switchToLogin}
          >
            Login here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
