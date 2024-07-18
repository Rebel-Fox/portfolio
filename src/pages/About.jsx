import React from "react";

export default function About() {
  return (
    <div className="flex-1 flex flex-col  sm:flex-row  ">
      <h1 className=" w-1/2 self-center text-center font-extrabold font-serif mb-5 text-4xl sm:text-5xl md:text-7xl ">
        <span className="relative after:content-[''] after:absolute after:w-full after:h-3 sm:after:h-4 after:bottom-1 after:left-6 after:bg-red-600 after:-z-10 ">
          Front-End
        </span>
        <br />
        <span className="relative after:content-[''] after:absolute after:w-full after:h-3 sm:after:h-4 after:bottom-1 after:left-6 after:bg-red-600 after:-z-10 ">
          Developer
        </span>
      </h1>
      <div className=" relative w-1/2 px-2 text-center   bg-[url('/assets/self-img.jpg')] bg bg-cover bg-no-repeat h-96 sm:h-auto mx-auto">
        <div className="absolute z-0 w-full h-full left-0 bg-black opacity-50"></div>
        <p className="relative  z-10 font-semibold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm sm:text-3xl font-serif backdrop-blur-md max-w-md rounded-lg px-2 py-4">
          Hi, I'm
          <span className="text-red-600 bg-neutral-100 px-1 box-decoration-clone">Vineet Kumar</span>
          , an aspiring Front-End Developer currently in my 2nd year of B.Tech
          CSE at
          <span className="text-red-600 bg-neutral-100 px-1 box-decoration-clone">
            IIT Bhubaneswar.
          </span>
        </p>
      </div>
    </div>
  );
}
