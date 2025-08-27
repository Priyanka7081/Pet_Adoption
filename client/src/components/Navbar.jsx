// import React, { useState } from "react";
// import logo from "../assets/attachment_81886229.jpeg";
// import { FaCartPlus } from "react-icons/fa";
// import { Link, NavLink,useNavigate } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm,setSearchTerm]=useState("");
//   const navigate = useNavigate();

//   const submitHandler=(e)=>{
//     e.preventDefault();
//     navigate(`/pet/search/:${searchTerm}`)

//     setSearchTerm(" ")

//   }

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//     { name: "Gallery", path: "/gallery" },
//   ];

//   return (
//     <header className="w-full bg-green-200 shadow-md">
//       <div className="flex justify-between items-center px-6 py-3 sm:px-10">
//         {/* Logo */}
//         <Link to={"/"}>
//           <img
//             className="w-20 sm:w-24 mix-blend-multiply cursor-pointer"
//             src={logo}
//             alt="logo"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `pb-1 ${
//                   isActive ? "text-red-600 border-b-2 border-red-600" : "text-gray-800"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//       <form  onSubmit={submitHandler}>

//           <input
//           value={searchTerm}
//           onChange={(e)=>setSearchTerm(e.target.value)}
//           className="border-2 px-3 py-1 rounded-xl focus:outline-none"
//           type="text"
//           placeholder="Search here..."
//           />
//           </form>
//         </nav>

//         {/* Cart */}
//         <div className="hidden md:block cursor-pointer text-xl">
//           <Link to={"/cart"}>
//             <FaCartPlus />
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-lg font-semibold">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               onClick={() => setIsOpen(false)} // close menu when clicked
//               className={({ isActive }) =>
//                 `pb-1 ${
//                   isActive ? "text-blue-600" : "text-gray-800"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           <input
//             className="border-2 px-3 py-1 rounded-xl w-4/5 focus:outline-none"
//             type="text"
//             placeholder="Search here..."
//           />

//           <Link to={"/cart"} onClick={() => setIsOpen(false)}>
//             <FaCartPlus className="text-2xl cursor-pointer" />
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;






// import React, { useState } from "react";
// import logo from "../assets/attachment_81886229.jpeg";
// import { FaCartPlus } from "react-icons/fa";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     navigate(`/pet/search/:${searchTerm}`);
//     setSearchTerm(" ");
//   };

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Profile", path: "/profile" }, // keep profile here
//   ];

//   return (
//     <header className="w-full bg-green-200 shadow-md">
//       <div className="flex justify-between items-center px-6 py-3 sm:px-10">
//         {/* Logo */}
//         <Link to={"/"}>
//           <img
//             className="w-20 sm:w-24 mix-blend-multiply cursor-pointer"
//             src={logo}
//             alt="logo"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `pb-1 ${
//                   isActive
//                     ? "text-red-600 border-b-2 border-red-600"
//                     : "text-gray-800"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           <form onSubmit={submitHandler}>
//             <input
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border-2 px-3 py-1 rounded-xl focus:outline-none"
//               type="text"
//               placeholder="Search here..."
//             />
//           </form>
//         </nav>

//         {/* Cart + Buttons */}
//         <div className="hidden md:flex items-center gap-4 text-xl">
//           <Link to={"/cart"} className="cursor-pointer">
//             <FaCartPlus />
//           </Link>

//           {/* Transparent Buttons */}
//           <Link
//             to="/login"
//             className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-base"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-base"
//           >
//             Register
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-lg font-semibold">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               onClick={() => setIsOpen(false)} // close menu when clicked
//               className={({ isActive }) =>
//                 `pb-1 ${isActive ? "text-blue-600" : "text-gray-800"}`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           <input
//             className="border-2 px-3 py-1 rounded-xl w-4/5 focus:outline-none"
//             type="text"
//             placeholder="Search here..."
//           />

//           <Link to={"/cart"} onClick={() => setIsOpen(false)}>
//             <FaCartPlus className="text-2xl cursor-pointer" />
//           </Link>

//           {/* Mobile Login/Register buttons */}
//           <Link
//             to="/login"
//             onClick={() => setIsOpen(false)}
//             className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-base"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             onClick={() => setIsOpen(false)}
//             className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-base"
//           >
//             Register
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;







// import React, { useState } from "react";
// import logo from "../assets/attachment_81886229.jpeg";
// import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/pet/search/${searchTerm}`);
//       setSearchTerm("");
//     }
//   };

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Profile", path: "/profile" }, // Profile always visible
//   ];

//   return (
//     <header className="w-full bg-green-200 shadow-md">
//       <div className="flex justify-between items-center px-6 py-3 sm:px-10">
//         {/* Logo */}
//         <Link to="/">
//           <img
//             className="w-20 sm:w-24 mix-blend-multiply cursor-pointer"
//             src={logo}
//             alt="logo"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `pb-1 ${
//                   isActive
//                     ? "text-red-600 border-b-2 border-red-600"
//                     : "text-gray-800"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           {/* Search */}
//           <form onSubmit={submitHandler}>
//             <input
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border-2 px-3 py-1 rounded-xl focus:outline-none"
//               type="text"
//               placeholder="Search here..."
//             />
//           </form>
//         </nav>

//         {/* Cart + Login/Register */}
//         <div className="hidden md:flex items-center gap-4 text-xl">
//           <Link to="/cart" className="cursor-pointer">
//             <FaCartPlus />
//           </Link>

