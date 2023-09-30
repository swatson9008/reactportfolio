import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBarContainer, MenuIcon, Menu } from "../styled/navigationLinks";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavBarContainer>
      <span>Your Logo</span>
      <MenuIcon onClick={toggleMenu}>&#9776;</MenuIcon>
      <Menu open={menuOpen}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </Menu>
    </NavBarContainer>
  );
};

export default NavBar;
