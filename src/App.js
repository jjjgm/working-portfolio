import React from 'react';
import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Header />
        </Router>
      </header>
    </div>
  );
}

export default App;
