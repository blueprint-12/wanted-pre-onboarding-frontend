import React, { useContext } from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { UserData } from "./Form";
import api from "../utils/customAxios";

// SignIn == Login
export default function Login() {
  const navigate = useNavigate();
  // const { auth, setAuth } = useAuth();

  const loginHandler = async (userData: UserData) => {
    await api
      .post("/auth/signin", userData)
      .then((response) => {
        // console.log(response.status, response.data.access_token);
        // 201로 확인했는데 200이었음
        if (response.status === 200) {
          localStorage.setItem("access_token", response.data?.access_token);
          localStorage.setItem("user", "host");
          // setAuth((prev) => true);
        }
        alert("로그인 성공!");
        navigate("/todos");
      })
      .catch((error) => {
        // console.log(error);
        switch (error.status) {
          case 401:
            alert("비밀번호 혹은 아이디가 틀렸습니다.");
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

  return <Form title="로그인" formHandler={loginHandler} />;
}
