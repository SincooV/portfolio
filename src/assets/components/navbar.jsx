
import  { useState } from 'react';
import './styles/navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Portfolio</h1>
        <button className="navbar-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className='falling'><a href="#home">Home</a></li>
          <li className='falling'><a href="#services">Services</a></li>
          <li className='falling'><a href="#about">About</a></li>
          <li className='falling'><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
