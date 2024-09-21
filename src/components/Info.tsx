import GradientText from "./shared/GradientText";
import Inter from "./shared/Inter";
import {motion} from "framer-motion";

const Info = () => {
  return (
    <div className="my-16 md:my-32 md:px-20">
      <motion.h1
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{duration: 0.7, delay: 0.1}}
      viewport={{ once: true }}
      className="md:text-[2.8rem] text-2xl text-center md:leading-normal">
        Virual Reality enhances the new experience, More and more people like
        it, the more <GradientText text="amazing " />
        virtual reality is.
      </motion.h1>
      <div className="md:flex justify-evenly my-12 md:mx-0 mx-16">
        <motion.div
        initial={{ x: -200, y: 200, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{duration: 0.7, delay: 0.1}}
        viewport={{ once: true }}
        className="md:w-1/6">
          <h1 className="text-center">More than 80<Inter text="%" /></h1>
          <p className="text-gray-400 font-universolight text-xs text-center my-2">
            The world is now using Virtual Reality for life
          </p>
        </motion.div>
        <div className="bg-gray-500 text-gray-500 w-[1px] min-h-max"></div>
        <motion.div
        initial={{ x: 0, y: 200, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{duration: 0.7, delay: 0.1}}
        viewport={{ once: true }}
        className="md:w-1/6">
          <h1 className="text-center">1 in 3</h1>
          <p className="text-gray-400 font-universolight text-xs text-center my-2">
            Customers turn to social media for advice
          </p>
        </motion.div>
        <div className="bg-gray-500 text-gray-500 w-[1px] min-h-max"></div>
        <motion.div
        initial={{ x: 200, y: 200, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{duration: 0.7, delay: 0.1}}
        viewport={{ once: true }}
        className="md:w-1/6">
          <h1 className="text-center"><Inter text="$" /> 10 Billion</h1>
          <p className="text-gray-400 font-universolight text-xs text-center my-2">
            Spent making new resolutions in 2022
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Info;
