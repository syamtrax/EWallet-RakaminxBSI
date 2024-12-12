import { Eye, Plus, Send, EyeOff } from "lucide-react";
import { Link } from "react-router";
import { useTheme } from "../Context/ThemeContext";
import { useEffect, useState } from "react";

function Statistics() {
  const { isDark } = useTheme();
  const [balance, setBalance] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hiddenBalance, setHideBalance] = useState(true);

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
  console.log(error);

  const handleEye = () => {
    setHideBalance(!hiddenBalance);
  };

  return (
    <div className="container mx-auto flex gap-4 h-[216px]">
      <div className="w-1/6 aspect-square shadow-lg rounded-3xl bg-[#19918F] justify-center align-middle items-center h-full flex flex-col">
        <div className="text-white">Account No.</div>
        <div className="text-white text-3xl font-bold">
          {error !== null ? "Data is not loaded" : `${balance.accountNo}`}
        </div>
      </div>
      <div className="w-5/6 flex justify-between shadow-lg rounded-3xl align-middle items-center px-20">
        <div className={isDark ? `text-white` : `text-black`}>
          <div className="text-2xl">Balance</div>
          <div className="flex items-center gap-2">
            <div className="text-6xl font-bold">
              {hiddenBalance ? `Rp ${balance.amount}` : "😭😭😭😭😭"}
            </div>
            <button onClick={handleEye}>
              {hiddenBalance ? <Eye /> : <EyeOff />}
            </button>
          </div>
        </div>
        <div className="bg-blue flex gap-2">
          <Link to="/topup">
            <button className="bg-[#19918F] p-4 text-white rounded-lg flex">
              <Plus size={24} />
            </button>
          </Link>
          <Link to="/transfer">
            <button className="bg-[#19918F] p-4 text-white rounded-lg flex">
              <Send size={24} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Statistics;
