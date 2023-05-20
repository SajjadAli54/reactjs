import React, { Component } from "react";

const updatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    render() {
      const style = { filter: "grayscale(100%)" };
      return (
        <div style={style}>
          <OriginalComponent {...this.props} />
        </div>
      );
    }
  }
  return NewComponent;
};

function Image({ style, src, alt, width, height }) {
  return (
    <img src={src} alt={alt} width={width} height={height} style={style} />
  );
}

export default updatedComponent(Image);
