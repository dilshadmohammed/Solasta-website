import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import fullBg from "../assets/full-bg.svg"
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div
      style={{
        background: `url(${fullBg}) no-repeat center center/cover`,
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
