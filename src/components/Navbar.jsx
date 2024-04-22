import React from "react";
import styled from "styled-components";

const NavbarDiv = styled.div`
  background-color: #222;
  display: flex;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const LinkDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 2rem;
`;

const Button = styled.button`
  text-align: center;
  padding-right: 2rem;
  background-color: transparent;
  border: none;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 16px;
  cursor: pointer;
`;

export function Navbar({ onModalButtonClick }) {
  return (
    <NavbarDiv>
      <LinkDiv>
        <Button onClick={onModalButtonClick}>Senaste sökningarna</Button>
      </LinkDiv>
    </NavbarDiv>
  );
}
