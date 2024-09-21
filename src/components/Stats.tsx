import GradientText from "./shared/GradientText";
import Inter from "./shared/Inter";

const Stats = () => {
  return (
    <div className="flex justify-between align-middle my-20">
      <div className="w-6/12">
        <div className="text-[3.2rem] my-4 font-universo text-justify leading-none">
          Explore the Virtual <GradientText text="World." />
        </div>
        <p className="text-gray-400 text-justify">
          The first time you try it, see what it<Inter text="'" />s like to explore a virtual
          world using VR and AR with a free service.
        </p>
      </div>
      <div className="w-1/3 flex justify-center gap-10 font-universothin my-auto">
        <div className="w-1/3">
            <h1 className="font-semibold text-5xl my-2"><Inter text="43K+" /></h1>
            <p className="text-gray-400">Liason partner to collaborate</p>
        </div>
        <div className="w-1/3">
            <h1 className="font-semibold text-5xl my-2"><Inter text="187K+" /></h1>
            <p className="text-gray-400">Every month, active users interact</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
