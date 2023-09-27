import React, { useState } from "react";
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
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </Menu>
    </NavBarContainer>
  );
};

export default NavBar;
