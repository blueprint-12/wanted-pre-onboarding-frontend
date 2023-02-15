import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "./elements/Button";
import { check_email, check_password } from "../utils/isValidRegex";

export interface UserData {
  email: string;
  password: string;
}

export interface FormProps {
  title: string;
  formHandler: (userData: UserData) => void;
}

const LoginForm = ({ title, formHandler }: FormProps) => {
  // focus용 ref 연결
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isDisable, setIsDisable] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    email: "",
    password: "",
  });

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    alert("is it work?");
    formHandler(formData);
  };

  useEffect(() => {
    if (check_email(formData.email) && check_password(formData.password)) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [formData]);

  return (
    <FormCont onSubmit={handleSubmit}>
      <label htmlFor="email">Username:</label>
      <Input
        data-testid="email-input"
        type="text"
        id="email"
        value={formData.email}
        onChange={handleUsernameChange}
        placeholder="abc@email.com"
        ref={emailInputRef}
      />

      <label htmlFor="password">Password:</label>
      <Input
        data-testid="password-input"
        type="password"
        id="password"
        value={formData.password}
        onChange={handlePasswordChange}
        placeholder="8자리 이상 입력해주세요."
        minLength={8}
        ref={passwordInputRef}
      />

      <Button type="submit" isDisable={isDisable} data-testid="signin-button">
        {title}
      </Button>
    </FormCont>
  );
};

export default LoginForm;

const FormCont = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
`;

const Input = styled.input`
  padding: 5px;
  margin: 5px 0;
`;
