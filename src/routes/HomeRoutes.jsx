import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing";
import About from "../pages/about";
import Offres from "../pages/offres";
import OffresDetail from "../pages/offreDetail";
import Login from "../pages/admin/login";
 import Liste from "../pages/admin/listeOffre";
 import Ajout from "../pages/admin/ajout";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />} />
      <Route path="apropos" element={<About />} />
      <Route path="offres" element={<Offres />} />
      <Route path="detail" element={<OffresDetail/>} />
      {/* ADMIN */}
      <Route path="login" element={<Login/>} />
       <Route path="liste" element={<Liste/>} />
      <Route path="ajout" element={<Ajout/>} /> 
    </Routes>
  );
};

export default HomeRoutes;
