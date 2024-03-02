import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing";
import About from "../pages/about";
import Offres from "../pages/offres";
const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />} />
      <Route path="apropos" element={<About />} />
      <Route path="offres" element={<Offres />} />
    </Routes>
  );
};

export default HomeRoutes;
