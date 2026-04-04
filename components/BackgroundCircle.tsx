import { motion } from "framer-motion";
import React from "react";

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1.0, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 3,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-surface-border rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className=" rounded-full border border-surface-border h-[300px] w-[300px] absolute mt-52" />
      <div className=" rounded-full border border-surface-border h-[500px] w-[500px] absolute mt-52" />
      <div className=" rounded-full border border-accent-muted h-[650px] w-[650px] opacity-10 absolute mt-52 animate-pulse" />
      <div className=" rounded-full border border-surface-border h-[800px] w-[800px] absolute mt-52 animate-pulse" />
    </motion.div>
  );
}

export default BackgroundCircle;
