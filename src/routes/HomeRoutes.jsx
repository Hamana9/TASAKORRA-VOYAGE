import { Route, Routes } from "react-router-dom";
import Landing from "../pages/landing";
import About from "../pages/about";
const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Landing />} />
      <Route path="apropos" element={<About />} />
    </Routes>
  );
};

export default HomeRoutes;
