import useAuth from "@hooks/useAuth";
import { useRouter } from "@hooks/useRouter";
import { FlexContainer } from "@pages/Content";
import { useEffect } from "react";
import Header from "@components/Header";
const Home = () => {
  const { auth } = useAuth();
  const { routeTo } = useRouter();

  useEffect(() => {
    if (auth) routeTo("/todo");
  }, []);

  return (
    <FlexContainer>
      <h2>로그인 시, 투두리스트를 사용하실 수 있습니다.</h2>
      <Header />
    </FlexContainer>
  );
};

export default Home;
