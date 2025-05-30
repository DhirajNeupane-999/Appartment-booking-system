import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [aToken, setAToken] = useState(localStorage.getItem("aToken") || "");
  const [doctors, setDoctors] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/all-doctors", {
        headers: {
          aToken,
        },
      });
      if (data.success) {
        setDoctors(data.doctors);
        console.log(data.doctors);

        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch doctors");
    }
  };

  const value = {
    aToken,
    setAToken,
    backendUrl,
    doctors,
    getAllDoctors,
  };
  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
