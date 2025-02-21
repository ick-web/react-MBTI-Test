import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const ProtectedLayout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <p>로딩 중...</p>;

  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedLayout;
