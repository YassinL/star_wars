import React from "react";
import { Routes as SwitchRoutes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const Routes = () => {
  return (
    <SwitchRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </SwitchRoutes>
  );
};
