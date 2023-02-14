import React from "react";
import styled from "styled-components";
import TodoList from "../components/TodoList/TodoList";
import TodoContextWrapper from "../context/todoContext/TodoContext";

export default function ContentsPage() {
  return (
    <FlexWrapper className="container">
      <TodoContextWrapper>
        <h2>콘텐츠 페이지(todoList)</h2>
        <TodoList />
      </TodoContextWrapper>
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
