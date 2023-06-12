import { useContext } from "react";
import AuthContext from "@contexts/auth/AuthContext";

function useAuth() {
  const { auth, setAuth } = useContext(AuthContext);
  return { auth, setAuth };
}

export default useAuth;
