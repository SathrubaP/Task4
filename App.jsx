 import './App.css'
//  import './Book.css'
 import Book from './Book.jsx'
//  function App() {
//   return (
//    <>
//      <Book/> 
//      </>
     
//    )
//   }
//   export default App
  
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Sathru from './Sathru.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header>
        <nav className="nav-container">
            <div className="nav-left">
              <Link to="/Sathru">
                <i className="fas fa-user-circle sathru-icon"></i>
              </Link>
              <Link to="/Sathru" className="nav-item">Sathru</Link>
            </div>
            <ul className="nav-list">
              <li className="nav-item"><Link to="/">Home</Link></li>
              <li className="nav-item"><Link to="/About">About</Link></li>
              <li className="nav-item"><Link to="/Contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Sathru" element={<Sathru />} />
        </Routes>
        <footer>
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;