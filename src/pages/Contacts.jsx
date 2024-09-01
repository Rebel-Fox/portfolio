import React from "react";
import { Form, Link } from "react-router-dom";
import Img from "../Component/Img";
import ContactsData from "../Data/ContactsData";

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
          {ContactsData.map(contact => {
            const [img, setImg] = React.useState(false)
            React.useEffect(() => {
              const newImg = new Image();
              newImg.src = contact.src
              newImg.onload = () => setImg(true)
            }, [])
            return <>
              <li>
                <Link
                  to={contact.linkto}
                  target="_blank"
                  {...contact.isNewTab ? { target: "_blank", rel: "noopener noreferrer" }
                    : {}}
                  className="flex items-center gap-3.5 hover:scale-110"
                >
                  {!img && <div className="w-16 h-16 bg-slate-300"></div>}
                  {img && <img
                    src={contact.src}
                    alt={`${contact.name} icon`}
                    className="w-16"
                  />}
                  <p>{contact.name}</p>
                </Link>
              </li>
            </>
          })}
        </ul>
      </div>

      <picture className="flex-1 p-10 flex items-center justify-center ">
        <Img placeholderSrc='./assets/about-img-small.jpeg' src="./assets/about-img.jpeg" alt="image here " className="w-10/12 sm:w-9/12 xl:w-7/12 rounded-full" />
      </picture>
    </div>
  );
}
