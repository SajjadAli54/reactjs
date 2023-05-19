import React from "react";
import GrayScale from "./hoc";

function Image({ style, url, alt, width, height }) {
  return (
    <img src={url} alt={alt} width={width} height={height} style={style} />
  );
}

export default GrayScale(Image);
