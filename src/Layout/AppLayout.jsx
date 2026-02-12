import { Outlet , useLocation } from "react-router-dom";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";

export default function AppLayout() {
      const location = useLocation();
  return (
    <>
     {location.pathname !== "/" && <Navbar />}
      <Outlet />
    {location.pathname !== "/" && <Footer />}
    </>
  );
}
