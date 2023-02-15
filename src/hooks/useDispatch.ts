import { useContext } from "react";
import { dispatchContext } from "../context/todoContext/TodoContext";

export default function useDispatch() {
  const dispatch = useContext(dispatchContext);
  if (!dispatch) throw new Error("cannot find provider");
  return dispatch;
}
