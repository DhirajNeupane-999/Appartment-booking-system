import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list");
      if (data.success) {
        setDoctors(data.doctors);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch doctors");
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  const value = {
    doctors,
    currencySymbol,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
