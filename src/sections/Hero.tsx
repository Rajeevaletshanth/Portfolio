import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hello, It&apos;s me
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Rajeev R. 
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        <span> And I&apos;m a </span>
        <TypeAnimation 
          sequence={[
            'Fullstack Developer.',
            2000,
            'Graphics Designer.',
            2000,
            '3D Modeler.',
            2000,
          ]} 
          speed={30}
          wrapper='span'
          repeat={Infinity}
          className="hero-typeanimation"
        />

        
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        {/* I&apos;m a software engineer with expertise in creating top-notch
        digital experiences. My current focus is on developing products that are
        accessible and centered around user needs, as part of the team at&nbsp; */}
        I&apos;m a software engineer with 2 years of experience in React, Node, and AWS. 
        I develop web applications, harnessing the power of cloud technologies for 
        scalability. Additionally, I have a knack for 3D modeling and graphics design, 
        crafting visually captivating experiences.
        {/* <Link href="https://rapidops.com" target="_blank" className="link">
          Rapidops.
        </Link> */}
      </motion.p>
      {/* <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      > */}
        {/* <Button
          text="Check out my course"
          link="https://youtube.com/kishansheth21"
        /> */}
      {/* </motion.div> */}
    </div>
  );
}

export default Hero;
