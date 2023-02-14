import React from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { UserData } from "./Form";
import api from "../utils/customAxios";

// SingUp == 회원가입
export default function SIgnUp() {
  const navigate = useNavigate();
  // const { auth, setAuth } = useAuth();

  const singUpHandler = async (userData: UserData) => {
    await api
      .post("/auth/signup", userData)
      .then((response) => {
        if (response.status === 201) {
          // setAuth((prev) => true);
        }
        alert("회원가입 성공");
        navigate("/signin");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return <Form title="회원가입" formHandler={singUpHandler} />;
}
