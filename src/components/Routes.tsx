import React from "react";
import { Routes as SwitchRoutes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const Routes = () => {
  return (
    <SwitchRoutes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </SwitchRoutes>
  );
};
