import React, { useEffect } from "react";
import styled from "@emotion/styled";
import TodoList from "@components/TodoList";
import TodoContextWrapper from "@contexts/todo/TodoContext";
import { useRouter } from "@hooks/useRouter";

const Content = () => {
  const { routeTo } = useRouter();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!token) routeTo("/signin");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FlexContainer>
      <TodoContextWrapper>
        {token ? <TodoList /> : <p>Loading...👩‍🦰</p>}
      </TodoContextWrapper>
    </FlexContainer>
  );
};

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 10px;
`;

export default Content;
