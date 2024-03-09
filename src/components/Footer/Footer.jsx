import { Link } from "react-router-dom";

import nssceLogo from "../../assets/nssce_logo_full_white.svg"
import stacWhiteLogo from "../../assets/stac-white-logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {

  return (
    <footer className="flex flex-col items-center p-4 footer text-white font-medium">
      <div className="container max-w-screen-xl m-4 mb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 w-full justify-between gap-10">
        <div className="">
          <Link to="/">
            <p>Home</p>
          </Link>
          {/* <a href="">
            <p>Meet the team</p>
          </a> */}
          <Link to="/sponsors">
            <p>Sponsors</p>
          </Link>
          <Link to="https://maps.app.goo.gl/CvDBUQgwp224vggz9">
            <a href="https://maps.app.goo.gl/CvDBUQgwp224vggz9">
              <p>College MAP</p>
            </a>
          </Link>
        </div>
        {/* <div className="">
          <a href="">
            <h1>Information</h1>
          </a>
          <a href="">
            <p>FAQ</p>
          </a>
          <a href="">
            <p>Blog</p>
          </a>
          <a href="">
            <p>Support</p>
          </a>
        </div> */}
        <div className="">
          <Link to="/l/about-college" target="_blank">
            <p>About College</p>
          </Link>
          <Link to="/l/about-solasta" target="_blank">
            <p>About Solasta</p>
          </Link>
          <Link to="/l/contact" target="_blank">
            <p>Contact us</p>
          </Link>
        </div>
        <div className="hidden md:block"></div>
        <div className="hidden md:flex flex-col items-center md:col-span-1">
          <p className="font-sans uppercase text-white text-sm">Powered By</p>
          <a href="#"> 
            <img src={stacWhiteLogo} alt="stac-logo" className="md:w-36 w-24" />
          </a>
          <p className="font-orbitron tracking-wide font-bold text-white text-sm">
            2024
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center md:hidden">
          <p className="font-sans uppercase text-white text-sm">Powered By</p>
          <a href="#">
            <img src={stacWhiteLogo} alt="stac-logo" className="md:w-36 w-24" />
          </a>
          <p className="text-sm font-orbitron tracking-wide font-bold text-white">
            2024
          </p>
        </div>


      <hr className="w-full max-w-screen-xl divider" />
      <div className="flex flex-col flex-hidden sm:flex-row gap-8 justify-between items-center container max-w-screen-xl mb-8 mt-8">
        <div className="flex justify-center lg:justify-start ">
          <img src={nssceLogo} alt="nssce" className="md:w-48 w-28" />
        </div>
        <div className="flex flex-wrap justify-center  text-white font-light">
          <Link to="/terms">
            <p className="px-[20px]">Terms</p>
          </Link>

          <Link to="/l/privacy-policy">
            <p className="px-[20px]">Privacy</p>
          </Link>
          <Link to="/cancellation">
            <p className="px-[20px]">Refund & Cancellation Policy</p>
          </Link>
        </div>
        <div className="flex">
          <a
            className="icon-container"
            href="#"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a className="icon-container" href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a className="icon-container" href="https://www.instagram.com/solasta_24_/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
