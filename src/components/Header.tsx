import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "./../hooks/useAuth";

export default function Header() {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useAuth();
  const token = localStorage.getItem("access_token");

  const logout = () => {
    localStorage.removeItem("access_token");
    window.alert("로그아웃이 완료되었습니다.");
    setIsAuth(false);
    navigate("/singIn");
  };

  //context 만들어서 auth이면 버튼이 로그아웃으로 보이게
  return (
    <Container>
      <Link to="/todos">
        <b>👻Make a ToDo</b>
      </Link>

      {isAuth || token ? (
        <>
          <button onClick={logout} style={{ padding: "5px 10px" }}>
            로그아웃
          </button>
        </>
      ) : (
        <ButtonCont>
          <button
            onClick={() => {
              navigate("/signup");
            }}>
            회원가입
          </button>
          <button
            onClick={() => {
              navigate("/signin");
            }}>
            로그인
          </button>
        </ButtonCont>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  padding: 16px;
  font-size: calc(10px + 2vmin);
`;

const ButtonCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  & > button {
    padding: 5px 10px;
  }
`;
