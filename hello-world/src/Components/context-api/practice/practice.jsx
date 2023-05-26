import React from "react";

const PersonContext = React.createContext("Sajjad Ali");
const CourseContext = React.createContext("React");

function Practice() {
  return (
    <>
      <Account />
      <Teacher />
    </>
  );
}

const Account = () => {
  return <Person />;
};

const Person = () => {
  const person = React.useContext(PersonContext);
  const course = React.useContext(CourseContext);
  return <h1>{`${person} is enrolled in ${course}`}</h1>;
};

class Teacher extends React.Component {
  render() {
    return <h1>{this.context}</h1>;
  }
}

Teacher.contextType = PersonContext;

export default Practice;
