import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #bbcc40;
  color: white;
  padding: 20px 0;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Väderappen</Title>
    </HeaderContainer>
  );
};

export default Header;
