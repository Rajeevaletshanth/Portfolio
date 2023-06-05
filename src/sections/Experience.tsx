import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "LTW Technologies",
      role: "Software Engineer",
      url: "https://www.ltwtech.it/",
      start: "May 2022",
      end: "May 2023",
      shortDescription: [
        "In my role, I have extensively utilized MERN stack technologies such as React, Redux, TypeScript, and Node.js. I have successfully deployed applications on AWS cloud servers and implemented containerization using Docker, ensuring efficient and scalable solutions.",
        "I have effectively managed a small, cross-functional team consisting of Frontend Developers, Backend Developers, and UI/UX Developers. I have fostered collaboration, set clear goals, and guided the team to deliver high-quality projects on time.",
        "Furthermore, I have represented the company in client meetings, demonstrating excellent communication skills. I have effectively communicated project requirements, provided updates on progress, and ensured client satisfaction by understanding their needs and aligning them with the company's capabilities.",
      ],
    },
    {
      name: "TransformationPlus Pty Limited",
      role: "Software Engineer - Intern",
      url: "https://transformationplus.com/",
      start: "August 2021",
      end: "March 2022",
      shortDescription: [
        "During my internship at XYZ Company, I extensively worked with PHP, utilizing its frameworks and libraries to develop robust web applications. I gained hands-on experience with technologies like Laravel, implementing backend functionalities and database management.",
        "As an intern, I collaborated with the development team, assisting both frontend and backend developers in various projects. I actively participated in code reviews and bug fixing, contributing to the overall quality and performance of the applications.",
        "Additionally, I had the opportunity to support the team in client meetings, where I effectively communicated project progress and requirements. I demonstrated a strong understanding of PHP development principles and effectively contributed to the successful completion of client projects.",
      ],
    }
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Experience</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
