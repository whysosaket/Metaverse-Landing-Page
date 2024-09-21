import TestimonialImage from "../assets/testimonial.png";
import GradientText from "./shared/GradientText";
import Inter from "./shared/Inter";

const Testimonial = () => {
  return (
    <div className="mt-24 flex align-middle">
      <img className="w-[30rem]" src={TestimonialImage} />
      <div className="">
        <h1 className="text-[2.6rem] leading-none my-4 w-2/3">
          What our trusted
          <GradientText text=" clients" /> say?
        </h1>
        <p className="w-5/6 text-gray-400 font-universolight my-4">
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
