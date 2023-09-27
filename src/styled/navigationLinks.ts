import styled from "styled-components";

interface MenuProps {
  open: boolean;
}

export const NavBarContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.ul<MenuProps>`
  list-style: none;
  display: flex;

  li {
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #555;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #444;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    display: ${(props) => (props.open ? "block" : "none")};
    z-index: 1;
  }
`;
