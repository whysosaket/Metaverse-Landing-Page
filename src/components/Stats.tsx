import GradientText from "./shared/GradientText";
import Inter from "./shared/Inter";

const Stats = () => {
  return (
    <div className="md:flex justify-between align-middle md:my-28 my-14">
      <div className="md:w-5/12">
        <div className="text-[2.6rem] my-4 font-universo md:text-justify leading-tight text-center">
          Explore the Virtual <GradientText text="World." />
        </div>
        <p className="text-gray-400 md:text-justify text-center">
          The first time you try it, see what it<Inter text="'" />s like to explore a virtual
          world using VR and AR with a free service.
        </p>
      </div>
      <div className="md:w-1/3 flex justify-between md:justify-center gap-10 font-universothin mt-2">
        <div className="md:w-1/3 w-1/2">
            <h1 className="font-semibold text-center md:text-start text-5xl my-2"><Inter text="43K+" /></h1>
            <p className="text-gray-400 text-center md:text-start">Liason partner to collaborate</p>
        </div>
        <div className="md:w-1/3 w-1/2">
            <h1 className="font-semibold text-center md:text-start text-5xl my-2"><Inter text="187K+" /></h1>
            <p className="text-gray-400 text-center md:text-start">Every month, active users interact</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
