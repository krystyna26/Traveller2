// import React from "react";
// // import ReactDOM from "react-dom";
// import { render } from "react-dom";
// import { ApolloProvider } from "react-apollo";
// import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
// import { ApolloClient } from "apollo-client";
// import { createHttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { BrowserRouter } from "react-router-dom";
// import { setContext } from "apollo-link-context";
// import { Link, Switch, Route } from "react-router-dom";
// import { withRouter } from "react-router";
// import { withApollo } from "react-apollo";
//
// import Home from "./components/Home";
// import Friends from "./components/Friends";
//
// import { useQuery } from "react-apollo";
// import { loader } from "graphql.macro";
// import { get } from "lodash";
//
// let Navigator = () => (
//   <ul>
//     <li>
//       <Link to={"/"}>Home</Link>
//     </li>
//     <li>
//       <Link to={"/friends"}>Friends</Link>
//     </li>
//   </ul>
// );
// Navigator = withRouter(Navigator);
//
// const MyApp = () => (
//   <div className="App">
//     <Navigator />
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/friends" component={Friends} />
//     </Switch>
//   </div>
// );
//
// const AUTH_TOKEN = "auth-token";
//
// const httpLink = createHttpLink({
//   uri: "http://localhost:4466",
// });
//
// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem(AUTH_TOKEN);
//
//   if (!token) {
//     return {
//       headers,
//     };
//   }
//
//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${token}`,
//     },
//   };
// });
//
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   // was: uri: "http://localhost:4466",
//   // uri: "https://klp-prisma-server-d03dab4c93.herokuapp.com/lp-traveller-service/prod",
//   cache: new InMemoryCache(),
// });
//
// export default function App() {
//   return (
//     <BrowserRouter>
//       <ApolloProvider client={client}>
//         <ApolloHooksProvider client={client}>
//           <MyApp />
//         </ApolloHooksProvider>
//       </ApolloProvider>
//     </BrowserRouter>
//   );
// }
//
// render(<App />, document.getElementById("root"));
