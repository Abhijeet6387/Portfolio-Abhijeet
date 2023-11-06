"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>C++</li>
        <li>Python</li>
        <li>Core Java</li>
        <li>JavaScript</li>
        <li>Typescript</li>
        <li>Golang</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Frontend",
    id: "frontend",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML/CSS/SCSS/Tailwind</li>
        <li>Bootstrap</li>
        <li>MUI</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Redux</li>
        <li>Jest/Mocha</li>
      </ul>
    ),
  },
  {
    title: "Backend",
    id: "backend",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Django REST</li>
        <li>Go-Fiber</li>
        <li>Go-Gin</li>
        <li>MongoDB</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "Familiar With",
    id: "tools",
    content: (
      <ul className="list-disc pl-2">
        <li>WebSockets</li>
        <li>Socket.io</li>
        <li>REST API</li>
        <li>Git</li>
        <li>Github</li>
        <li>Postman</li>
        <li>Amazon Web Services (S3)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          B.Tech (IT) | Institute Of Engineering & Technology, Lucknow |
          2019-2023
        </li>
        <li>CBSE XII | Dalimss Rohania, Varanasi | 2018</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Software Developer Engineer Intern | Techcurators | Sept 2022 - Mar
          2023
        </li>
        <li>Web Developer Intern | CariKture | Apr 2022 - Jun 2022</li>
        <li>
          Freelance Web Developer | Indian Railways & IIT Kanpur | Apr 2020 -
          Nov 2020
        </li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>Algorithmic Toolbox</li>
  //       <li>Algorithm on Graphs</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I bring a deep passion for software development and a wealth of
            experience in contributing to innovative projects and solutions. My
            approach to software engineering is rooted in continuous learning,
            and I actively seek opportunities to expand my knowledge and stay
            abreast of the latest trends in the field. I am driven,
            detail-oriented, and thrive on crafting creative and efficient
            solutions to complex challenges. If you are in search of a highly
            motivated and skilled Software Developer with a solid background in
            Data Structures and Algorithms and Full-stack development, I would
            be thrilled to connect with you. Please feel free to reach out for
            potential career opportunities.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              {" "}
              Frontend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              {" "}
              Backend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              {" "}
              Other{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
