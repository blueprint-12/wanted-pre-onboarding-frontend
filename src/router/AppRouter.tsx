import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import { AuthProvider } from "../context/AuthContext";
import AuthRouter from "./AuthRouter";

export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <AuthRouter />
      </AuthProvider>
    </Router>
  );
}
