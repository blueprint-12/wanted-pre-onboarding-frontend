import { useContext } from "react";
import { dispatchContext } from "@contexts/todo/TodoContext";

// context에서 제공된 todo의 state를 변경하는 dispatch 함수를 return 하는 hook
export default function useDispatch() {
  const dispatch = useContext(dispatchContext);
  if (!dispatch) throw new Error("cannot find provider");
  return dispatch;
}
