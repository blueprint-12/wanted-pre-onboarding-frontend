import { createContext, useState, useMemo } from "react";

type AuthContextType = {
  auth: string | null;
  setAuth: React.Dispatch<React.SetStateAction<string | null>>;
};

const initAuthContextState = {
  auth: "",
  setAuth: () => {},
};
const AuthContext = createContext<AuthContextType>(initAuthContextState);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const accessToken = localStorage.getItem("access_token");
  const [auth, setAuth] = useState<string | null>(accessToken);
  const value = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
