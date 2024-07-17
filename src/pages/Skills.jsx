import React from "react";


export default function Skills() {
  const cardClass =
    'font-serif font-medium bg-neutral-200 hover:relative hover:after:content-[""] hover:after:absolute hover:after:left-0 hover:after:top-0 hover:after:w-full hover:after:bg-gray-400 hover:after:animate-slide-right hover:after:z-10 hover:after:rounded-lg rounded-lg border-2 border-red-400 flex flex-col items-center lg:justify-between gap-3.5 md:gap-4 lg:gap-7 lg:text-lg py-3';
  const imgClass = "w-24 h-24 lg:w-28 lg:h-28 z-20";
  const textClass = "z-20";
  return (
    <div className="flex-1 flex flex-col justify-around font-serif pb-4 px-6  ">
      <h2 className="text-center font-semibold text-3xl my-5">
        Well versed in
      </h2>
      <div className="grid grid-cols-3 gap-3.5 lg:grid-cols-4">
        <div className={cardClass}>
          <img src="assets/icons/html-icon.svg" alt="html-icon" className={imgClass} />
          <p className={textClass}>Html</p>
        </div>
        <div className={cardClass}>
          <img src='assets/icons/css-icon.svg' alt="css-icon" className={imgClass} />
          <p className={textClass}>CSS</p>
        </div>
        <div className={cardClass}>
          <img
            src="assets/icons/javascript-icon.svg"
            alt="javascript-icon"
            className={imgClass}
          />
          <p className={textClass}>JS</p>
        </div>

        <div className={cardClass}>
          <img src="assets/icons/react-js-icon.svg" alt="react-js-icon" className={imgClass} />
          <p className={textClass}>ReactJS</p>
        </div>

        <div className={cardClass}>
          <img
            src="assets/icons/tailwind-css-icon.svg"
            alt="tailwind CSS-icon"
            className={imgClass}
          />
          <p className={textClass}>Tailwind CSS</p>
        </div>
        <div className={cardClass}>
          <img src="assets/icons/c-program-icon.svg" alt="c-program-icon" className={imgClass} />
          <p className={textClass}>C</p>
        </div>
        <div className={cardClass}>
          <img src="assets/icons/firebase-icon.svg" alt="firebase-icon" className={imgClass} />
          <p className={textClass}>Firebase</p>
        </div>

        <div className={cardClass}>
          <img src="assets/icons/github-icon.svg"alt="github-icon" className={imgClass} />
          <p className={textClass}>Github</p>
        </div>
      </div>
    </div>
  );
}
