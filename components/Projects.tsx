import { motion } from "framer-motion";
import React, { useRef } from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
      max-w-full justify-evenly mx-auto items-center z-0 pt-16 sm:pt-20 md:pt-24"
    >
      <h3
        className="absolute top-8 sm:top-12 md:top-16 uppercase tracking-[20px]
   text-gray-500 text-xl sm:text-2xl"
      >
        Projects
      </h3>

      <div className="relative w-full flex items-center font-montserrat">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 sm:left-10 z-40 cursor-pointer bg-[#F7AB0A]/40 hover:bg-[#F7AB0A]/60 p-1 rounded-full"
        >
          <ChevronLeftIcon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
        </button>

        <div
          ref={scrollContainerRef}
          className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-none"
        >
          {projects?.reverse().map((project, i) => (
            <div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
              items-center justify-center p-4 sm:p-10 md:p-20 lg:p-44 h-screen"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="h-16 w-16 sm:h-20 sm:w-20"
                src={urlFor(project.image).url()}
              />
              <div className="space-y-5 sm:space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-2xl sm:text-3xl md:text-4xl text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Project {i + 1} of {projects.length}
                  </span>{" "}
                  {project?.title}
                </h4>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {project.technologies.map((technology) => (
                    <img
                      className="h-8 w-8 sm:h-10 sm:w-10"
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt={technology.title}
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-center md:text-left">
                  {project.summary}
                </p>
              </div>
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

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
