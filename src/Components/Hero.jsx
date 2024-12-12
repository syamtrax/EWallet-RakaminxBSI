import logo from "../assets/Vector (2).png";
import profile from "../assets/Group 18.png";
import { useEffect, useState } from "react";

import { useTheme } from "../Context/ThemeContext";

function Hero() {
  const { isDark } = useTheme();
  const [balance, setBalance] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const balance = await fetch("http://localhost:3000/balance");
        if (!balance.ok) {
          throw new Error(`Failed to fetch`);
        }
        const balanceData = await balance.json();
        setBalance(balanceData);
        console.log(balanceData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full flex h-48 justify-between items-center container mx-auto top-36">
      <div
        className={`w-2/3  align-middle flex flex-col gap-3 ${
          isDark ? `text-white` : `text-black`
        }`}
      >
        <h1 className="text-6xl font-bold items-center align-middle">
          Good Morning, {balance.userName?.split(" ")[0] || "Loading..."}
        </h1>
        <p className="text-2xl font-light text-gray-400">
          Check all your incoming and outgoing transaction here
        </p>
      </div>
      <div
        className={`w-1/3 flex h-full gap-4 justify-end ${
          isDark ? `text-white` : `text-black`
        }`}
      >
        <div className="h-full align-middle items-end justify-center flex flex-col">
          <div className="font-bold">{balance.userName}</div>
          <div>{balance.accountType}</div>
        </div>
        <div className="h-full align-middle items-center justify-center flex flex-col">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Hero;
