import React, { useState } from "react";
import api from "@utils/api/customAxios";
import useDispatch from "@hooks/useDispatch";
import { TodoProps } from "@typings/todo";

import { Wrapper, TodoBackGroundWrapper } from "./styles";

export default function Todo({ id, todo, isCompleted, userId }: TodoProps) {
  const [aTodo, setaTodo] = useState({ id, todo, isCompleted, userId });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  //삭제하기
  const handleDelete = async (id: number) => {
    await api
      .delete(`/todos/${id}`)
      .then((res) => {
        console.log(`delete response: ${res}`);
        dispatch({ type: "DELETE", id });
      })
      .catch((err) => alert(err.message));
  };

  //수정하기
  const handleUpdate = async (aTodo: TodoProps) => {
    await api
      .put(`/todos/${aTodo.id}`, {
        todo: aTodo.todo,
        isCompleted: aTodo.isCompleted,
      })
      .then((res) => {
        dispatch({ type: "EDIT", todo: res.data });
      })
      .catch((err) => console.log(err.message));
  };

  const handleCompleteBtnClick = () => {
    if (!aTodo.todo) {
      alert("빈 값은 입력할 수 없습니다.");
      return;
    }
    handleUpdate(aTodo);
    setIsEdit(false);
  };
  const handleCancelBtnClick = () => {
    setaTodo({ ...aTodo, todo: todo });
    setIsEdit(false);
  };

  const handleToggleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    //완료전상태라 false값일 때
    if (!aTodo.isCompleted) {
      setaTodo({
        ...aTodo,
        isCompleted: !aTodo.isCompleted,
      });
      handleUpdate({
        ...aTodo,
        isCompleted: !aTodo.isCompleted,
      });
    }
    //완료상태라 true값일 때
    if (aTodo.isCompleted) {
      setaTodo({
        ...aTodo,
        isCompleted: !aTodo.isCompleted,
      });
      handleUpdate({
        ...aTodo,
        isCompleted: !aTodo.isCompleted,
      });
    }
  };

  return (
    <Wrapper>
      {isEdit ? (
        <TodoBackGroundWrapper isCompleted={aTodo.isCompleted}>
          <input
            defaultValue={todo}
            data-testid="modify-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setaTodo({ ...aTodo, todo: e.target.value });
            }}
            autoFocus
          />

          <button
            type="button"
            data-testid="submit-button"
            onClick={handleCompleteBtnClick}>
            제출
          </button>
          <button
            type="button"
            data-testid="cancel-button"
            onClick={handleCancelBtnClick}>
            취소
          </button>
        </TodoBackGroundWrapper>
      ) : (
        <TodoBackGroundWrapper isCompleted={aTodo.isCompleted}>
          {<span>{todo}</span>}

          <input
            type="checkbox"
            name="todo"
            checked={aTodo.isCompleted}
            onChange={handleToggleCheckBox}
          />
          {aTodo.isCompleted ? null : (
            <>
              <button
                data-testid="modify-button"
                type="button"
                onClick={() => setIsEdit(true)}>
                수정
              </button>
              <button
                data-testid="delete-button"
                type="button"
                onClick={() => handleDelete(id)}>
                삭제
              </button>
            </>
          )}
        </TodoBackGroundWrapper>
      )}
    </Wrapper>
  );
}
