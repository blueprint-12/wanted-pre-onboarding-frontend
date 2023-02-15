import { IATodo } from "../../components/TodoList/ATodo";

export type ActionType =
  | { type: "INIT"; initTodos: IATodo[] }
  | { type: "ADD"; todo: IATodo }
  | { type: "DELETE"; id: number }
  | { type: "EDIT"; todo: IATodo };

export type State = IATodo[];

//action에 {type이랑 payload}
export const todoReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "INIT":
      return [...action.initTodos];
    case "ADD":
      return [...state, action.todo];
    case "DELETE":
      return state.filter((aTodo) => aTodo.id !== action.id);
    case "EDIT":
      return state.map((aTodo) =>
        aTodo.id === action.todo.id ? { ...action.todo } : aTodo
      );
    default:
      throw new Error("unhandled action!");
  }
};
