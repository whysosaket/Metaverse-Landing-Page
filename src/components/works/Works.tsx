import GradientText from "../shared/GradientText"
import WorkItem from "./WorkItem"
import {motion} from "framer-motion";

const WorksData = [
    { title: "Download App", text: "Download our app on your smartphone or computer to easily access virtual reality experiences anytime, anywhere." },
    { title: "Connect Virtual Reality", text: "Seamlessly connect to virtual reality by using our platform, which allows you to immerse yourself in engaging environments." },
    { title: "Explore World", text: "Dive into a vast array of worlds and experiences that virtual reality has to offer, all through our user-friendly application." },
];

const Works = () => {
  return (
    <div>
        <motion.h1
        initial={{ x: 0, y: 200, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{duration: 0.7, delay: 0.1}}
        viewport={{ once: true }}
        className="text-3xl md:text-[3rem] text-center">
        How it <GradientText text="works"/>?
        </motion.h1>
        <div className="flex md:flex-row flex-col gap-10 md:gap-20 my-10">
          <motion.div
          initial={{ x: -200, y: 200, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{duration: 0.7, delay: 0.15}}
          viewport={{ once: true }}
          >
            <WorkItem title={WorksData[0].title} text={WorksData[0].text} />
          </motion.div>
          <motion.div
          initial={{ x: 200, y: 200, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{duration: 0.7, delay: 0.15}}
          viewport={{ once: true }}
          >
            <WorkItem title={WorksData[1].title} text={WorksData[1].text} />
          </motion.div>
          <motion.div
          initial={{ x: 200, y: 200, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{duration: 0.7, delay: 0.15}}
          viewport={{ once: true }}
          >
            <WorkItem title={WorksData[2].title} text={WorksData[2].text} />
          </motion.div>
        </div>
    </div>
  )
}

export default Works