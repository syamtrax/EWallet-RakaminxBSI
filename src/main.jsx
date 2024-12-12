import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import TransferPage from "./Pages/TransferPage.jsx";
import TopUpPage from "./Pages/TopUpPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          />

          <Route
            path="/transfer"
            element={
              <ProtectedRoute>
                <TransferPage />{" "}
              </ProtectedRoute>
            }
          />

          <Route
            path="/topup"
            element={
              <ProtectedRoute>
                <TopUpPage />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);
