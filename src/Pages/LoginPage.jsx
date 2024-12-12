import { useState } from "react";
import loginImage from "../assets/image 2.png";
import logo from "../assets/Vector (2).png";
import { UseAuth } from "../Context/AuthContext.jsx";

import { useNavigate, Link } from "react-router";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = UseAuth();

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "Admin") {
      if (password === "") {
        setError("Password is empty ");
      }
      if (password === "1234") {
        login(email);
        navigate("/");
      } else {
        setError("Password is incorrect ");
      }
    } else {
      setError("Invalid credentials. ");
    }
  };
  return (
    <div className="w-full flex h-screen">
      <div className="w-1/2 flex flex-col justify-center align-middle items-center">
        <img src={logo} className="h-[80px] mb-24"></img>
        <form onSubmit={handleLogin} className="w-2/3 flex flex-col gap-8">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 bg-[#FAFBFD]"
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-4 bg-[#FAFBFD]"
          />
          <button className="p-6 bg-[#19918F] rounded-lg text-white text-xl">
            Login
          </button>
          {error && <p className="text-red-500">{error}</p>} {/* Show error */}
        </form>
        <div className="w-2/3 flex gap-2 mt-12">
          <p>Belum punya akun? </p>
          <Link to="/register">
            <button className="text-blue-700">Daftar di sini</button>
          </Link>
        </div>
      </div>
      <img src={loginImage} alt="" className="w-1/2" />
    </div>
  );
}
export default LoginPage;
