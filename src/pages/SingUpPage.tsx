import React from "react";
import SignUp from "../components/SignUp";
import styled from "styled-components";
export default function SingUpPage() {
  return (
    <div className="container">
      <h2>회원가입</h2>
      <SignUp />
    </div>
  );
}
const Wapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
