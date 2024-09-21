import GradientText from "../shared/GradientText";
import Faq from "./Faq";

const FaqComponent = () => {
  return (
    <div className="flex gap-32 my-28">
      <div className="w-1/2">
        <h1 className="text-[2.6rem]">
          Create your own <GradientText text="world" /> right now.
        </h1>
        <p className="text-gray-500 font-universolight my-4">
          In our perspective, we prepare for responsible growth with something
          that we must always pursue and create a structured developed world to
          be better.
        </p>
      </div>
      <div className="w-1/2">
        <Faq />
      </div>
    </div>
  );
};

export default FaqComponent;
