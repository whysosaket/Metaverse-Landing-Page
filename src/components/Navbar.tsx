import Button from "./shared/Button"
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
    initial={{y: -100, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.6, delay: 0.1}}
    className="w-full flex justify-between align-middle">
        <div className="my-auto flex">
            <h1 className="text-2xl mr-12">MetaWorld</h1>
            <div className="hidden md:flex gap-6 my-auto">
                <span>How it works</span>
                <span>Product</span>
                <span>About</span>
                <span>Blog</span>
            </div>
        </div>
        <div className="flex my-auto">
            <button className="hidden md:flex px-6 py-3 font-semibold">Sign In</button>
            <Button text="Sign Up" />
        </div>
    </motion.div>
  )
}

export default Navbar