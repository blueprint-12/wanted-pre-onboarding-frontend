import { useContext } from "react";
import { todoStateContext } from "@contexts/todo/TodoContext";

// context에서 제공된 전역 todoState를 return 하는 hook
export default function useTodoState() {
  const todoState = useContext(todoStateContext);
  if (!todoState) throw new Error("cannot find Provider");
  return todoState;
}
