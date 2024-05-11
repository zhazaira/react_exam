import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container"></div>
      <h1 className="title">BookSphere</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
      {isMenuOpen && (
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/books" className="nav-link">Books</Link></li>
          <li className="nav-item"><Link to="/my-books" className="nav-link">My Books</Link></li>
        </ul>
      )}
    </header>
  );
}

export default Header;
