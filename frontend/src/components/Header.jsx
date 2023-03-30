import React from 'react';

function Header() {
  return (
    <header>
      <img src="logo.png" alt="Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#" className="about">About</a></li>
          <li><a href="#" className="projects">Projects</a></li>
          <li><a href="#" className="contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
