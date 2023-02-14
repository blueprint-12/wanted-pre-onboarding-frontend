import React, { createContext, useReducer, Dispatch } from "react";
import { todoReducer } from "./todoReducer";
import { IATodo } from "../../components/TodoList/ATodo";
import { State } from "./todoReducer";
import { ActionType } from "./todoReducer";

type SampleDispatch = Dispatch<ActionType>;

export const dispatchContext = createContext<SampleDispatch | null>(null);
export const todoStateContext = createContext<State | null>(null);

const initTodos: IATodo[] = [];

export default function TodoContextWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todoReducer, initTodos);

  return (
    <todoStateContext.Provider value={todos}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </todoStateContext.Provider>
  );
}
