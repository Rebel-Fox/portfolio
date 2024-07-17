import React from "react";
import { Link, NavLink } from "react-router-dom";
import ProjectsData from "../Data/ProjectsData";

const linkClass =
  "font-serif font-medium bg-neutral-200 rounded-lg p-4 hover:relative  hover:after:text-2xl hover:after: hover:after:absolute hover:after:left-0 hover:after:top-0 hover:after:w-full  hover:after:animate-slide-right hover:after:z-10 hover:after:rounded-lg hover:after:backdrop-blur-sm hover:after:flex hover:after:items-center hover:after:px-4";

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
        <Link
          to="https://quizzical-32gg.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClass} hover:after:content-['Trivia_quiz_app_using_React:_fetches_questions_from_OpenTDB_API,_lets_users_answer,_and_shows_their_score.']`}
        >
          <img src="../../src/assets/project-photo/quizzical.png" alt="Quizzical app screenshot" />
          <p className="mt-1">Quizzical</p>
        </Link>

        <Link
          to="https://tenzies-9n0j.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClass} hover:after:content-['This_is_a_Tenzies_game_built_with_React,_where_players_roll_dice_to_match_values,_tracking_rolls,_time,_and_saving_high_scores.']`}
        >
          <img src="../../src/assets/project-photo/Tenzies.png" alt="Tenzies app screenshot" />
          <p className="mt-1">Tenzies</p>
        </Link>

        <Link
          to="https://meme-generator-ur4w.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClass} hover:after:content-['This_is_a_meme_generator_built_with_React,_where_users_can_create_memes_by_adding_text_to_randomly_fetched_images_from_an_API.']`}
        >
          <img src="../../src/assets/project-photo/meme-generator.png" alt="Meme Generator app screenshot" />
          <p className="mt-1">Meme Generator</p>
        </Link>


      </div>
    </div>
  );
}

