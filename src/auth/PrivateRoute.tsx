import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/context/auth-context";

function PrivateRoute(): JSX.Element {
  const { userDetails, encodedToken } = useAuth();
  const location = useLocation();

  return userDetails && encodedToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoute };
