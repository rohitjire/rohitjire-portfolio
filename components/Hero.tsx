import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircle from "./BackgroundCircle";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, ${pageInfo?.name} here!`,
      "Code Enthusiast",
      "Plays Guitar too",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-4 sm:space-y-8 items-center justify-center text-center overflow-hidden px-4">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-24 w-24 sm:h-32 sm:w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
      />
      <div className="z-20">
        <h2 className="text-xs sm:text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-4 sm:px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="p-2 sm:p-5 flex flex-wrap justify-center gap-2 sm:gap-4">
          <Link href="#about">
            <button className="heroButton text-xs sm:text-sm">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton text-xs sm:text-sm">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton text-xs sm:text-sm">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton text-xs sm:text-sm">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
