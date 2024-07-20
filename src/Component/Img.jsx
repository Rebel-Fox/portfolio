import React from "react";

export default function Image({ placeholderSrc, src ,alt,className}) {

    const [imgSrc , setImgSrc] = React.useState(placeholderSrc)

    React.useEffect(()=>{
        const img = new Image()
    })


  return (
    <img
      src = {imgSrc}
      alt={alt || ""}
      className={className}
    />
  );
}
