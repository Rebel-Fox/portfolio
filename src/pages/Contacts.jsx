import React from "react";
import { Form, Link } from "react-router-dom";

export default function Contacts() {
  return (
    <div className="flex-1 flex flex-col md:flex-row">
      <div className=" p-6 text-center  md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
        <h1 className="inline-block font-serif font-extrabold text-5xl mb-8 relative  after:content-[''] after:absolute after:w-full after:bg-red-500 after:left-0 after:bottom-1  after:h-2 after:-z-10">
          Contact me
        </h1>
        <p>
          This site was built on <span className="font-semibold">React </span>
          and
          <span className="font-semibold"> tailwind</span> .
        </p>
        <p className="text-lg underline">Connect with me on </p>
        <ul className="mt-4 text-xl inline-block space-y-3">
          <li>
            <Link
              to="https://www.instagram.com/vk01068?igsh=dmVqbm9sbjN5bmlk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 hover:scale-110"
            >
              <img
                src="./assets/socials/Instagram-color.svg"
                alt="instagram icon"
                className="w-16 "
              />
              <p>Instagram</p>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/vineet-kumar-110772275"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 hover:scale-110"
            >
              <img
                src="./assets/socials/Linkedin-color.svg"
                alt="Linkedin icon"
                className="w-16"
              />
              <p>LinkedIn</p>
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/Rebel-Fox"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 hover:scale-110"
            >
              <img
                src="./assets/socials/Github-color.svg"
                alt="Github icon"
                className="w-16"
              />
              <p>Github</p>
            </Link>
          </li>
          <li>
            <Link
              to="mailto:rookiewebdev@outlook.com"
              className="flex items-center gap-3.5 hover:scale-110"
            >
              <img
                src="./assets/socials/Outlook-color.svg"
                alt="Outlook icon"
                className="w-16"
              />
              <p>Consider Mailing me !!</p>
            </Link>
          </li>
        </ul>
      </div>
      <picture className="p-10 flex items-center justify-center ">
        <img src="./assets/about-img.jpeg" alt="image here " className="w-10/12 sm:w-9/12 xl:w-7/12 rounded-full" />
      </picture>
    </div>
  );
}
