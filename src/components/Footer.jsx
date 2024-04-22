import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: -2;
  width: 100%;
  background-color: #f4f4f4;
  padding: 20px 0;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: #888;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        &copy; 2024 Väderappen. Alla rättigheter förbehållna.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
