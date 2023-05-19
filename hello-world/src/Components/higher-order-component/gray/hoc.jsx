import React from "react";

function GrayScale(OriginalImage) {
  return (props) => {
    const style = { ...props.style, filter: "grayscale(100%)" };
    return <OriginalImage {...props} style={style} />;
  };
}

export default GrayScale;
