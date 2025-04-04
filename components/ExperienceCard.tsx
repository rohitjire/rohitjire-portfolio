import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <motion.article 
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.2
      }}
      className="flex flex-col rounded-lg items-center flex-shrink-0 w-[90%] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-4 sm:p-6 font-montserrat"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 sm:w-24 sm:h-24 xl:w-[120px] xl:h-[120px] object-contain bg-white p-2 rounded-full"
        src={urlFor(experience?.companyImage).url()}
        alt={experience.company}
      />

      <div className="px-2 md:px-8 w-full mt-3">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-light text-center">{experience.jobTitle}</h4>
        <p className="font-bold text-lg sm:text-xl mt-1 text-center">{experience.company}</p>
        
        <div className="flex flex-wrap justify-center gap-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
              src={urlFor(technology.image).url()}
              alt={technology.title}
            />
          ))}
        </div>

        <p className="uppercase py-2 text-gray-300 text-center text-xs sm:text-sm">
          {new Date(experience.dateStarted).toDateString().split(" ").slice(1).join(" ")} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString().split(" ").slice(1).join(" ")}
        </p>

        <ul className="list-disc space-y-1 sm:space-y-2 ml-5 text-xs sm:text-sm md:text-base max-h-40 sm:max-h-44 md:max-h-48 overflow-y-scroll scrollbar-thin scrollbar-track-black/10 scrollbar-thumb-[#F7AB0A]/40 pr-5">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
