import { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import { AdminContext } from "./context/AdminContext";

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div>
      <h1 className="text-center text-2xl font-bold mt-10">Welcome to Admin Portal</h1>
      <ToastContainer />
    </div>
  ): (
    <div>
      <Login />
      <ToastContainer />
    </div>
  )
};

export default App;
