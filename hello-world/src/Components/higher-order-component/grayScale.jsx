import React from "react";

const grayScale = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} style={{ filter: "grayscale(75%)" }} />;
  };
};

function Image() {
  return (
    <img
      src="https://picsum.photos/200/300"
      alt="random"
      style={{ margin: "10px" }}
    />
  );
}

const GrayScaleImg = grayScale(Image);

export default function GrayScale() {
  return (
    <div>
      <GrayScaleImg />
    </div>
  );
}
