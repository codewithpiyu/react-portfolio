import React from "react";
import ProjectCard from "./ProjectCard";
import musicPlayer from "../../assets/music_player.png"
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          title="Music Player App"
          image = {musicPlayer}
          url = "https://codewithpiyu.github.io/musicplyer/"
          sourceCode = "https://github.com/codewithpiyu/musicplyer"
          main="
          Web designing refers to the process of planning, conceptualizing, and building websites. It encompasses various aspects, such as layout, visual appearance, usability, and functionality, to create engaging and effective web pages."
        />
        <ProjectCard
          title="Priyanka"
          url = "https://github.com/codewithpiyu"
          main="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
          title="tinu"
          url="https://www.google.com"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        />
      </div>
    </div>
  );
};

export default Projects;