import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[300px] md:w-[450px] xl:w-[700px] snap-center bg-[#292929] p-10 mx-20
    hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 over"
    >
      <motion.img
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
        src="https://picsum.photos/id/237/500/500"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">T-systems ICT Pvt Ltd</p>
        <div className="flex space-x-2 my-2">
          {/* TechStacks */}
          <img className="h-10 w-10 rounded-full" src="" alt="" />
          <img className="h-10 w-10 rounded-full" src="" alt="" />
          <img className="h-10 w-10 rounded-full" src="" alt="" />
          <img className="h-10 w-10 rounded-full" src="" alt="" />
          <img className="h-10 w-10 rounded-full" src="" alt="" />
          <img className="h-10 w-10 rounded-full" src="" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started Work...ended</p>
        <ul className="list-disc space-y-2 ml-5 text-lg">
          <li>Transformed ransformed ransformed </li>
          <li>Transformed ransformed </li>
          <li>Transformed </li>
          <li>Transformed </li>
          <li>Transformed </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
