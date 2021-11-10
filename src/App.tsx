import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/organisms/Header";
import { Routes } from "./components/Routes";
// import { QueryClient, QueryClientProvider } from "react-query";

// const queryClient = new QueryClient();

export function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}
