import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./app/store.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme.js";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cls36ntw30eu601w4zlvtt6m8/master",
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      {/* // <Provider store={store}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>

      {/* </Provider> */}
    </ApolloProvider>
  </ThemeProvider>
);
