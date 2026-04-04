import { motion } from "framer-motion";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      className="w-[90%] sm:w-[500px] md:w-[600px] xl:w-[900px] h-[380px] sm:h-[420px] md:h-[460px] snap-center font-montserrat"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-between bg-surface-card rounded-2xl p-4 sm:p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 object-contain bg-white p-2 rounded-full"
            src={urlFor(experience?.companyImage).url()}
            alt={experience.company}
          />

          <div className="w-full text-center flex-1 flex flex-col justify-center">
            <h4 className="text-lg sm:text-xl md:text-2xl font-light text-matte-white">
              {experience.jobTitle}
            </h4>
            <p className="font-semibold text-base sm:text-lg mt-1 text-matte-light">
              {experience.company}
            </p>

            <div className="flex flex-wrap justify-center gap-2 my-3">
              {experience.technologies.map((technology) => (
                <img
                  key={technology._id}
                  className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-surface-elevated p-1"
                  src={urlFor(technology.image).url()}
                  alt={technology.title}
                />
              ))}
            </div>

            <p className="uppercase text-matte-gray text-center text-xs sm:text-sm">
              {new Date(experience.dateStarted).toDateString().split(" ").slice(1).join(" ")} -{" "}
              {experience.isCurrentlyWorkingHere
                ? "Present"
                : new Date(experience.dateEnded).toDateString().split(" ").slice(1).join(" ")}
            </p>
          </div>

          <button
            onClick={() => setIsFlipped(true)}
            className="mt-2 px-5 py-2 border border-accent/30 rounded-full text-accent text-sm
              hover:bg-accent/10 hover:border-accent/50 transition-all duration-200"
          >
            View Description
          </button>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 flex flex-col bg-surface-card rounded-2xl p-4 sm:p-6 overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center mb-3">
            <h4 className="text-base sm:text-lg font-semibold text-matte-white">
              {experience.jobTitle}
            </h4>
            <p className="text-sm text-matte-gray">{experience.company}</p>
          </div>

          <ul className="list-disc space-y-2 ml-5 text-xs sm:text-sm md:text-base text-matte-light
            flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent/40 pr-3">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <button
            onClick={() => setIsFlipped(false)}
            className="mt-3 px-5 py-2 border border-accent/30 rounded-full text-accent text-sm
              hover:bg-accent/10 hover:border-accent/50 transition-all duration-200 self-center"
          >
            Back to Overview
          </button>
        </div>
      </motion.div>
    </article>
  );
}

export default ExperienceCard;
