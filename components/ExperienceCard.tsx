import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[350px] md:w-[480px] h-[600px] xl:w-[600px] snap-center bg-[#292929] py-10 p mx-20
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
      object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl text-center	font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-center	text-2xl mt-1">
          {experience.company}
        </p>
        <div className="flex justify-evenly space-x-2 my-2">
          {/* TechStacks */}
          {experience.technologies.map((technology) => (
            <img
            key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>
        <p className="uppercase text-center py-5 text-gray-300">
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
          className="list-disc space-y-2 ml-5 text-sm max-h-80 overflow-y-scroll pr-3 
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
