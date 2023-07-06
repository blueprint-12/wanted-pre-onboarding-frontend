import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@pages/Home";

import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";
import Content from "@pages/Content";
import NotFound from "@pages/NotFound";

// FIXME: 컴포넌트 레이지 로드시, 배포 페이지에서 라우팅되지 않는 문제는
// createBrowserRouter과 관련되어 보임

// const SignIn = React.lazy(() => import("@pages/SignIn")); //로그인
// const SignUp = React.lazy(() => import("@pages/SignUp")); //회원가입
// const Content = React.lazy(() => import("@pages/Content")); //Todos가 담긴 페이지
// const NotFound = React.lazy(() => import("@pages/NotFound"));

const router = createBrowserRouter([
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
]);

export default router;
