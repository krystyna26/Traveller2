import React, { Suspense, useState, lazy } from "react";
import LoginPage from "./components/LoginAndRegister";
import Home from "./components/Home";
import Trips from "./components/Trips";
import CreateTrip from "./components/CreateTrip";
import MyProfile from "./components/MyProfile";
import SearchForTrip from "./components/SearchForTrip";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { BrowserRouter } from "react-router-dom";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Route, Switch, useHistory } from "react-router-dom";
import { StoreContext } from "redux-react-hook";
import { createHttpLink } from "apollo-link-http";

// import LazyComponent from "./components/LazyComponent";
// import HomePage from "./components/Home";
import NavBar from "./components/NavBar";
import FriendProfile from "./components/FriendProfile";
import TripDetails from "./components/TripDetails";
import OnTheGo from "./components/OnTheGo";
import Rate from "./components/Rate";
import { makeStore } from "./store";

const FriendsPagePromise = import("./components/Friends");
const FriendsPage = lazy(() => FriendsPagePromise);

const store = makeStore();

const AUTH_TOKEN = "auth-token";

const httpLink = createHttpLink({
  uri:
    "https://klp-prisma-server-d03dab4c93.herokuapp.com/lp-traveller-service/prod0",
});

// const client = new ApolloClient({
//   // was: uri: "http://localhost:4466",
//   // link: "http://localhost:4466",
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
//   // no uri here https://www.apollographql.com/docs/react/networking/authentication/
//   // uri:
//   //   "https://klp-prisma-server-d03dab4c93.herokuapp.com/lp-traveller-service/prod",
// });
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default function App() {
  // const [route, setRoute] = useState("home");
  //
  // // let history = useHistory();
  //
  // const onRouteChange = (route) => {
  //   setRoute(route);
  // };
  // console.log("here route", route);

  const authToken = localStorage.getItem(AUTH_TOKEN);
  // console.log("here AUTH_TOKEN", authToken);
  return (
    <ApolloProvider client={client}>
      <StoreContext.Provider value={store}>
        <BrowserRouter>
          <div className="App">
            {!authToken ? (
              <div
                className="ml1 pointer"
                onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN);
                  // history.push("/");
                }}
              >
                <NavBar />
                <div>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/search" component={SearchForTrip} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/profile" component={MyProfile} />
                    <Route
                      exact
                      path="/friends"
                      component={LazyComponent(FriendsPage)}
                    />
                    <Route exact path="/trips" component={Trips} />
                    <Route exact path="/my_trips" component={Trips} />
                    <Route exact path="/create" component={CreateTrip} />
                    <Route exact path="/onTheGo" component={OnTheGo} />
                    <Route exact path="/rate" component={Rate} />
                    <Route
                      exact
                      path="/friend_profile"
                      component={(props) => <FriendProfile {...props} />}
                    />
                    <Route
                      exact
                      path="/details"
                      component={(props) => <TripDetails {...props} />}
                    />
                  </Switch>
                </div>
              </div>
            ) : (
              <Route exact path="/signin" component={LoginPage} />
            )}
          </div>
        </BrowserRouter>
        ,
      </StoreContext.Provider>
    </ApolloProvider>
  );
}

function LazyComponent(Component: any) {
  return (props: any) => (
    <Suspense fallback={<h1>Waiting for component to load</h1>}>
      <Component {...props} />
    </Suspense>
  );
}
