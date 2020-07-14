import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import React, { useContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { createStore } from "redux";
// import { makeStore } from "./store";
//
// const store = makeStore();

const AUTH_TOKEN = "auth-token";

const httpLink = createHttpLink({
  uri:
    "https://klp-prisma-server-d03dab4c93.herokuapp.com/lp-traveller-service/prod",
});

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

// https://www.howtographql.com/react-apollo/5-authentication/
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(AUTH_TOKEN);
  // console.log("here **** token", token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
