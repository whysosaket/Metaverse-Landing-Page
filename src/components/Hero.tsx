import { HiOutlineArrowLongRight } from "react-icons/hi2";

const headingStyle =
  "font-universoblack text-center md:text-start text-4xl md:text-[6.5rem] my-0 p-0 leading-none tracking-widest";
import Mascot from "../assets/mascot.png";
import Button from "./shared/Button";
import Inter from "./shared/Inter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="md:mt-12 mb-24 flex flex-col-reverse md:flex-row relative overflow-hidden">
      {" "}
      {/* Ensure overflow-hidden is on the correct container */}
      <div className="md:w-2/3">
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-secondary text-center md:text-start my-4 md:my-0"
        >
          Participate in experiences in the metaverse
        </motion.h1>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={headingStyle}
        >
          UNLEASH
        </motion.h1>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={headingStyle}
        >
          THE
        </motion.h1>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={headingStyle}
        >
          WORLD
          <Inter text="'" />S
        </motion.h1>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className={headingStyle}
        >
          METAVERSE
        </motion.h1>
        <div className="md:w-2/3 my-6 tracking-wide">
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-gray-400 font-universolight text-xs leading-loose text-center md:text-start"
          >
            Open the global metavserse, Innovatio s in VR and AR to amplify the
            effect of their presense place you in the world in 360 degrees
            viewpoint Volume.
          </motion.p>
        </div>
        <div className="md:w-2/3 flex justify-center md:justify-start mt-6">
          <motion.button
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.75 }}
            className="p-[1px] rounded-3xl  bg-custom-gradient hover:bg-custom-gradient2 mr-4"
          >
            <button className="px-6 py-3 rounded-3xl bg-black/90 flex align-middle justify-center">
              <span className="my-auto">
                Let
                <Inter text="'" />s Go
              </span>
              <HiOutlineArrowLongRight className="my-auto mx-2" size={25} />
            </button>
          </motion.button>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.8 }}
          >
            <Button text="Watch Videos" />
          </motion.div>
        </div>
      </div>
      <div className="md:w-1/3">
        <motion.img
          initial={{ x: 200, opacity: 0, rotateZ: 15 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:absolute  md:left-72 md:-top-60 md:w-[120rem] md:h-[60rem] rotate-[15deg]"
          src={Mascot}
          alt="Mascot"
        />{" "}
        {/* Use relative size constraints */}
      </div>
    </div>
  );
};

export default Hero;
