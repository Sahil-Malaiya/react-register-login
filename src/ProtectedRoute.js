import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const loginStatus = localStorage.getItem("loggedIn");
  return loginStatus === "true" ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
