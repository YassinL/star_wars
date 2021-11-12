import {
  Routes as SwitchRoutes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { People } from "../pages/Peoples";
import { OnePerson } from "../pages/Person";
import { OnePlanet } from "../pages/Planet";
import { Planet } from "../pages/Planets";
import { Register } from "../pages/Register";
import { OneStarship } from "../pages/Starship";
import { Starship } from "../pages/Starships";

const useAuth = () => {
  const token = localStorage.getItem("accessToken");
  return token !== null;
};

const PrivateOutlet = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export const Routes = () => {
  const isAuthenticated = useAuth();
  console.log("isAuthenticated", isAuthenticated);
  return (
    <SwitchRoutes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/home" element={<PrivateOutlet />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/planets" element={<Planet />} />
      <Route path="/planets/:id" element={<OnePlanet />} />
      <Route path="/people" element={<People />} />
      <Route path="/people/:id" element={<OnePerson />} />
      <Route path="/starships" element={<Starship />} />
      <Route path="/starships/:id" element={<OneStarship />} />
    </SwitchRoutes>
  );
};
