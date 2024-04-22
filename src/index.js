import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RecentSearchesProvider } from "./RecentSearchesContext";
import { StyleSheetManager } from "styled-components";

ReactDOM.render(
  <RecentSearchesProvider>
    <StyleSheetManager>
      <App />
    </StyleSheetManager>
  </RecentSearchesProvider>,
  document.getElementById("root")
);
