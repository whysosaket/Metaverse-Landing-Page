import GradientText from "../shared/GradientText";
import Faq from "./Faq";
import {motion} from "framer-motion";

const FaqComponent = () => {
  return (
    <div className="md:flex gap-32 my-12 md:my-28">
      <div className="md:w-1/2">
        <motion.h1
        initial={{ x: -200, y: 200, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{duration: 0.6, delay: 0.1}}
        viewport={{ once: true }}
        className="md:text-[2.6rem] text-3xl text-center md:text-start md:leading-normal">
          Create your own <GradientText text="world" /> right now.
        </motion.h1>
        <motion.p 
        initial={{ x: -200, y: 200, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{duration: 0.6, delay: 0.15}}
        viewport={{ once: true }}
        className="text-gray-500 font-universolight my-4 text-center md:text-start">
          In our perspective, we prepare for responsible growth with something
          that we must always pursue and create a structured developed world to
          be better.
        </motion.p>
      </div>
      <motion.div
      initial={{ x: 200, y: 200, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{duration: 0.7, delay: 0.1}}
      viewport={{ once: true }}
      className="md:w-1/2">
        <Faq />
      </motion.div>
    </div>
  );
};

export default FaqComponent;
