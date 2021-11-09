import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components/Routes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </Router>
  );
}
