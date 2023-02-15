import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

type LayoutProps = {
  children: JSX.Element;
};

function Layout({ children }: LayoutProps) {
  return <Wapper>{children}</Wapper>;
}

export default Layout;

const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh; */
`;
const Wapper = styled.div`
  height: 100vh;
  min-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
