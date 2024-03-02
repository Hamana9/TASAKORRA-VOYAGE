import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HomeRoutes from "./routes/HomeRoutes";
import NavbarTasakorra from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarTasakorra />
        {/* <Navbar /> */}
        {/* <div className="pt-5 mt-2"> */}
        <HomeRoutes />
       

        {/* </div> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
