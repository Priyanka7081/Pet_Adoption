// import React, { useContext } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './pages/Hero';
// import Card from './pages/Card';
// import Footer from './components/Footer';
// import Contact from './pages/Contact';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AppContext from './context/AppContext';
// import About from './pages/About';
// import CardDetails from './pages/CardDetails'
// import SearchBar from './pages/SearchBar'
// // import Gallery from './pages/Gallery';
// const App = () => {
//   // ✅ Don't shadow AppContext, use a different variable name
//   const appData = useContext(AppContext);

//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path='/pet/:id' element={<CardDetails/>} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path='/about' element={<About/>} />
//         {/* <Route path='/gallery' element={<Gallery/>} /> */}
//         <Route path='/search/:term' element={<SearchBar/>} />

//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;



import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import CardDetails from './pages/CardDetails';
import Contact from './pages/Contact';
import About from './pages/About';
import SearchBar from './pages/SearchBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from './context/AppContext';

// new pages
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './components/Cart';
import Address from './components/Address';

const App = () => {
  const { isLoggedIn } = useContext(AppContext); // ✅ from context

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/pet/:id" element={<CardDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/cart' element={<Cart/>} />   
        <Route path='/address' element={<Address/>} />   
        <Route path="/search/:term" element={<SearchBar />} />

        {/* 👇 only show Register route if NOT logged in */}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}

        {/* 👇 only show Login route if NOT logged in */}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}

        {/* Profile route (only when logged in) */}
        {isLoggedIn && <Route path="/profile" element={<h2 className="p-6 text-center">Welcome to your profile 🎉</h2>} />}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
