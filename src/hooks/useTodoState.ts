import { useContext } from "react";
import { todoStateContext } from "../context/todoContext/TodoContext";

export default function useTodoState() {
  const todoState = useContext(todoStateContext);
  if (!todoState) throw new Error("cannot find Provider");
  return todoState;
}
