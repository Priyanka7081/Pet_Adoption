import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Card from './pages/Card';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from './context/AppContext';
import About from './pages/About';
import CardDetails from './pages/CardDetails'
import SearchBar from './pages/SearchBar'
const App = () => {
  // ✅ Don't shadow AppContext, use a different variable name
  const appData = useContext(AppContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/pet/:id' element={<CardDetails/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<About/>} />
        <Route path='/search/:term' element={<SearchBar/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
