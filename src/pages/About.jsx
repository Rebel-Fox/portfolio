import React from "react";
import Img from "../Component/Img";
// import bgImage from '/assets/self-img.jpg'

export default function About() {
  return (
    <div className="flex-1 flex flex-col  sm:flex-row  ">
      <h1 className=" w-1/2 self-center text-center font-extrabold font-serif mb-5 text-4xl sm:text-5xl md:text-7xl ">
        <span className="relative after:content-[''] after:absolute after:w-full after:h-3 sm:after:h-4 after:bottom-1 after:left-6 after:bg-red-600 after:-z-10 bg-opacity-50">
          Front-End
        </span>
        <br />
        <span className="relative after:content-[''] after:absolute after:w-full after:h-3 sm:after:h-4 after:bottom-1 after:left-6 after:bg-red-600 after:-z-10 ">
          Developer
        </span>
      </h1>
      <div className="flex-1 relative  w-11/12 sm:w-1/2 sm:overflow-hidden mx-auto ">
        <Img
          placeholderSrc="/assets/self-img-small.jpg"
          src="/assets/self-img.jpg"
          className=" absolute  w-full  object-cover object-top h-full"
          alt="Vineet's image"
        />
        <div className="absolute  w-full h-full left-0 bg-black opacity-50"></div>
        <div className="absolute  flex flex-col items-center justify-center h-full w-full">
          <p className="font-semibold text-white text-center text-sm sm:text-3xl font-serif backdrop-blur-md max-w-md rounded-lg px-2 py-4 w-11/12">
            Hi, I'm
            <span className="text-red-600 bg-neutral-100 px-1 box-decoration-clone">
              Vineet Kumar
            </span>
            , an aspiring Front-End Developer currently in my 2nd year of B.Tech
            CSE at
            <span className="text-red-600 bg-neutral-100 px-1 box-decoration-clone">
              IIT Bhubaneswar.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
