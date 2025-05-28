import { useState } from "react";
import { createContext } from "react";

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [aToken, setAToken] = useState(localStorage.getItem("aToken") || "");

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const value = {
    aToken,
    setAToken,
    backendUrl,
  };
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
