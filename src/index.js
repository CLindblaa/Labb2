import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RecentSearchesProvider } from "./RecentSearchesContext";

ReactDOM.render(
  <RecentSearchesProvider>
    <App />
  </RecentSearchesProvider>,
  document.getElementById("root")
);
