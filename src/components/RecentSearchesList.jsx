import React from "react";
import styled from "styled-components";
import { useRecentSearches } from "../RecentSearchesContext";

const ListContainer = styled.div`
  margin-top: 20px;
  background-color: #f4f4f4;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: #f4f4f4;
`;

const RecentSearchesList = () => {
  const { recentSearches } = useRecentSearches();

  return (
    <>
      {recentSearches.length > 0 && (
        <ListContainer>
          <h3>Senaste sökningarna:</h3>
          <ul>
            {recentSearches.map((search, index) => (
              <ListItem key={index}>{search}</ListItem>
            ))}
          </ul>
        </ListContainer>
      )}
    </>
  );
};

export default RecentSearchesList;
