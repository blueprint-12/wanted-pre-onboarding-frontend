import React, { useState, useCallback } from "react";
import useAuth from "@hooks/useAuth";
import { useRouter } from "@hooks/useRouter";
import api from "@utils/api/customAxios";
import { check_email, check_password } from "@utils/validation/userInfoRegex";
import { BtnWrapper, Error, FormCont, Input } from "./styles";
import { Link, Navigate } from "react-router-dom";

// ! Login === SignIn , route path /signin
const SignIn = () => {
  const { routeTo } = useRouter();
  const { auth, setAuth } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setEmail(value);
      setEmailErrorMsg(
        check_email(value) ? "" : "유효한 이메일을 입력해주세요."
      );
    },
    []
  );
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setPassword(value);
      setPasswordErrorMsg(
        check_password(value) ? "" : "비밀번호는 8자 이상이어야 합니다."
      );
    },
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    api
      .post("auth/signin", { email: trimmedEmail, password: trimmedPassword })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("access_token", response.data?.access_token);
          setAuth(localStorage.getItem("access_token"));
        }
        alert("로그인 성공!");
        routeTo("/todos");
      })
      .catch((error) => {
        // console.log(error);
        switch (error.status) {
          case 401:
            alert("존재하지 않는 사용자입니다.");
            break;
          case 404:
            alert("존재하지 않는 사용자입니다.");
            break;
          default:
            alert("알 수 없는 원인으로 로그인에 실패하였습니다.");
            break;
        }
      });
  };
  return auth ? (
    <Navigate to="/todo" replace />
  ) : (
    <>
      <h2>로그인 페이지</h2>
      <FormCont onSubmit={handleSubmit}>
        <label htmlFor="email">Username:</label>
        <Input
          data-testid="email-input"
          type="text"
          id="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="abc@email.com"
        />
        {emailErrorMsg && <Error>{emailErrorMsg}</Error>}

        <label htmlFor="password">Password:</label>
        <Input
          data-testid="password-input"
          type="password"
          id="password"
          value={password}
          onChange={onChangePassword}
          placeholder="8자리 이상 입력해주세요."
          minLength={8}
        />
        {passwordErrorMsg && <Error>{passwordErrorMsg}</Error>}

        <BtnWrapper
          type="submit"
          disabled={emailErrorMsg || passwordErrorMsg ? true : false}
          data-testid="signin-button">
          로그인
        </BtnWrapper>
      </FormCont>
      <Link to="/signup">회원가입 하러가기</Link>
    </>
  );
};

export default SignIn;
