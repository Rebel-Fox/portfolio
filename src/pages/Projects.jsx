import React from "react";
import { Link, NavLink } from "react-router-dom";
import ProjectsData from "../Data/ProjectsData";

const linkClass = 'font-serif font-medium bg-neutral-200 rounded-lg p-4 hover:relative  hover:after:text-2xl hover:after: hover:after:absolute hover:after:left-0 hover:after:top-0 hover:after:w-full  hover:after:animate-slide-right hover:after:z-10 hover:after:rounded-lg hover:after:backdrop-blur-sm hover:after:flex hover:after:items-center hover:after:px-4'

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
              className={`${linkClass} hover:after:content-['${project.content}']`}
            >
              <img src={project.img} alt={`${project.name} app screenshot`} />
              <p className="mt-1">{project.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
