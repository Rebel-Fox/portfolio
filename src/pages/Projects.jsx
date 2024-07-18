import React from "react";
import { Link, NavLink } from "react-router-dom";
import ProjectsData from "../Data/ProjectsData";

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
              <img src={project.img} alt={`${project.name} app screenshot`} />
              <p className="mt-1">{project.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

