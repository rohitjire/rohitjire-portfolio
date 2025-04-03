import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

function Header({ socials: socials }: Props) {
  return (
    <header
      className="sticky top-0 p-2 sm:p-5 flex items-start justify-between max-w-7xl mx-auto z-20
        xl:items-center"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center space-x-2 sm:space-x-4"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
            style={{ width: 24, height: 24 }}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 space-x-2 sm:space-x-4"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          style={{ width: 24, height: 24 }}
        />
        <p className="uppercase hidden md:inline-flex text-xs sm:text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
