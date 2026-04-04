import { motion } from "framer-motion";
import React, { useRef } from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import { ChevronLeftIcon, ChevronRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

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
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
      max-w-full justify-evenly mx-auto items-center z-0 pt-16 sm:pt-20 md:pt-24"
    >
      <h3
        className="absolute top-8 sm:top-12 md:top-16 uppercase tracking-[20px]
        text-matte-gray text-xl sm:text-2xl"
      >
        Projects
      </h3>

      <div className="relative w-full flex items-center font-montserrat">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 sm:left-10 z-40 cursor-pointer bg-accent/40 hover:bg-accent/60 p-1 rounded-full transition-colors"
        >
          <ChevronLeftIcon className="h-8 w-8 sm:h-10 sm:w-10 text-matte-white" />
        </button>

        <div
          ref={scrollContainerRef}
          className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-none"
        >
          {projects?.reverse().map((project, i) => (
            <div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col
              items-center justify-center p-4 sm:p-10 md:p-20 h-screen"
            >
              <div className="bg-surface-card rounded-2xl max-w-2xl w-full overflow-hidden max-h-[80vh]">
                {/* Header with inline image */}
                <div className="p-5 sm:p-8 space-y-4 overflow-y-auto max-h-[78vh] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent/20">
                  <span className="text-matte-gray text-xs tracking-widest uppercase">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-4">
                    <motion.img
                      initial={{ y: -100, opacity: 0 }}
                      transition={{ duration: 1.2 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="h-12 w-12 sm:h-14 sm:w-14 object-contain flex-shrink-0"
                      src={urlFor(project.image).url()}
                      alt={project.title}
                    />
                    <h4 className="text-xl sm:text-2xl font-semibold text-matte-white">
                      {project?.title}
                    </h4>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.technologies.map((technology) => (
                      <img
                        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-surface-elevated p-1"
                        key={technology._id}
                        src={urlFor(technology.image).url()}
                        alt={technology.title}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-matte-light leading-relaxed">
                    {project.summary}
                  </p>

                  {project.linkToBuild && (
                    <a
                      href={project.linkToBuild}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 border border-accent/40
                        rounded-full text-accent text-sm hover:bg-accent/10 transition-colors"
                    >
                      View Project
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 sm:right-10 z-40 cursor-pointer bg-accent/40 hover:bg-accent/60 p-1 rounded-full transition-colors"
        >
          <ChevronRightIcon className="h-8 w-8 sm:h-10 sm:w-10 text-matte-white" />
        </button>
      </div>

      <div className="w-full absolute top-[30%] bg-accent/5 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
