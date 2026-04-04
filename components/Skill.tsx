import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-surface-border object-cover w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16
        xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out bg-white p-1"
        title={skill.title}
      />
      <div className="absolute opacity-0 group-hover:opacity-70 transition 
      duration-300 ease-in-out group-hover:bg-white h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16
      xl:h-20 xl:w-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-[10px] sm:text-sm md:text-lg xl:text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 
      transition-opacity duration-300 bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded-md whitespace-nowrap">
        {skill.title}
      </div>
    </div>
  );
}

export default Skill;
