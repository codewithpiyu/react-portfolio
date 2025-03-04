import React from "react";
import ProjectCard from "./ProjectCard";
import musicPlayer from "../../assets/music_player.png";
import shoppysite from "../../assets/image_heading.png";
import electronic from "../../assets/electronicimg.png";
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
          title="E-com-shoppy"
          image = {shoppysite}
          url = "https://codewithpiyu.github.io/E_shoppy_website/"
          sourceCode="https://github.com/codewithpiyu/E_shoppy_website"
          main="A Shopify app that helps businesses drive in-store purchases by adding local pickup and stock in-store Offers features such as an in-store stock checker, click and collect rules, and stock buffers A small, often independent retail store that sells upscale gourmet foods. "
        />
        <ProjectCard
          title="Eelectronic_Website"
          image = {electronic}
          url="https://codewithpiyu.github.io/Ecom-website/"
          sourceCode="https://codewithpiyu.github.io/Ecom-website/"
          main="Electronic Store offers a diverse range of gadgets, from smartphones to smart home devices, ensuring you find what you need to elevate your lifestyle and meet your tech requirements.Welcome to electronic eComStore, your ultimate destination for cutting-edge gadgets!"
        />
        
      </div>
    </div>
  );
};

export default Projects;