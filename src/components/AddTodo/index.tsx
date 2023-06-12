import React, { useState } from "react";
import styled from "@emotion/styled";
import api from "@utils/api/customAxios";
import useDispatch from "@hooks/useDispatch";
import useInput from "@hooks/useInput";
import { Error } from "@pages/SignIn/styles";

const AddTodo = () => {
  const [todo, onChangeTodo, setTodo] = useInput<string>("");
  const [createTodoError, setCreateTodoError] = useState("");
  const dispatch = useDispatch();

  const handleCreateTodo = (e: React.FormEvent) => {
    e.preventDefault();
    //쓰기전에 한번 초기화
    setCreateTodoError("");
    const trimmedTodo = todo.trim();
    if (!trimmedTodo) {
      alert("공백을 제외한 내용을 입력해주세요.");
      return;
    }

    if (!createTodoError) {
      api
        .post("/todos", { todo })
        .then((res) => {
          setTodo("");
          dispatch({ type: "ADD", todo: res.data });
        })
        .catch((err) => {
          console.log(err);
          setCreateTodoError(err?.message);
        });
    }
  };
  return (
    <>
      <AddTodoWrapper onSubmit={handleCreateTodo}>
        <input
          data-testid="new-todo-input"
          onChange={onChangeTodo}
          value={todo}
          autoFocus
        />
        <button data-testid="new-todo-add-button">추가</button>
      </AddTodoWrapper>
      {createTodoError && <Error>{createTodoError}</Error>}
    </>
  );
};

const AddTodoWrapper = styled.form`
  display: flex;
  justify-content: center;
  /* align-items: stretch; */
  gap: 5px;
  padding: 10px;
  width: 100%;
  height: 47px;
`;

export default AddTodo;
