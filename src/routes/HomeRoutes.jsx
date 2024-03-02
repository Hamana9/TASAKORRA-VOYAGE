import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing";
import About from "../pages/about";
import Offres from "../pages/offres";
import OffresDetail from "../pages/offreDetail";
// import Test from "../pages/test";
import Login from "../pages/admin/login";
import Liste from "../pages/admin/liste";


const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />} />
      <Route path="apropos" element={<About />} />
      <Route path="offres" element={<Offres />} />
      <Route path="detail" element={<OffresDetail/>} />
      {/* <Route path="test" element={<Test/>} /> */}
      <Route path="login" element={<Login/>} />
      <Route path="liste" element={<Liste/>} />
    </Routes>
  );
};

export default HomeRoutes;
