import React, { useState, useCallback } from "react";
import { useRouter } from "@hooks/useRouter";
import api from "@utils/api/customAxios";
import { check_email, check_password } from "@utils/validation/userInfoRegex";
import { BtnWrapper, Error, FormCont, Input } from "@pages/SignIn/styles";
import useAuth from "@hooks/useAuth";
import { Navigate, Link } from "react-router-dom";

// 회원가입
const SignUp = () => {
  const { auth } = useAuth();
  const { routeTo } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrorMsg, setEmailErrorMsg] = useState<string | null>("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState<string | null>("");

  const [signInErorrMsg, setSignInErrorMsg] = useState("");

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setEmail(value);
      setEmailErrorMsg(
        check_email(value) ? null : "유효한 이메일을 입력해주세요."
      );
    },
    []
  );
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setPassword(value);
      setPasswordErrorMsg(
        check_password(value) ? null : "비밀번호는 8자 이상이어야 합니다."
      );
    },
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    setSignInErrorMsg("");
    api
      .post("auth/signup", { email: trimmedEmail, password: trimmedPassword })
      .then((response) => {
        if (response.status === 201) {
          alert("회원가입 성공!");
          routeTo("/signin");
        }
      })
      .catch((error) => {
        setSignInErrorMsg(error.message);
        console.log(error);
      });
  };

  const isButtonDisabled = emailErrorMsg !== null || passwordErrorMsg !== null;

  return auth ? (
    <Navigate to="/todo" replace />
  ) : (
    <>
      <h2>회원가입 페이지</h2>
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
          disabled={!!isButtonDisabled}
          data-testid="signup-button">
          회원가입
        </BtnWrapper>
        {signInErorrMsg && <Error>{signInErorrMsg}</Error>}
      </FormCont>
      <Link to="/signin">로그인 하러가기</Link>
    </>
  );
};

export default SignUp;
