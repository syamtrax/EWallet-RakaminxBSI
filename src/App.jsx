import { NavLink } from "react-router";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Statistics from "./Components/Statistics";
import Table from "./Components/Table";
import { ThemeProvider } from "./Context/ThemeContext";
import { useTheme } from "./Context/ThemeContext";

function App() {
  const { isDark } = useTheme();
  return (
    <div
      className={`h-screen bg-[#FAFBFD] ${
        isDark ? `bg-gray-800` : `bg-[#FAFBFD] `
      }`}
    >
      <Navbar />
      <div
        className={`bg-[#FAFBFD] relative top-24 ${
          isDark ? `bg-gray-800` : `bg-[#FAFBFD] `
        }`}
      >
        <Hero />
        <Statistics />
        <Table />
      </div>
    </div>
  );
}

export default App;
