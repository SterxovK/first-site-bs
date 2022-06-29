import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navibar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Home';
import Users from './Users';
import About from './About';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
