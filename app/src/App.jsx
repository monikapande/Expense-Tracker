import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import Expenses from './Expenses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Expenses" element={<Expenses />} />
      </Routes>
    </Router>
  );
}

export default App;
