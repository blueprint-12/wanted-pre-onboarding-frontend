import styled from "styled-components";

type LayoutProps = {
  children: JSX.Element;
};

function Layout({ children }: LayoutProps) {
  return <Wapper>{children}</Wapper>;
}

export default Layout;

const Wapper = styled.div`
  height: 100vh;
  min-width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
