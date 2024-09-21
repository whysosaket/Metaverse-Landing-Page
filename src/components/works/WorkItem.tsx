import { FaArrowRight } from "react-icons/fa";

const WorkItem = (props: {title: string, text: string}) => {
  return (
    <div className="border-[3px] border-blue-900/40 bg-blue-950/40 rounded-2xl p-6">
        <h1 className="text-xl my-2">{props.title}</h1>
        <h2 className="text-gray-500 font-universolight my-2">{props.text}</h2>
        <button className="font-inter font-light mt-12 flex align-middle">
            <span className="my-auto">Learn More</span>
            <FaArrowRight className="my-auto mx-3" />
        </button>
    </div>
  )
}

export default WorkItem