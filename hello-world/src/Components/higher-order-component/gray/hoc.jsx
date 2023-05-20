import React from "react";

function GrayScale(OriginalImage) {
  return (props) => {
    const style = { filter: "grayscale(100%)" };
    return (
      <div style={style}>
        <OriginalImage {...props} />
      </div>
    );
  };
}

export default GrayScale;
