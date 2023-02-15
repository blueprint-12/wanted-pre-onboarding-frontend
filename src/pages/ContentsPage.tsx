import React from "react";

import TodoList from "../components/TodoList/TodoList";
import styled from "styled-components";

export default function ContentsPage() {
  return (
    <FlexWrapper className="container">
      <h2>콘텐츠 페이지(todoList)</h2>
      <TodoList />
    </FlexWrapper>
  );
}

const FlexWrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  background-color: #d6d6d6;
  height: 70vh;
`;
