import React, { useState } from "react";
import styled from "styled-components";
import { useRecentSearches } from "../RecentSearchesContext";

const SearchContainer = styled.div`
  background: #333;
  padding: 2rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #abbb30;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Search = ({ onSubmit }) => {
  const [city, setCity] = useState("");
  const { addRecentSearch } = useRecentSearches();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
    addRecentSearch(city);
    setCity("");
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Ange en stad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button>Sök</Button>
      </form>
    </SearchContainer>
  );
};

export default Search;
