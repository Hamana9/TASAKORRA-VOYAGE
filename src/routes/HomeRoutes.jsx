import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing";
import About from "../pages/about";
import Offres from "../pages/offres";
import OffresDetail from "../pages/offreDetail";
const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />} />
      <Route path="apropos" element={<About />} />
      <Route path="offres" element={<Offres />} />
      <Route path="detail" element={<OffresDetail/>} />
    </Routes>
  );
};

export default HomeRoutes;
