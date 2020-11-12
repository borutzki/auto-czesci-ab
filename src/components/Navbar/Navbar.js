import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Strona główna</Link>
        </li>
        <li>
          <Link to="/o-nas">O nas</Link>
        </li>
        <li>
          <Link to="/ogloszenia">Otomoto</Link>
        </li>
        <li>
          <Link to="/dojazd">Dojazd</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
