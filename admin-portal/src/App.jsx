import { useContext } from "react";
import Login from "./pages/Login";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className="bg-[#F8F9FD]">
      <Navbar />
    </div>
  ) : (
    <div>
      <Login />
    </div>
  );
};

export default App;
