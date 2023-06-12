import { useNavigate, Link } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import { Container, ButtonCont } from "./styles";
import { useRouter } from "@hooks/useRouter";

export default function Header() {
  const { routeTo } = useRouter();
  const { auth, setAuth } = useAuth();

  const logout = () => {
    localStorage.removeItem("access_token");
    setAuth("");
    window.alert("로그아웃이 완료되었습니다.");
    routeTo("/signin");
  };

  //context 만들어서 auth이면 버튼이 로그아웃으로 보이게
  return (
    <Container>
      <Link to="/todo">
        <b>👻Make a ToDo</b>
      </Link>

      {auth ? (
        <>
          <button onClick={logout} style={{ padding: "5px 10px" }}>
            로그아웃
          </button>
        </>
      ) : (
        <ButtonCont>
          <button
            onClick={() => {
              routeTo("/signup");
            }}>
            회원가입
          </button>
          <button
            onClick={() => {
              routeTo("/signin");
            }}>
            로그인
          </button>
        </ButtonCont>
      )}
    </Container>
  );
}
