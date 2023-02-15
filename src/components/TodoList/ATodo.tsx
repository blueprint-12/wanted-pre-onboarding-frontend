import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../utils/customAxios";
import useDispatch from "./../../hooks/useDispatch";

export interface IATodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  readonly userId: number;
}

export default function ATodo({ id, todo, isCompleted, userId }: IATodo) {
  const [aTodo, setaTodo] = useState({ id, todo, isCompleted, userId });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  //서버와 클라이언트 비동기 checkBox 이슈 해결 못함
  //useState()가 동기적으로 실행되고 그 다음에 update를 해야함 -> 하지만 useState는 비동기처리
  useEffect(() => {
    if (aTodo.isCompleted) {
      console.log("지금은 완료상태");
    } else {
      console.log("지금은 취소상태!");
    }
  }, [aTodo.isCompleted]);
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
  const handleUpdate = async (aTodo: IATodo) => {
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
    if (!aTodo.isCompleted && window.confirm("완료하시겠습니까?")) {
      setaTodo({
        ...aTodo,
        isCompleted: !aTodo.isCompleted,
      });
      handleUpdate({
        ...aTodo,
        isCompleted: aTodo.isCompleted,
      });
    }
    //완료상태라 true값일 때
    if (aTodo.isCompleted && window.confirm("되돌리시겠습니까?")) {
      setaTodo({
        ...aTodo,
        isCompleted: !aTodo.isCompleted,
      });
      handleUpdate({
        ...aTodo,
        isCompleted: aTodo.isCompleted,
      });
    }
  };

  return (
    <Wrapper>
      {isEdit ? (
        <TodoBackGroundWrapper>
          <input
            defaultValue={todo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setaTodo({ ...aTodo, todo: e.target.value });
            }}
            autoFocus
          />
          <ButtonWrapper>
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
          </ButtonWrapper>
        </TodoBackGroundWrapper>
      ) : (
        <TodoBackGroundWrapper>
          {<p>{todo}</p>}
          <CheckBoxWrapper>
            <input
              type="checkbox"
              name="todo"
              checked={aTodo.isCompleted}
              onChange={handleToggleCheckBox}
            />
            <span>TODO #{id}</span>
            <ButtonWrapper>
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
            </ButtonWrapper>
          </CheckBoxWrapper>
        </TodoBackGroundWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const TodoBackGroundWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  background-color: antiquewhite;
  padding: 5px 10px;
  border-radius: 7px;
  min-height: 50px;

  & > input {
    padding: 5px;
  }
`;
const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
