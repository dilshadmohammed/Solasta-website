import { motion } from "framer-motion";

import karma24 from "../../../../assets/karma24.svg";
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
      <div className="container mx-auto pb-20">
        <div className="h-fit flex flex-col">
          <div className="">
            <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-6 px-8 pb-12 lg:pb-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="grid place-items-center mt-12"
              >
                <img
                  loading="lazy"
                  className="max-w-xl mx-auto w-full"
                  src={karma24}
                  alt="KARMA'24"
                />
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
