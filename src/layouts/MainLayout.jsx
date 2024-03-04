import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

import heroBg from "../assets/hero-bg.svg";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div
      style={{
        background: `url(${heroBg}) no-repeat center center/cover`,
      }}
    >
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
