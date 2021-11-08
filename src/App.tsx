import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/Routes";

export function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
