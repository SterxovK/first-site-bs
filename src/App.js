import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navibar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
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
          <Redirect exact from="/first-site-bs" to="/" />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
