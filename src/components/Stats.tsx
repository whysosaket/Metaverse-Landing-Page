import GradientText from "./shared/GradientText";
import Inter from "./shared/Inter";
import {motion} from "framer-motion";

const Stats = () => {
  return (
    <div className="md:flex justify-between align-middle md:my-28 my-14">
      <div className="md:w-5/12">
        <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{duration: 0.7, delay: 0.2}}
        viewport={{ once: true }}
        className="text-[2.6rem] my-4 font-universo md:text-justify leading-tight text-center">
          Explore the Virtual <GradientText text="World." />
        </motion.div>
        <motion.p
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{duration: 0.7, delay: 0.3}}
        viewport={{ once: true }}
        className="text-gray-400 md:text-justify text-center">
          The first time you try it, see what it<Inter text="'" />s like to explore a virtual
          world using VR and AR with a free service.
        </motion.p>
      </div>
      <div className="md:w-1/3 flex justify-between md:justify-center gap-10 font-universothin mt-2">
        <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{duration: 0.7, delay: 0.2}}
        viewport={{ once: true }}
        className="md:w-1/3 w-1/2">
            <h1 className="font-semibold text-center md:text-start text-5xl my-2"><Inter text="43K+" /></h1>
            <p className="text-gray-400 text-center md:text-start">Liason partner to collaborate</p>
        </motion.div>
        <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{duration: 0.7, delay: 0.3}}
        viewport={{ once: true }}
        className="md:w-1/3 w-1/2">
            <h1 className="font-semibold text-center md:text-start text-5xl my-2"><Inter text="187K+" /></h1>
            <p className="text-gray-400 text-center md:text-start">Every month, active users interact</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
