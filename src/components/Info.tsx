import GradientText from "./shared/GradientText";
import Inter from "./shared/Inter";

const Info = () => {
  return (
    <div className="my-24 px-20">
      <h1 className="text-[2.8rem] text-center">
        Virual Reality enhances the new experience, More and more people like
        it, the more <GradientText text="amazing " />
        virtual reality is.
      </h1>
      <div className="flex justify-evenly my-12">
        <div className="w-1/6">
          <h1 className="text-center">More than 80<Inter text="%" /></h1>
          <p className="text-gray-400 font-universolight text-xs text-center my-2">
            The world is now using Virtual Reality for life
          </p>
        </div>
        <div className="bg-gray-500 text-gray-500 w-[1px] min-h-max"></div>
        <div className="w-1/6">
          <h1 className="text-center">1 in 3</h1>
          <p className="text-gray-400 font-universolight text-xs text-center my-2">
            Customers turn to social media for advice
          </p>
        </div>
        <div className="bg-gray-500 text-gray-500 w-[1px] min-h-max"></div>
        <div className="w-1/6">
          <h1 className="text-center"><Inter text="$" /> 10 Billion</h1>
          <p className="text-gray-400 font-universolight text-xs text-center my-2">
            Spent making new resolutions in 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
