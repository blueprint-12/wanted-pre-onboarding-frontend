import React, { useState } from "react";
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
        isCompleted: !aTodo.isCompleted,
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
        <TodoBackGroundWrapper isCompleted={aTodo.isCompleted}>
          {<p>{todo}</p>}
          <CheckBoxWrapper>
            <input
              type="checkbox"
              name="todo"
              checked={aTodo.isCompleted}
              onChange={handleToggleCheckBox}
            />
            <span>TODO #{id}</span>
            {aTodo.isCompleted ? null : (
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
            )}
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
const TodoBackGroundWrapper = styled.div<{ isCompleted: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  color: ${(props) =>
    props.isCompleted ? `rgba(15, 15, 15, 0.372)` : "inherit"};
  background-color: ${(props) =>
    props.isCompleted
      ? `rgba(81, 79, 79, 0.548)`
      : `rgba(174, 212, 237, 0.582)`};
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
