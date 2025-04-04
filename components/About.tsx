import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl
     px-4 sm:px-6 md:px-10 justify-evenly mx-auto items-center pt-16 sm:pt-20 md:pt-24 font-montserrat"
    >
      <h3
        className="absolute top-8 sm:top-12 md:top-16 uppercase tracking-[20px]
       text-gray-500 text-xl sm:text-2xl"
      >
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-10 md:mb-0 flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-96 xl:w-80 xl:h-120 rounded-full object-cover md:rounded-lg"
      />
      <div className="space-y-6 sm:space-y-10 px-0 md:px-10">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-montserrat">
          My {" "}
          <span className="underline decoration-slate-200">little</span>{" "}
          background
        </h4>
        <p className="text-sm sm:text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
