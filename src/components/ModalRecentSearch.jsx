import React, { useState } from "react";
import styled from "styled-components";
import { useRecentSearches } from "../RecentSearchesContext";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
`;

const ListContainer = styled.div`
  background-color: #f4f4f4;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Unlisted = styled.ul`
  margin-left: -2.5rem;
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const ModalRecentSearch = ({ isOpen, onClose }) => {
  const { recentSearches } = useRecentSearches();

  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={onClose}>
        <ModalContent>
          <ListContainer>
            <h3>Senaste sökningarna:</h3>
            <Unlisted>
              {recentSearches.map((search, index) => (
                <ListItem key={index}>{search}</ListItem>
              ))}
            </Unlisted>
          </ListContainer>
        </ModalContent>
      </ModalOverlay>
    </>
  );
};

export default ModalRecentSearch;
