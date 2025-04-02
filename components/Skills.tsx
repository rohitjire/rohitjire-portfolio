import { motion } from "framer-motion";
import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
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
      className="flex relative flex-col text-center md:text-left
      xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center pt-24 sm:pt-28 md:pt-32"
    >
      <h3
        className="absolute top-16 sm:top-20 md:top-24 uppercase tracking-[20px]
       text-gray-500 text-xl sm:text-2xl"
      >
        Skills
      </h3>
      <h3 className="absolute top-28 sm:top-32 md:top-36 uppercase tracking-[3px] text-gray-500 text-xs sm:text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 mt-16 sm:mt-20 md:mt-24">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
