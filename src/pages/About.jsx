import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
      <section className="mt-[67px] mb-36">
        {/* services */}
        <div className="flex justify-between">
          <h2 className="text-[40px] font-bold">My services</h2>
          <button className="transition-all px-[20px] py-[10px] border-[3px] text-dark shadow-square hover:shadow-none text-[20px] font-medium">
            See my projects
          </button>
        </div>

        <div className="border-[3px] border-dark bg-[#ffffff] px-[68px] py-[48px] mt-[40px] mb-[124px]">
          <ul className="text-[24px] font-medium flex flex-col lg:flex-row w-full justify-between space-y-[56px] lg:space-y-0">
            <ol className="space-y-[56px]">
              <li>1. Web&responsive design</li>
              <li>2. Mobile app design</li>
            </ol>
            <ol className="space-y-[56px]">
              <li>3. Personalized stickers&prints</li>
              <li>4. Marketing materials</li>
            </ol>
          </ul>
        </div>

        {/* facts */}
        <h2 className="text-[40px] font-bold">10 Facts about me</h2>
        <div className="border-[3px] border-dark bg-[#ffffff] px-[68px] py-[48px] mt-[40px]">
          <ul className="text-[24px] font-medium flex flex-col lg:flex-row w-full justify-between space-y-[56px] lg:space-y-0">
            <ol className="space-y-[56px]">
              <li>1. I have 2+ years experience</li>
              <li>2. Learned UI/UX by myself</li>
              <li>3. Love exploring trends </li>
              <li>4. I have personalized merch </li>
              <li>5. Figma, Illustrator&Photoshop</li>
            </ol>
            <ol className="space-y-[56px]">
              <li>6. I have a cat named Sushi</li>
              <li>7. Animals&wine lover</li>
              <li>8. I have 5 tattoos& 8 piercings</li>
              <li>9. Feminist and LGBTQIA+</li>
              <li>10. I love colors</li>
            </ol>
          </ul>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
