import { HiOutlineArrowLongRight } from "react-icons/hi2";

const headingStyle =
  "font-universoblack text-[6.5rem] my-0 p-0 leading-none tracking-widest";
import Mascot from "../assets/mascot.png";
import Button from "./shared/Button";

const Hero = () => {
  return (
    <div className="mt-12 mb-24 flex relative overflow-hidden">
      {" "}
      {/* Ensure overflow-hidden is on the correct container */}
      <div className="w-2/3">
        <h1 className="text-secondary">
          Participate in experiences in the metaverse
        </h1>
        <h1 className={headingStyle}>UNLEASH</h1>
        <h1 className={headingStyle}>THE</h1>
        <h1 className={headingStyle}>WORLD<span className="font-inter">'</span>S</h1>
        <h1 className={headingStyle}>METAVERSE</h1>
       <div className="w-2/3 my-6 tracking-wide">
       <p className="text-gray-400 font-universolight text-xs leading-loose">
          Open the global metavserse, Innovatio s in VR and AR to amplify the
          effect of their presense place you in the world in 360 degrees
          viewpoint Volume.
        </p>
       </div>
       <div className="w-2/3 flex justify-start mt-6">
            <button className="p-[1px] rounded-3xl  bg-custom-gradient hover:bg-custom-gradient2 mr-4">
                <button className="px-6 py-3 rounded-3xl bg-black/90 flex align-middle justify-center">
                    <span className="my-auto">Let<span className="font-inter">'</span>s Go</span>
                    <HiOutlineArrowLongRight className="my-auto mx-2" size={25} />
                </button>
                
            </button>
            <Button text="Watch Videos" />
       </div>
      </div>
      <div className="w-1/3">
        <img
          className="absolute left-72 -top-60 w-[120rem] h-[60rem] rotate-[15deg]"
          src={Mascot}
          alt="Mascot"
        />{" "}
        {/* Use relative size constraints */}
      </div>
    </div>
  );
};

export default Hero;
