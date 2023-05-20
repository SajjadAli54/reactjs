// Higher components using class components

import React, { Component } from "react";

const updatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    render() {
      const style = { ...this.props.style, filter: "grayscale(100%)" };
      return <OriginalComponent {...this.props} style={style} />;
    }
  }
  return NewComponent;
};

function Image({ style, url, alt, width, height }) {
  return (
    <img src={url} alt={alt} width={width} height={height} style={style} />
  );
}

export default updatedComponent(Image);
