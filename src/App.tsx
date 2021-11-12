import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/organisms/Header";
import { Routes } from "./components/Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <Header />
        <Routes />
      </QueryClientProvider>
    </Router>
  );
}
