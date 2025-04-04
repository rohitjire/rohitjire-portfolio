import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" 
        ? -scrollContainerRef.current.offsetWidth 
        : scrollContainerRef.current.offsetWidth;
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left max-w-full justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full"
      >
        <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl w-full text-center">
          Experience
        </h3>

        <div className="relative w-full flex items-center mt-28 font-montserrat">
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 sm:left-10 z-40 cursor-pointer bg-[#F7AB0A]/40 hover:bg-[#F7AB0A]/60 p-1 rounded-full"
          >
            <ChevronLeftIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-none pb-5"
          >
            {experiences?.map((experience) => (
              <div
                key={experience._id}
                className="w-full flex-shrink-0 snap-center flex flex-col items-center justify-center px-2 md:px-8 lg:px-20"
              >
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-2 sm:right-10 z-40 cursor-pointer bg-[#F7AB0A]/40 hover:bg-[#F7AB0A]/60 p-1 rounded-full"
          >
            <ChevronRightIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default WorkExperience;
