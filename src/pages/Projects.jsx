import React from "react";
import { Link } from "react-router-dom";
import ProjectsData from "../Data/ProjectsData";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Blurhash } from "react-blurhash";
import Image from "../Component/Img";

const options = {
  root: null, //means viewport
  rootMargin: "0px",
  threshold: "0.2",
};

export default function Projects() {
  return (
    <div className="flex-1 p-6 text-center ">
      <h1 className="inline-block mx-auto font-serif font-extrabold text-4xl  uppercase mb-8 relative  after:content-[''] after:absolute after:w-full after:bg-red-500 after:left-0 after:bottom-1  after:h-2 after:-z-10">
        projects
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ProjectsData.map((project, index) => {
          return (
            <Link
              key={index}
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={project.content}
            >
              <Image src={project.img} placeholderSrc={project.placeholder} alt={`${project.name}'s screenshot`} className='w-full object-cover' />

              <p className="mt-1">{project.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
