import { motion } from "framer-motion";
import solastaLogo from "../../../../assets/solasta-logo.svg"

const Hero = () => {

  return (
    <section>
      <div className="container mx-auto pb-20 h-lvh">
        <div className="h-fit flex flex-col">
          <div className="">
            <div className="container flex flex-col md:flex-row max-w-screen-xl mx-auto justify-evenly items-center mt-20 pt-14 px-8 pb-12 md:pb-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="grid place-items-center mt-12"
              >
                <h1 className="md:text-9xl text-7xl">
                  SOLASTA
                </h1>
                <p className="my-6 mt-2 md:mt-6 font-inversionz text-center text-3xl uppercase font-medium tracking-tighter">
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
                  className="w-32 md:w-full max-w-sm mx-auto"
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
