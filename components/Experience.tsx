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
        md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
       text-gray-500 text-2xl"
      >
        Experience
      </h3>
      <div
        className="w-full flex overflow-x-scroll p-10 snap-x snap-mandatory
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
