import { useEffect, useCallback } from "react";
import Todo from "@components/Todo";
import AddTodo from "@components/AddTodo";
import api from "@utils/api/customAxios";
import { TodoProps } from "@typings/todo";
import useDispatch from "@hooks/useDispatch";
import useTodoState from "@hooks/useTodoState";
import { TodoListWrapper, Info } from "./styles";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useTodoState();

  const getTodoList = useCallback(() => {
    api
      .get("/todos")
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "INIT", initTodos: res.data });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dispatch]);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  let content;

  if (todoList.length === 0) content = <Info>투두가 존재하지 않아요👧</Info>;

  if (todoList.length !== 0)
    content = (
      <TodoListWrapper>
        {todoList.map((aTodo: TodoProps) => {
          return <Todo key={aTodo.id} {...aTodo} />;
        })}
      </TodoListWrapper>
    );

  return (
    <>
      <AddTodo />
      {content}
    </>
  );
}
