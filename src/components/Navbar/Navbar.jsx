import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaWhatsapp } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* upper Navbar */}
        <div className="py-0">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-[100px] h-[70px]" />
              </a>
            </div>

            {/* search bar */}
            <div className="flex justify-between items-center gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>

              {/* order button */}
              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

              {/* Darkmode Switch */}
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923092972551" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50 transition-transform hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </>
  );
};

export default Navbar;