//           {/* Transparent Buttons */}
//           <Link
//             to="/login"
//             className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
//           >
//             Register
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-lg font-semibold">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) =>
//                 `pb-1 ${isActive ? "text-blue-600" : "text-gray-800"}`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           {/* Search on mobile */}
//           <form onSubmit={submitHandler} className="w-4/5">
//             <input
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border-2 px-3 py-1 rounded-xl w-full focus:outline-none"
//               type="text"
//               placeholder="Search here..."
//             />
//           </form>

//           {/* Cart */}
//           <Link to="/cart" onClick={() => setIsOpen(false)}>
//             <FaCartPlus className="text-2xl cursor-pointer" />
//           </Link>

//           {/* Login/Register buttons */}
//           <Link
//             to="/login"
//             onClick={() => setIsOpen(false)}
//             className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             onClick={() => setIsOpen(false)}
//             className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
//           >
//             Register
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


// final

// import React, { useState } from "react";
// import logo from "../assets/attachment_81886229.jpeg";
// import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/pet/search/${searchTerm}`);
//       setSearchTerm("");
//       setIsOpen(false); // close menu after search on mobile
//     }
//   };

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Profile", path: "/profile" },
//   ];

//   return (
//     <header className="w-full bg-green-200 shadow-md fixed top-0 left-0 z-50">
//       <div className="flex justify-between items-center px-6 py-3 sm:px-10">
//         {/* Logo */}
//         <Link to="/">
//           <img
//             className="w-20 sm:w-24 mix-blend-multiply cursor-pointer"
//             src={logo}
//             alt="logo"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `pb-1 transition ${
//                   isActive
//                     ? "text-red-600 border-b-2 border-red-600"
//                     : "text-gray-800 hover:text-red-500"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           {/* Search */}
//           <form onSubmit={submitHandler} className="ml-4">
//             <input
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border-2 px-3 py-1 rounded-xl focus:outline-none w-44"
//               type="text"
//               placeholder="Search here..."
//             />
//           </form>
//         </nav>

//         {/* Cart + Login/Register */}
//         <div className="hidden md:flex items-center gap-4 text-xl">
//           <Link to="/cart" className="cursor-pointer hover:text-red-600">
//             <FaCartPlus />
//           </Link>
//           <Link
//             to="/login"
//             className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
//           >
//             Register
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-green-100 flex flex-col items-center gap-5 text-lg font-semibold absolute w-full left-0 transition-all duration-300 ease-in-out ${
//           isOpen ? "top-16 opacity-100" : "-top-[500px] opacity-0"
//         }`}
//       >
//         {menuItems.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.path}
//             onClick={() => setIsOpen(false)}
//             className={({ isActive }) =>
//               `pb-1 transition ${
//                 isActive ? "text-blue-600" : "text-gray-800 hover:text-red-500"
//               }`
//             }
//           >
//             {item.name}
//           </NavLink>
//         ))}

//         {/* Search */}
//         <form onSubmit={submitHandler} className="w-4/5">
//           <input
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border-2 px-3 py-1 rounded-xl w-full focus:outline-none"
//             type="text"
//             placeholder="Search here..."
//           />
//         </form>

//         {/* Cart */}
//         <Link to="/cart" onClick={() => setIsOpen(false)}>
//           <FaCartPlus className="text-2xl cursor-pointer hover:text-red-600" />
//         </Link>

//         {/* Login/Register */}
//         <div className="flex gap-4 pb-4">
//           <Link
//             to="/login"
//             onClick={() => setIsOpen(false)}
//             className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             onClick={() => setIsOpen(false)}
//             className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;





import React, { useState, useContext } from "react";
import logo from "../assets/attachment_81886229.jpeg";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext"; // ✅ Import context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // ✅ Get auth state
  const { user, logoutUser } = useContext(AppContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/pet/search/${searchTerm}`);
      setSearchTerm("");
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login"); // redirect after logout
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="w-full bg-green-200 shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-3 sm:px-10">
        {/* Logo */}
        <Link to="/">
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
                `pb-1 transition ${
                  isActive
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-800 hover:text-red-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Search */}
          <form onSubmit={submitHandler} className="ml-4">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-2 px-3 py-1 rounded-xl focus:outline-none w-44"
              type="text"
              placeholder="Search here..."
            />
          </form>
        </nav>

        {/* Cart + Auth Buttons */}
        <div className="hidden md:flex items-center gap-4 text-xl">
          <Link to="/cart" className="cursor-pointer hover:text-red-600">
            <FaCartPlus />
          </Link>

          {user ? (
            // ✅ If logged in → Logout
            <button
              onClick={handleLogout}
              className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
            >
              Logout
            </button>
          ) : (
            // ✅ If not logged in → Login & Register
            <>
              <Link
                to="/login"
                className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
              >
                Register
              </Link>
            </>
          )}
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
      <div
        className={`md:hidden bg-green-100 flex flex-col items-center gap-5 text-lg font-semibold absolute w-full left-0 transition-all duration-300 ease-in-out ${
          isOpen ? "top-16 opacity-100" : "-top-[500px] opacity-0"
        }`}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `pb-1 transition ${
                isActive ? "text-blue-600" : "text-gray-800 hover:text-red-500"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

        {/* Search */}
        <form onSubmit={submitHandler} className="w-4/5">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-2 px-3 py-1 rounded-xl w-full focus:outline-none"
            type="text"
            placeholder="Search here..."
          />
        </form>

        {/* Cart */}
        <Link to="/cart" onClick={() => setIsOpen(false)}>
          <FaCartPlus className="text-2xl cursor-pointer hover:text-red-600" />
        </Link>

        {/* Auth Buttons */}
        <div className="flex gap-4 pb-4">
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
