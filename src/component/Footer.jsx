import React from "react";
import {FaDribbble, FaFacebook, FaInstagram, FaTwitter, FaXmark } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="flex flex-wrap justify-between gap-8">
          
          {/* Category */}
          <div>
            <p className="font-medium tracking-wide text-gray-300">Category</p>
            <ul className="mt-2 space-y-2">
              <li><a className="text-gray-500 hover:text-orange-500" href="">News</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">World</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">Games</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">References</a></li>
            </ul>
          </div>

          {/* Apples */}
          <div>
            <p className="font-medium tracking-wide text-gray-300">Apples</p>
            <ul className="mt-2 space-y-2">
              <li><a className="text-gray-500 hover:text-orange-500" href="">Web</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">eCommerce</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">Business</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">Entertainment</a></li>
            </ul>
          </div>

          {/* Cherry */}
          <div>
            <p className="font-medium tracking-wide text-gray-300">Cherry</p>
            <ul className="mt-2 space-y-2">
              <li><a className="text-gray-500 hover:text-orange-500" href="">Media</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">Brochure</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">NonProfit</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">Education</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">Projects</a></li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <p className="font-medium tracking-wide text-gray-300">Business</p>
            <ul className="mt-2 space-y-2">
              <li><a className="text-gray-500 hover:text-orange-500" href="">Personal</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">Wiki</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">Services</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">Forum</a></li>
              <li><a className="text-gray-500 hover:text-orange-500" href="">Community</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="max-w-sm w-full">
            <p className="font-medium tracking-wide text-gray-300">Subscribe for updates</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Enter your email"
                className="flex-grow h-12 px-4 mb-3 sm:mb-0 bg-white border border-gray-300 rounded shadow-sm focus:border-orange-400 focus:outline-none" 
              />
              <button 
                type="submit" 
                className="h-12 px-6 font-medium tracking-wide text-white bg-orange-600 rounded shadow-md hover:bg-orange-500 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">&copy; Copyright 2025 | All right reserved.</p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaTwitter className="h-6 w-6"/></a>

             <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaFacebook className="h-6 w-6"/></a>

              <a href="" className="text-gray-500 transition-all duration-300 hover:text-orange-500"><FaInstagram className="h-6 w-6"/></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
