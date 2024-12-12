import { NavLink } from "react-router";
import logo from "../assets/Vector (2).png";
import { UseAuth } from "../Context/AuthContext";
import { ThemeToggle } from "../Context/ThemeContext";

import { useNavigate } from "react-router";
import { useTheme } from "../Context/ThemeContext";

function Navbar() {
  const { logout } = UseAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div
      className={`w-full flex justify-between h-[94px] align-middle items-center ${
        isDark ? `bg-blue-500 text-white` : `bg-white`
      } px-20 absolute`}
    >
      <img src={logo} alt="logo" className="p-2 h-[40px] mr-10" />
      <nav className="flex gap-10 w-full justify-end align-middle items-center ">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/transfer">Transfer</NavLink>
        <NavLink to="/topup">Top Up</NavLink>
        <button onClick={handleLogout}>Sign Out</button>
        <ThemeToggle />
      </nav>
    </div>
  );
}
export default Navbar;
