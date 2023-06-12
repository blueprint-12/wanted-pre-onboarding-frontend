import styled from "@emotion/styled";

export const Wrapper = styled.li`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const TodoBackGroundWrapper = styled.div<{ isCompleted: boolean }>`
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

  & > p {
    min-width: fit-content;
  }
`;
export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 5px;
  min-width: fit-content;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
