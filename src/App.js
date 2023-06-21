import React from 'react';
import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />

          <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/contact" element={<Form/>} />
              </Routes>

        </Router>
      </header>
    </div>
  );
}

export default App;
