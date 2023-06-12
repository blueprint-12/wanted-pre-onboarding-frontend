import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const NotFound = () => {
  return (
    <Wrapper>
      <h2>존재하지 않는 페이지입니다.</h2>
      <Link to="/">Home으로 돌아가기</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  background-color: aliceblue;
  border-radius: 5px;
`;

export default NotFound;
