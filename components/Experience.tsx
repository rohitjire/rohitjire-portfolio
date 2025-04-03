import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[]
};

function WorkExperience({experiences}: Props) {
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
        md:flex-row max-w-full px-4 sm:px-6 md:px-10 justify-evenly mx-auto items-center pt-16 sm:pt-20 md:pt-24"
    >
      <h3
        className="absolute top-8 sm:top-12 md:top-16 uppercase tracking-[20px]
       text-gray-500 text-xl sm:text-2xl"
      >
        Experience
      </h3>
      <div
        className="w-full flex overflow-x-scroll p-4 sm:p-6 md:p-10 snap-x snap-mandatory
        scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#F7AB0A]/40 justify-evenly"
      >
        {experiences.map(experience=>(
          <ExperienceCard key={experience._id} experience ={experience}/>
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
