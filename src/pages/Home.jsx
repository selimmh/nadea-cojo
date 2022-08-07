import React from "react";
import photo from "../assets/photo.png";

import {
  RiLinkedinLine,
  RiDribbbleFill,
  RiInstagramLine,
  RiBehanceLine,
} from "react-icons/ri";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }}
    >
      {/* container */}
      <main className="flex flex-col-reverse md:flex-row items-center mt-[32px] text-dark mb-24">
        {/* info */}
        <section className="w-3/4 max-w-[676px]">
          <h1 className="lg:text-[40px] text-[24px] font-bold text-electromagnetic leading-tight mb-[24px]">
            Hello there, I am a Digital Designer crafting products that people
            love
          </h1>
          <h2 className="text-electromagnetic lg:text-[24px] text-[20px] tracking-wide max-w-[600px] mb-[24px]">
            My name is Nadejda, you can call me Nadia. I am a Digital&UI/UX
            Designer based in Suceava, Romania. I am specialized in designing
            Web and Mobile Interfaces, prints and digital art.
          </h2>
          {/* actions */}
          <div className="space-x-[24px] flex w-fit">
            <button className="whitespace-nowrap relative transition-all px-[20px] py-[10px] bg-pink border-[3px] text-dark shadow-square hover:shadow-none text-[20px] font-medium">
              Hire me
            </button>
            <button className="whitespace-nowrap transition-all px-[20px] py-[10px] border-[3px] text-dark shadow-square hover:shadow-none text-[20px] font-medium">
              See my projects
            </button>
          </div>

          {/* socials */}
          <ul className="flex mt-[216px] space-x-6 sm:absolute static">
            <li className="border-[2px] border-dark text-4xl ">
              <a href="">
                <RiLinkedinLine className="text-dark hover:text-white hover:bg-dark transition-all p-[4px]" />
              </a>
            </li>
            <li className="border-[2px] border-dark text-4xl">
              <a href="">
                <RiDribbbleFill className="text-dark hover:text-white hover:bg-dark transition-all p-[4px]" />
              </a>
            </li>
            <li className="border-[2px] border-dark text-4xl">
              <a href="">
                <RiInstagramLine className="text-dark hover:text-white hover:bg-dark transition-all p-[4px]" />
              </a>
            </li>
            <li className="border-[2px] border-dark text-4xl">
              <a href="">
                <RiBehanceLine className="text-dark hover:text-white hover:bg-dark transition-all p-[4px]" />
              </a>
            </li>
          </ul>
        </section>

        {/* image */}
        <div>
          <img className="scale-75 lg:scale-100" src={photo} alt="" />
        </div>
      </main>
    </motion.div>
  );
};

export default Home;
