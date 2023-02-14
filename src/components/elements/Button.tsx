import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDisable: boolean;
}

export default function Button(props: ButtonProps) {
  return <Container disabled={props.isDisable}>{props.children}</Container>;
}

const Container = styled.button`
  padding: 5px;
  font-weight: 600;
`;
