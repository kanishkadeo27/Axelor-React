import React from "react";
import { NAV_LINKS } from "../data";

function Header() {
  return (
    <div className="hero">
      <nav className="navbar-menu">
        <h2 id="heading">KD</h2>
        <ul>
          {NAV_LINKS.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
