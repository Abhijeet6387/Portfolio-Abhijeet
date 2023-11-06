"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Blogify",
    description:
      "A full stack web application to create and manage blogs built using Golang (fiber) and ReactJS",
    image: "/images/projects/blogify.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhijeet6387/Blogify",
    previewUrl: "https://github.com/Abhijeet6387/Blogify",
  },
  {
    id: 2,
    title: "MedHelp",
    description:
      "An online appointment booking system built using Node.js & React.js, and REST API's like Apimedic and NewsAPI",
    image: "/images/projects/medhelp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhijeet6387/MedHelp",
    previewUrl: "https://github.com/Abhijeet6387/MedHelp",
  },
  {
    id: 3,
    title: "LibM",
    description:
      "An efficient library management system built using Node.js & React.js",
    image: "/images/projects/libm.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhijeet6387/libM",
    previewUrl: "https://lib-m.vercel.app/",
  },
  {
    id: 4,
    title: "Industry-4NSV",
    description:
      "A React-based web app for client-side activities, Project under Indian Railways & IIT Kanpur.",
    image: "/images/projects/industry4nsv.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhijeet6387/Industry-4NSV",
    previewUrl: "https://github.com/Abhijeet6387/Industry-4NSV",
  },
  // {
  //   id: 5,
  //   title: "KeepIt",
  //   description:
  //     "A Full stack todo application built using React.js and Django-Rest Framework. Users can add, update and delete tasks easily and efficiently.",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/Abhijeet6387/KeepIt",
  //   previewUrl: "https://github.com/Abhijeet6387/KeepIt",
  // },
  {
    id: 5,
    title: "NewZapp",
    description:
      "Keep yourself updated on what's happening around the globe. Read latest daily news on Business, Healthcare, Science & Technology, Entertainment and what not.",
    image: "/images/projects/newzapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhijeet6387/NewZapp",
    previewUrl: "https://github.com/Abhijeet6387/NewZapp",
  },
  {
    id: 6,
    title: "Wordifier",
    description:
      "A responsive web tool to format and edit your texts in a simple and efficient way.",
    image: "/images/projects/wordifier.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Abhijeet6387/Wordifier",
    previewUrl: "https://wordifierdeploy.vercel.app/",
  },
  ,
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
