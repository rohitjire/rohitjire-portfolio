import { motion } from "framer-motion";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[300px] sm:w-[350px] md:w-[480px] h-[500px] sm:h-[600px] xl:w-[600px] snap-center bg-[#292929] py-5 sm:py-10 p-4 sm:p-6 mx-4 sm:mx-8 md:mx-20
    hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        key={experience._id}
        initial={{
          y: -100,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:w-56 xl:h-56
      object-contain bg-white rounded-full p-2"
        src={urlFor(experience?.companyImage).url()}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl sm:text-2xl text-center font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-center text-xl sm:text-2xl mt-1">
          {experience.company}
        </p>
        <div className="flex flex-wrap justify-center gap-2 my-2">
          {/* TechStacks */}
          {experience.technologies.map((technology) => (
            <img
            key={technology._id}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase text-center py-3 sm:py-5 text-gray-300 text-sm sm:text-base">
          {new Date(experience.dateStarted)
            .toDateString()
            .split(" ")
            .slice(1)
            .join(" ")}{" "}
          -
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
        </p>
        <ul
          className="list-disc space-y-2 ml-5 text-xs sm:text-sm max-h-60 sm:max-h-80 overflow-y-scroll pr-3 
        scrollbar-thin scrollbar-track-black"
        >
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
