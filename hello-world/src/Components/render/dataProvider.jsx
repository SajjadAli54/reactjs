import React from "react";

// A component that provides data through render prop
class DataProvider extends React.Component {
  state = {
    data: "Data Provider",
  };

  render() {
    return this.props.render(this.state.data);
  }
}

// A component that consumes the data using render prop
const DataConsumer = () => {
  return (
    <DataProvider
      render={(data) => (
        <div>
          <h1>Data Provider Example</h1>
          <p>{data}</p>
        </div>
      )}
    />
  );
};

export default DataConsumer;
