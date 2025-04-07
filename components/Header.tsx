import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

type Props = {
  socials: Social[];
};

function Header({ socials: socials }: Props) {
  const handleResumeClick = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/resources/resume.pdf';
    link.download = 'Rohit_Jire_Resume.pdf'; // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <button
          onClick={handleResumeClick}
          className="flex items-center space-x-2 text-gray-400 hover:text-[#F7AB0A]/40 transition-colors duration-200"
        >
          <ArrowDownTrayIcon className="h-6 w-6" />
          <span className="hidden md:inline-flex text-xs sm:text-sm">Download Resume</span>
        </button>
      </motion.div>
    </header>
  );
}

export default Header;
