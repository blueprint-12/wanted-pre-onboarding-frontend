import { createContext, useState, useMemo } from "react";

type AuthContextType = {
  isAuth: boolean | null;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const iAuthContextState = {
  isAuth: false,
  setIsAuth: () => {},
};
const AuthContext = createContext<AuthContextType>(iAuthContextState);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(false);
  const value = useMemo(() => ({ isAuth, setIsAuth }), [isAuth, setIsAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
