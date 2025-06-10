import { useState } from "react";
import { createContext } from "react";

export const DoctorContext = createContext();

export const DoctorContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [dToken, setDtoken] = useState(localStorage.getItem("dToken") || "");

  const value = { dToken, setDtoken };
  return (
    <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
  );
};
