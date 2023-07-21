import React from "react";
import  ReactDOM  from "react-dom";

// stateless functional component
// always return JSX

// function Greeting() {
//   console.log("TYesdt");
//   return <h1> This is Test with the first Component </h1>
// }

// arrrow function 

const Greeting = () => {

  return React.createElement('h1', {},'hello world')
}
ReactDOM.render(<Greeting/>, document.getElementById('root'));