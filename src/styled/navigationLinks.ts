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

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
      justify-content: flex-end;
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
    grid-column: 1 / 3;
    //width: 94%;
    display: ${(props) => (props.open ? "block" : "none")};
    z-index: 1;
  }
`;
