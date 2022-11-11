import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left
        md:flex- max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
       text-gray-500 text-2xl"
      >
        Work Experience
      </h3>
    </motion.div>
  );
}

export default Experience;
