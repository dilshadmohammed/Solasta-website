import { motion } from "framer-motion";

import Countdown from "../Countdown/Countdown";
import FilledButton from "../../../../components/FilledButton";

import karma24 from "../../../../assets/karma24.svg";
import budha from "../../../../assets/images/buddha.jpg";
import heroBg from "../../../../assets/hero-bg.svg";
import kmctLogo from "../../../../assets/kmct-logo.png";
import brdigeOnLogo from "../../../../assets/bridge-on-logo.svg";

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
                <div className="flex mb-6 mx-auto gap-2">
                  <img src={kmctLogo} alt="KMCT CE" className="h-12 lg:h-14" />
                  <div className="bg-white h-12 lg:h-14 p-2 rounded-xl">
                    <img src={brdigeOnLogo} alt="KMCT CE" className="h-full" />
                  </div>
                </div>
                <img
                  loading="lazy"
                  className="max-w-xl mx-auto w-full"
                  src={karma24}
                  alt="KARMA'24"
                />
                <p className="mt-6 font-inversionz text-center text-3xl uppercase font-medium tracking-tighter">
                  what goes around comes around
                </p>
                <FilledButton text="Get Tickets" onClick={() => navigate("/tickets")} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="overflow-x-clip"
              >
                <img
                  className="max-w-xl mx-auto w-full cursor-grab mix-blend-screen transition-all duration-300 ease-out"
                  src={budha}
                  alt="budha"
                />
              </motion.div>
            </div>
            {/* <motion.div
              // staggered animation while in view
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, staggerChildren: 0.5 }}
              className="grid grid-cols-4 gap-4 md:gap-10 max-w-2xl mx-auto"
            >
              <Countdown targetDate={targetDate} title="Days" />
              <Countdown targetDate={targetDate} title="Hours" />
              <Countdown targetDate={targetDate} title="Minutes" />
              <Countdown targetDate={targetDate} title="Seconds" />
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
