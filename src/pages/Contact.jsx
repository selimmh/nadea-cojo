import React, { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState("designbynadejda@gmail.com");

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setEmail("Copied to clipboard");
    setTimeout(() => {
      setEmail("designbynadejda@gmail.com");
    }, 1000);
  };

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
      <section className="mt-[67px]">
        {/* contact */}
        <h2 className="md:text-[40px] text-[24px] font-bold">Contact me</h2>
        <div className="border-[3px] border-dark bg-[#ffffff] md:px-[68px] md:py-[48px] px-[32px] py-[24px] mt-[40px] mb-[124px] flex flex-col lg:flex-row w-full justify-between gap-[28px] md:gap-[56px]">
          <p className="text-[20px] font-medium flex items-center transition-all">
            {email}
            {email !== "Copied to clipboard" ? (
              <span onClick={handleCopy}>
                <AiOutlineCopy className="ml-2 cursor-pointer hover:scale-110 transition-all" />
              </span>
            ) : (
              ""
            )}
          </p>
          <p className="text-[20px] font-medium ">+40 731 446 390</p>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
