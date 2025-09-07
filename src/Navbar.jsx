import { NavbarData } from "./Data/NavbarData";
import { NavLink, Link ,useNavigate  } from "react-router-dom";
import { FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";


const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("loggedIn"));

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="font-semibold text-xl">
          Design<span className="text-blue-500">DK</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-lg">
          {NavbarData.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 font-semibold text-lg underline underline-offset-4"
                  : "text-white font-medium text-lg"
              }
            >
              {link.title}
            </NavLink>
          ))}
        </ul>

        {/* Desktop Icons + Login/Logout */}
        <div className="hidden md:flex gap-4 items-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FaDribbble />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <FaTwitter />
          </a>

          {currentUser ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 font-medium rounded hover:text-red-500 hover:bg-white transition-all duration-200"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="px-4 py-2 bg-orange-500 font-medium rounded hover:text-orange-500 hover:bg-white transition-all duration-200"
            >
              Log in
            </button>
          )}
        </div>

        {/* Hamburger Button (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-full bg-black z-40 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col gap-6 px-6 mt-12">
          {NavbarData.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 font-semibold text-xl underline underline-offset-4"
                  : "text-white font-medium text-xl"
              }
            >
              {link.title}
            </NavLink>
          ))}
        </ul>
      </div>

      {/* 🔹 Modals */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          switchToSignup={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }}
        />
      )}

      {showSignUp && (
        <Signup
          onClose={() => setShowSignUp(false)}
          switchToLogin={() => {
            setShowSignUp(false);
            setShowLogin(true);
          }}
        />
      )}
    </header>
  );
};

export default Navbar;
