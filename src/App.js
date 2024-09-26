// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PricingPlans from './PricingPlans';
import Post from './Post';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/plans">Subscription Plans</Link> | <Link to="/post">Post</Link>
      </nav>
      <Routes>
        <Route path="/plans" element={<PricingPlans />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
