import React from "react";

// First version of creating function
export default function HelloWorld1(props) {
  return <div>Hello World App 1 {props.Name}</div>;
}

// Second version of creating function
let HelloWorld2 = (props) => {
  function getName()
  {
    return props.firstName + ' ' + props.lastName;
  };
  return (
    <div>Hello World App 2 {getName()} </div>
  );
}
// Third version of creating function
let HelloWorld3 = props => (
    <div>Hello World App 3 {props.firstName + ' ' + props.lastName} </div>
);

//let HelloWorld  = () => <div>Hello World App</div>;

export {HelloWorld2, HelloWorld3};