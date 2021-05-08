import React from "react";
import { Redirect, Route } from "react-router";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ children, ...rest }) => {
  const [AuthInfo, setAuthInfo] = useAuth();
  let tempuser = JSON.parse(localStorage.getItem(`LoginData`));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        AuthInfo.isLoggedIn || tempuser?.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
