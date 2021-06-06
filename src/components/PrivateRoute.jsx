import React from "react";
import { Redirect, Route } from "react-router";

function PrivateRoute(props) {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? <Route {...props} /> : <Redirect to="/login" />;
}

export default PrivateRoute;