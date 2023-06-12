import styled from "@emotion/styled";

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  padding: 16px;
  font-size: calc(10px + 2vmin);
`;

export const ButtonCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  & > button {
    padding: 5px 10px;
  }
`;
