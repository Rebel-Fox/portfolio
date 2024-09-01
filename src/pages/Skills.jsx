import React from "react";
import SkillsData from "../Data/SkillsData";
import Img from "../Component/Img";

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
        {SkillsData.map(skill => {
          const [img, setImg] = React.useState(false)
          React.useEffect(() => {
            const image = new Image()
            image.src = skill.src
            image.onload = () => setImg(true)
          }, [])
          return <>
            <div className={cardClass}>
              {!img && <div className="bg-slate-300 w-24 h-24 lg:w-28 lg:h-28 z-20"></div>}
              {img && <Img src={skill.src}
                alt={`${skill.name} icon`}
                className={imgClass} />}
              <p className={textClass}>{skill.name}</p>
            </div>
          </>

        })}
      </div>
    </div>
  );
}
