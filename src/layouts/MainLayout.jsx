import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import fullBg from "../assets/full-bg.svg"
import Footer from "../components/Footer/Footer";
import purlpleBg from "../assets/v882-aew-56-b.jpg"

const MainLayout = () => {
  return (
    <div
      // style={{
      //   background: `url(${fullBg}) no-repeat center center/cover`,
      // }}
    > <div className="fixed inset-0 w-lvw h-lvh -z-10 opacity-30"
    style={{
        background: `url(${fullBg}) no-repeat center center/cover`,
      }}
      ></div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
