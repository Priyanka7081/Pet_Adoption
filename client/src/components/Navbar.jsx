import React, { useState } from "react";
import logo from "../assets/attachment_81886229.jpeg";
import { FaCartPlus } from "react-icons/fa";
import { Link, NavLink,useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm,setSearchTerm]=useState("");
  const navigate = useNavigate();

  const submitHandler=(e)=>{
    e.preventDefault();
    navigate(`/pet/search/:${searchTerm}`)

    setSearchTerm(" ")

  }

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header className="w-full bg-green-200 shadow-md">
      <div className="flex justify-between items-center px-6 py-3 sm:px-10">
        {/* Logo */}
        <Link to={"/"}>
          <img
            className="w-20 sm:w-24 mix-blend-multiply cursor-pointer"
            src={logo}
            alt="logo"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `pb-1 ${
                  isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
      <form  onSubmit={submitHandler}>

          <input
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          className="border-2 px-3 py-1 rounded-xl focus:outline-none"
          type="text"
          placeholder="Search here..."
          />
          </form>
        </nav>

        {/* Cart */}
        <div className="hidden md:block cursor-pointer text-xl">
          <Link to={"/cart"}>
            <FaCartPlus />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-lg font-semibold">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} // close menu when clicked
              className={({ isActive }) =>
                `pb-1 ${
                  isActive ? "text-blue-600" : "text-gray-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <input
            className="border-2 px-3 py-1 rounded-xl w-4/5 focus:outline-none"
            type="text"
            placeholder="Search here..."
          />

          <Link to={"/cart"} onClick={() => setIsOpen(false)}>
            <FaCartPlus className="text-2xl cursor-pointer" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
