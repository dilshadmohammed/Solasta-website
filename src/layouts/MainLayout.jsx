import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import fullBg from "../assets/full-bg.svg"
import Footer from "../components/Footer/Footer";
import purlpleBg from "../assets/v882-aew-56-b.jpg"
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

const MainLayout = () => {
  return (
    <div
      // style={{
      //   background: `url(${fullBg}) no-repeat center center/cover`,
      // }}
    > <div className="fixed inset-0 w-lvw h-lvh -z-10 opacity-30"
    // style={{
    //     background: `url(${fullBg}) no-repeat center center/cover`,
    //   }}   
      >
        <BackgroundGradientAnimation containerClassName={"no-repeat center center/cover"}>
        </BackgroundGradientAnimation>
      </div>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
    </div>
  );
};

export default MainLayout;
