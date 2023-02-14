import { useEffect } from "react";
import ATodo from "./ATodo";
import AddATodo from "./AddATodo";
import { api } from "./../../utils/customAxios";
import { IATodo } from "./ATodo";
import useDispatch from "../../hooks/useDispatch";
import useTodoState from "./../../hooks/useTodoState";
import styled from "styled-components";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useTodoState();

  const getTodoList = async () => {
    await api
      .get("/todos")
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: "INIT", initTodos: res.data });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <Wapper className="todoList">
      <AddATodo />
      {todoList.map((aTodo: IATodo) => {
        return (
          <TodoWrapper className="todoList__todo" key={aTodo.id}>
            <ATodo {...aTodo}></ATodo>
          </TodoWrapper>
        );
      })}
    </Wapper>
  );
}

const Wapper = styled.ul`
  height: min-content;
  background-color: aliceblue;
  padding: 20px;
`;

const TodoWrapper = styled.li`
  padding: 10px 5px;
`;
