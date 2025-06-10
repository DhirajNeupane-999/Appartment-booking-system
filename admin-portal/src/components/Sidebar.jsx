import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const navLinks = [
  { to: "/admin/dashboard", icon: assets.home_icon, label: "Dashboard" },
  {
    to: "/admin/all-appointments",
    icon: assets.appointment_icon,
    label: "All Appointments",
  },
  { to: "/admin/add-doctor", icon: assets.add_icon, label: "Add Doctor" },
  { to: "/admin/doctors-list", icon: assets.home_icon, label: "Doctor List" },
];

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul className="text-[#515151] mt-5">
          {navLinks.map(({ to, icon, label }) => (
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`} key={to} to={to}>
              <img src={icon} alt={label} />
              <p>{label}</p>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
