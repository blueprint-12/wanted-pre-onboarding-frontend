import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({
  component,
}: {
  component: JSX.Element;
}) {
  const token = localStorage.getItem("access_token");
  const { isAuth } = useAuth();
  return isAuth || token ? component : <Navigate to="/signin" replace />;
}
