import React, { type ComponentType, lazy } from "react";
import {
  type RouteProps,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import LazyComponent from "../../LazyComponent";
import HomePage from "../../components/Home";

// const HOME = "/";

const FriendsPagePromise = import("../../components/Friends");
const FriendsPage = lazy(() => FriendsPagePromise);

// type Props<T> = { component: ComponentType<T>, redirectTo?: string };
//
// export default function App<T>({
//   component: Component,
//   redirectTo = HOME,
//   ...rest
// }: Props<T>) {
//   return <Route {...rest} render={renderer(Component, redirectTo)} />;
// }
//
// function renderer<T>(Component: ComponentType<T>, redirectTo: string) {
//   return (props: RouteProps) => {
//     const { location } = props;
//     const to = { pathname: redirectTo, state: { from: location } };
//     return <Component {...props} />;
//   };
// }

export default function App() {
  return (
    <Route>
      {({ match }: ContextRouter) => {
        const { path } = match;
        return (
          <Switch>
            <Route component={HomePage} />
            <Route
              component={LazyComponent(FriendsPage)}
              path={`${path}friends`}
            />
          </Switch>
        );
      }}
    </Route>
  );
}
