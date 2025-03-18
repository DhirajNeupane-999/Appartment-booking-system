import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "All Doctors", link: "/doctors" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="" />

      <ul className="hidden md:flex items-start gap-5 font-medium uppercase">
        {navLinks.map((nav, index) => (
          <NavLink key={index} to={nav.link}>
            <li className="py-1">{nav.title}</li>
            <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">Create Account</button>
      </div>
    </div>
  );
};

export default Navbar;
