import { useState } from "react";

const Hireme = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div onClick={toggleOpen} className="z-50 fixed opacity-80 hover:opacity-100 right-2 md:right-10 bottom-10 bg-black md:w-20 md:h-20 md:text-[14px] flex align-middle text-white px-6 py-3 rounded-full text-center select-none cursor-pointer">
        <span className="my-auto">Hire Me</span>
      </div>
      {
        isOpen&&  <div className="font-inter z-50 fixed right-0 md:right-32 bottom-24 md:bottom-16 flex gap-6 bg-black px-6 py-3 rounded-3xl">
        <a href="https://drive.google.com/drive/folders/1X5QB6_CQgtkQCgt_sRsghn4NZH9aGQat?usp=sharing" target="_blank">Resume</a> | 
        <a href="https://resume.saketaryan.xyz/" target="_blank">Portfolio</a> | 
        <a href="https://x.com/whysosaket" target="_blank">Twitter</a> | 
        <a href="mailto:saketaryan@gmail.com">Email</a>
      </div>
      }
    
    </>
  );
};

export default Hireme;
