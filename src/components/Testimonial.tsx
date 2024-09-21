import TestimonialImage from "../assets/testimonial.png";
import GradientText from "./shared/GradientText";
import Inter from "./shared/Inter";

const Testimonial = () => {
  return (
    <div className="mt-12 md:mt-24 md:flex align-middle">
      <img className="w-[30rem]" src={TestimonialImage} />
      <div className="">
        <h1 className="md:text-[2.6rem] text-3xl text-center md:text-start  leading-none my-4 md:w-2/3">
          What our trusted
          <GradientText text=" clients" /> say?
        </h1>
        <p className="md:w-5/6 text-gray-400 font-universolight my-4">
          <Inter text="-" /> I was amazed at how easy it was to download the app
          and connect to virtual reality. The seamless experience allowed me to
          explore incredible worlds right from my smartphone. Highly recommend it to anyone looking to immerse
          themselves in new experiences!
        </p>
        <p className="text-gray-400 font-universolight my-4">
          <Inter text="-" /> Saket Aryan
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
