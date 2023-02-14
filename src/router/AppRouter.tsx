import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import AuthRouter from "./AuthRouter";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <AuthRouter />
    </Router>
  );
}
