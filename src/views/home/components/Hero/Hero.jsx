import { motion } from "framer-motion";

import solastaLogo from "../../../../assets/solasta-logo.svg"
import heroBg from "../../../../assets/hero-bg.svg";

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const targetDate = new Date("2024-03-01T00:00:00");
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="bg-opacity-50 bg-black"
      style={{
        background: `url(${heroBg}) no-repeat center center/cover`,
      }}
    >
      <div className="container mx-auto pb-20 h-lvh">
        <div className="h-fit flex flex-col">
          <div className="">
            <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-20 pt-14 px-8 pb-12 lg:pb-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="grid place-items-center mt-12 mx-auto"
              >
                <h1 className="md:text-9xl sm:text-6xl text-3xl">
                  SOLASTA
                </h1>
                <p className="mt-6 font-inversionz text-center text-3xl uppercase font-medium tracking-tighter">
                  what goes around comes around
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="overflow-x-clip"
              >
                <img
                  loading="lazy"
                  className="w-24 md:w-full max-w-sm mx-auto"
                  src={solastaLogo}
                  alt="Solasta"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
