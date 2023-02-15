import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";

import { IATodo } from "./ATodo";
import { dispatchContext } from "./../../context/todoContext/TodoContext";
import api from "../../utils/customAxios";
import useDispatch from "../../hooks/useDispatch";

export default function AddATodo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleCreateTodo = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    //값이 없다면 return, null혹은 ""도 falsy니까 !(부정)과 결합하여 true가 되면 return
    if (!inputRef.current?.value) {
      return;
    }
    api
      .post("/todos", { todo: inputRef.current.value })
      .then((res) => {
        if (inputRef.current) {
          inputRef.current.value = "";
          dispatch({ type: "ADD", todo: res.data });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <AddTodoWrapper onSubmit={handleCreateTodo}>
      <input data-testid="new-todo-input" ref={inputRef} autoFocus />
      <button data-testid="new-todo-add-button">추가</button>
    </AddTodoWrapper>
  );
}
const AddTodoWrapper = styled.form`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
