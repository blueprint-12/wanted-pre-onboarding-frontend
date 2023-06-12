import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@pages/Home";

const SignIn = React.lazy(() => import("@pages/SignIn")); //로그인
const SignUp = React.lazy(() => import("@pages/SignUp")); //회원가입
const Content = React.lazy(() => import("@pages/Content")); //Todos가 담긴 페이지
const NotFound = React.lazy(() => import("@pages/NotFound"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/todo",
          element: <Content />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: "process.env.PUBLIC_URL" }
);

export default router;
