import { Navigate } from "react-router";
import { UseAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = UseAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};
export default ProtectedRoute;
