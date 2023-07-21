import React from "react";
import  ReactDOM  from "react-dom";

// stateless functional component
// always return JSX

// function Greeting() {
//   console.log("TYesdt");
//   return <h1> This is Test with the first Component </h1>
// }


// function Greeting() {
//   console.log("TYesdt");
//   return (
// {/* <div>
//         <h1>Hello World</h1>
//       </div>
// ) */}
// }


// arrrow function is same as the above function


const Greeting = () => {

  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'hello world Test!')
  );
};
ReactDOM.render(<Greeting/>, document.getElementById('root'));