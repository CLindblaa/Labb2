import React, { createContext, useContext, useState } from "react";

const RecentSearchesContext = createContext();

export const RecentSearchesProvider = ({ children }) => {
  const [recentSearches, setRecentSearches] = useState([]);

  const addRecentSearch = (search) => {
    setRecentSearches((prevSearches) => [search, ...prevSearches]);
  };

  return (
    <RecentSearchesContext.Provider value={{ recentSearches, addRecentSearch }}>
      {children}
    </RecentSearchesContext.Provider>
  );
};

export const useRecentSearches = () => useContext(RecentSearchesContext);
