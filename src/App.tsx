import AppRouter from "./router/AppRouter";
import React, { createContext, useMemo, useState } from "react";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  // const value = useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
