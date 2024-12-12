import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("auth") === "true";
  });

  const login = (username) => {
    if (username === "Admin") {
      localStorage.setItem("auth", "true");
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };
  const logout = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => useContext(AuthContext);
