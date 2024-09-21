import TestimonialImage from "../assets/testimonial.png";
import GradientText from "./shared/GradientText";
import Inter from "./shared/Inter";
import {motion} from "framer-motion";

const Testimonial = () => {
  return (
    <div className="mt-12 md:mt-24 md:flex align-middle">
      <motion.img
      initial={{ x: 0, y: 200, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{duration: 0.7, delay: 0.15}}
          viewport={{ once: true }}
      className="w-[30rem]" src={TestimonialImage} />
      <div className="">
        <motion.h1
        initial={{ x: 200, y: 0, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{duration: 0.7, delay: 0.15}}
        viewport={{ once: true }}
        className="md:text-[2.6rem] text-3xl text-center md:text-start  leading-none my-4 md:w-2/3">
          What our trusted
          <GradientText text=" clients" /> say?
        </motion.h1>
        <motion.p
        initial={{ x: 200, y: 0, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{duration: 0.7, delay: 0.2}}
        viewport={{ once: true }}
        className="md:w-5/6 text-gray-400 font-universolight my-4">
          <Inter text="-" /> I was amazed at how easy it was to download the app
          and connect to virtual reality. The seamless experience allowed me to
          explore incredible worlds right from my smartphone. Highly recommend it to anyone looking to immerse
          themselves in new experiences!
        </motion.p>
        <motion.p
        initial={{ x: 200, y: 0, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{duration: 0.7, delay: 0.25}}
        viewport={{ once: true }}
        className="text-gray-400 font-universolight my-4">
          <Inter text="-" /> Saket Aryan
        </motion.p>
      </div>
    </div>
  );
};

export default Testimonial;
