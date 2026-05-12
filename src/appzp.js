import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Componnent/Header';
import Home from './Componnent/Home';
import About from './Componnent/About';
import Services from './Componnent/Services';
import Contact from './Componnent/Contact';
import Footer from './Componnent/Footer';

function App() {
  return (
  <BrowserRouter>
  <Header />
    <div className="ttvt">
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}>  </Route>
          <Route path='/Services' element={<Services />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
  );
}
export default App;
