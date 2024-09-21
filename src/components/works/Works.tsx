import GradientText from "../shared/GradientText"
import WorkItem from "./WorkItem"

const WorksData = [
    { title: "Download App", text: "Download our app on your smartphone or computer to easily access virtual reality experiences anytime, anywhere." },
    { title: "Connect Virtual Reality", text: "Seamlessly connect to virtual reality by using our platform, which allows you to immerse yourself in engaging environments." },
    { title: "Explore World", text: "Dive into a vast array of worlds and experiences that virtual reality has to offer, all through our user-friendly application." },
];

const Works = () => {
  return (
    <div>
        <h1 className="text-[3rem] text-center">
        How it <GradientText text="works"/>?
        </h1>
        <div className="flex gap-20 my-10">
            <WorkItem title={WorksData[0].title} text={WorksData[0].text} />
            <WorkItem title={WorksData[1].title} text={WorksData[1].text} />
            <WorkItem title={WorksData[2].title} text={WorksData[2].text} />
        </div>
    </div>
  )
}

export default Works