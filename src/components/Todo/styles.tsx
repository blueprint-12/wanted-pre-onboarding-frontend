import styled from "@emotion/styled";

export const Wrapper = styled.li<{ isCompleted: boolean }>`
  display: flex;
  width: 100%;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
  color: ${(props) =>
    props.isCompleted ? `rgba(15, 15, 15, 0.372)` : "inherit"};
  background-color: ${(props) =>
    props.isCompleted
      ? `rgba(81, 79, 79, 0.548)`
      : `rgba(174, 212, 237, 0.582)`};
`;
export const TodoBackGroundWrapper = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  padding: 5px 10px;
  border-radius: 7px;
  min-height: 50px;

  & > input {
    padding: 5px;
  }
`;
