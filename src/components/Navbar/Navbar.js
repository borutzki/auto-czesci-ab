import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="currentPageLink">
            Strona główna
          </NavLink>
        </li>
        <li>
          <NavLink to="/o-nas" activeClassName="currentPageLink">
            O nas
          </NavLink>
        </li>
        <li>
          <NavLink to="/ogloszenia" activeClassName="currentPageLink">
            Otomoto
          </NavLink>
        </li>
        <li>
          <NavLink to="/dojazd" activeClassName="currentPageLink">
            Dojazd
          </NavLink>
        </li>
        <li>
          <NavLink to="/kontakt" activeClassName="currentPageLink">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
