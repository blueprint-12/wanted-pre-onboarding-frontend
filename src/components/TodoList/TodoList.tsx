import { useEffect, useCallback } from "react";
import ATodo from "./ATodo";
import AddATodo from "./AddATodo";
import { api } from "./../../utils/customAxios";
import { IATodo } from "./ATodo";
import useDispatch from "../../hooks/useDispatch";
import useTodoState from "./../../hooks/useTodoState";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useTodoState();

  const getTodoList = useCallback(async () => {
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
  }, [dispatch]);

  useEffect(() => {
    getTodoList();
  }, []);
  return (
    <div className={styles.todoList}>
      <AddATodo />
      {todoList.map((aTodo: IATodo) => {
        return (
          <li className={styles.todoList__todo} key={aTodo.id}>
            <ATodo {...aTodo}></ATodo>
          </li>
        );
      })}
    </div>
  );
}
