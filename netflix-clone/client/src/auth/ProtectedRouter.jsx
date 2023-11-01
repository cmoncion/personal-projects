import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter = () => {
  const [isAuth, setIsAuth] = useState(true);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouter;
