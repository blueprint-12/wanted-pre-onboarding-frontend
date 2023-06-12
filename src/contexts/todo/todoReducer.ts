import { TodoProps } from "@typings/todo";

export type ActionType =
  | { type: "INIT"; initTodos: TodoProps[] }
  | { type: "ADD"; todo: TodoProps }
  | { type: "DELETE"; id: number }
  | { type: "EDIT"; todo: TodoProps };

export type State = TodoProps[];

//action에 {type이랑 payload}
export const todoReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "INIT":
      return action.initTodos || state;
    case "ADD":
      return [...state, action.todo];
    case "DELETE":
      return state.filter((aTodo) => aTodo.id !== action.id);
    case "EDIT":
      return state.map((aTodo) =>
        aTodo.id === action.todo.id ? { ...aTodo, ...action.todo } : aTodo
      );
    default:
      throw new Error("unhandled action!");
  }
};
