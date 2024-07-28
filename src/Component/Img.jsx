import React from "react";

export default function Img({ placeholderSrc, src ,alt,className}) {

    const [imgSrc , setImgSrc] = React.useState(placeholderSrc)
    const [imgClass,setImgClass] = React.useState(`${className} blur-sm`)
    React.useEffect(()=>{
        const image = new Image()
        image.src = src
        image.onload = () =>{
            setImgClass(`${className} blur-0 transition-[blur] ease-linear duration-500`)
            setImgSrc(src)
        }

    },[src])


  return (
    <img
      src = {imgSrc}
      alt={alt}
      className={imgClass}
    />
  );
}
