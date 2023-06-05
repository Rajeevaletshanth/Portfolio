import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
          I am a software engineer with a BSc (Hons) degree in Information Technology, specializing in Software Engineering from the Sri Lankan Institute of Information Technology (SLIIT). With a career beginning in 2021, I possess expertise in JavaScript frameworks for both frontend and backend development. Proficient in React and Node.js, I excel at building dynamic user interfaces and scalable server-side applications. My strong foundation in software engineering principles allows me to transform complex requirements into maintainable code. Additionally, I have a flair for 3D modeling and graphics design, enabling me to create visually appealing user experiences. I am dedicated to continuous learning and eager to contribute my skills and passion to impactful projects.          </p>
          {/* <p className="about-grid-info-text">
            With a strong command of JavaScript frameworks, I excel in both frontend and backend development. I am proficient in React, enabling me to build dynamic and responsive user interfaces. Additionally, my expertise in Node.js allows me to develop scalable and efficient server-side applications. I am well-versed in various tools and technologies within the JavaScript ecosystem.
          </p>

          <p className="about-grid-info-text">
          Driven by a solid foundation in software engineering principles, I have the ability to transform complex requirements into well-structured and maintainable code. I thrive in collaborative environments, leveraging my problem-solving abilities and passion for innovative solutions.
          </p>
          <p className="about-grid-info-text">
          In addition to my technical skills, I possess a keen eye for design and enjoy exploring my creative side through 3D modeling and graphics design. This unique blend of technical and creative expertise allows me to approach projects from a holistic perspective, delivering visually appealing and intuitive user experiences.
          </p> */}
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">Docker</li>
            <li className="about-grid-info-list-item">HTML / CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/gdpf.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
