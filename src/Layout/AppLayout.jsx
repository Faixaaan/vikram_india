import { Outlet , useLocation } from "react-router-dom";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import FloatingSocial from "../Pages/Home/Components/FloatingSocial";

export default function AppLayout() {
      const location = useLocation();
  return (
    <>
     {location.pathname !== "/" && <Navbar />}
      <Outlet />
    {location.pathname !== "/" && <Footer />}
    {location.pathname !== "/" && <FloatingSocial />}
    </>
  );
}
