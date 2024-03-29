import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import solastaLogo from "../../assets/solasta-logo.svg"
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const shouldHaveBackground = scrollPosition > 0;
    setScrollBackground(shouldHaveBackground);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  const navItems = [
    { id: 1, text: "Events", link: "/", sectionId: "events" },
    { id: 3, text: "Sponsors", link: "/sponsors", sectionId: "sponsors"}
  ];

  return (
    <>
      <div
        className="sticky top-0 z-40 bg-[#150b3f] bg-opacity-30"
        style={{
          backdropFilter: "blur(10px)",
        }}
        
      >
        <div
          className={`container flex justify-between items-center w-full text-cyan-300  text-lg px-4`}
        >
          <Link to="/" onClick={() => handleScrollToSection("hero")}>
            <img
              src={solastaLogo}
              className={`p-2 lg:py-4 transition-all duration-500 ease-in-out h-12 w-12 md:h-16 md:w-16 ${
                scrollBackground ? "" : "transform scale-125 w-17"
              }`}
              alt="SolastaLogo"
            />
          </Link>

          <ul className="hidden lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                onClick={() => handleScrollToSection(item.sectionId)}
                className={`p-1 hover:text-cyan-50 rounded-xl px-6 cursor-pointer duration-300 `}
              >
                {item.text}
              </NavLink>
            ))}
          </ul>
          <div onClick={handleNav} className="block lg:hidden">
            {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
          </div>
        </div>
      </div>

      <div
        className={`fixed ease-in-out  duration-500 top-0 bottom-0 z-40 ${
          nav ? "lg:hidden left-0 border-r border-r-gray-800" : "left-[-100%]"
        }`}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <Link to="/" onClick={handleNav}>
          <img src={solastaLogo} className="h-16 ml-6 mt-4" alt="SolastaLogo" />
        </Link>
        <ul className="flex flex-col mt-8">
          {navItems.map((item) => (
            <NavLink
              onClick={() => {
                if (item.sectionId) handleScrollToSection(item.sectionId);
                handleNav();
              }}
              to={item.link}
              className={`p-4 hover:text-cyan-50 text-cyan-300 text-2xl rounded-xl px-6 cursor-pointer duration-300 `}
            >
              {item.text}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
