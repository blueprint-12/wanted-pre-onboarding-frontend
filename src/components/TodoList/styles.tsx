import styled from "@emotion/styled";

export const TodoListWrapper = styled.div`
  background-color: aliceblue;
  padding: 20px;
  overflow: auto;

  & > li {
    padding: 10px 5px;
    width: 700px;
  }
  /* 모바일 화면  */
  @media screen and (max-width: 786px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
      width: 100%;
    }
    & > li {
      width: 90%;
    }
  }
`;

export const Info = styled.div`
  margin-top: 5px;
  color: #2e4eb6;
  font-weight: bold;
`;
