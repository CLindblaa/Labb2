import React, { createContext, useContext, useReducer } from "react";

const RecentSearchesContext = createContext();

const recentSearchesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SEARCH":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export const RecentSearchesProvider = ({ children }) => {
  const [recentSearches, dispatch] = useReducer(recentSearchesReducer, []);

  const addRecentSearch = (search) => {
    dispatch({ type: "ADD_SEARCH", payload: search });
  };

  return (
    <RecentSearchesContext.Provider value={{ recentSearches, addRecentSearch }}>
      {children}
    </RecentSearchesContext.Provider>
  );
};

export const useRecentSearches = () => useContext(RecentSearchesContext);
