import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = localStorage.getItem("loggedIn");

  // if logged in → allow children, else redirect to home
  return auth ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
