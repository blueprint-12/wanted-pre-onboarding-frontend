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
  margin-top: 50px;
  min-width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #d6d6d6;
  height: 70vh;
`;
