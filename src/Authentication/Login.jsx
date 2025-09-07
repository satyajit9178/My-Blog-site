import { useState } from "react";

const Login = ({ onClose, switchToSignup }) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    // Get user credentials from localStorage
    const registeredUser = JSON.parse(localStorage.getItem("user")) || {};

    if (
      input.email === registeredUser.email &&
      input.password === registeredUser.password
    ) {
      // Save login session
      localStorage.setItem("loggedIn",true);
      onClose(); // close modal
      alert("Login successful ✅");
      window.location.reload(); // refresh to update Navbar
    } else {
      alert("❌ Wrong Email or Password");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4 border-2 border-gray-300 p-6 rounded-2xl w-96 shadow-lg bg-white relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-black"
        >
          ✖
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800">Login Form</h2>

        {/* Inputs */}
        <input
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
          className="border-gray-200 border-2 w-full p-2 rounded text-black  placeholder-gray-500 placeholder-opacity-100"
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

        {/* Forget password */}
        <div className="flex justify-end w-full">
          <p className="text-blue-400 cursor-pointer text-sm">
            Forget password?
          </p>
        </div>

        {/* Submit Button */}
        <button
          className="bg-blue-950 text-white w-full p-2 rounded hover:bg-blue-800"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Switch to Signup */}
        <div className="flex flex-row gap-1 text-sm text-black">
          <p>Not a member?</p>
          <span
            className="text-blue-400 cursor-pointer"
            onClick={switchToSignup}
          >
            Signup now
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
