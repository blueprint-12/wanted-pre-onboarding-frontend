import React, { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  children?: ReactElement;
  authentication: boolean;
}

export default function PrivateRoute({
  authentication,
}: PrivateRouteProps): ReactElement | null {
  //   로그인 여부 확인
  //   로그인 시 true 반환
  //   로그인 아닐시, null 혹은 false 반환
  const isAuthenticated = localStorage.getItem("access_token");
  const authCondition = isAuthenticated === null || isAuthenticated === "false";
  if (authentication) {
    //인증이 반드시 필요한 페이지
    // 인증을 안했을 경우, 로그인 페이지로 했을 경우 해당 페이지로
    return authCondition ? <Navigate to="/login" /> : <Outlet />;
  } else {
    //인증이 반드시 필요없는 페이지
    return authCondition ? <Outlet /> : <Navigate to="/" />;
  }
}
