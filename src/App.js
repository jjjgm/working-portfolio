import React from 'react';
import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Portfolio from './components/Portfolio';
import Image from './components/Image';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />

          <Routes>
            <Route path="/about" element={<Image />} />

            <Route path="/portfolio" element={<Portfolio />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="*"/>
          </Routes>
          
          <Footer/>
        </Router>
      </header>
    </div>
  );
}

export default App;
