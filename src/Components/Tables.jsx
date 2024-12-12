import { useEffect, useState } from "react";
import { useTheme } from "../Context/ThemeContext";

function Tables() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isDark } = useTheme();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const transaction = await fetch("http://localhost:3000/transactions");
        if (!transaction.ok) {
          throw new Error(`Failed to fetch`);
        }
        const transactionData = await transaction.json();
        setTransactions(transactionData);
        console.log(transactionData);
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
    <table className="table-auto w-full rounded-lg border-collapse shadow-md">
      <thead
        className={
          isDark ? `bg-blue-500 text-white` : `bg-gray-100 text-gray-700`
        }
      >
        <tr>
          <th className="px-6 py-3 text-left text-sm font-bold ">
            Date & Time
          </th>
          <th className="px-6 py-3 text-left text-sm font-bold ">Type</th>
          <th className="px-6 py-3 text-left text-sm font-bold ">From / To</th>
          <th className="px-6 py-3 text-left text-sm font-bold">Description</th>
          <th className="px-6 py-3 text-left text-sm font-bold ">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr
            key={transaction.id}
            className={
              isDark
                ? `even:bg-gray-700 text-gray-50`
                : `even:bg-gray-50 text-gray-500 `
            }
          >
            <td className="px-6 py-3 text-left text-sm   font-medium">
              {transaction.date}
            </td>
            <td className="px-6 py-3 text-left text-sm  font-medium">
              {transaction.type}
            </td>
            <td className="px-6 py-3 text-left text-sm   font-medium">
              {transaction.from}
            </td>
            <td className="px-6 py-3 text-left text-sm  font-medium">
              {transaction.description}
            </td>
            <td
              className={`px-6 py-3 text-left text-sm   font-medium ${
                transaction.type === "CREDIT"
                  ? `text-green-600`
                  : `text-red-600`
              }`}
            >
              {transaction.type === "CREDIT" ? "+ " : "- "}{" "}
              {Math.abs(transaction.amount).toLocaleString()},00
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Tables;
