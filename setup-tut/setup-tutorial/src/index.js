import React from "react";
import ReactDOM from "react-dom";

// stateless functional component
// always return JSX

//JSX Rules:
// return single element
// div /section / article or Fragment
// user camelCase for HTML attribute
// close every element
// format
// className instead of class

function Greeting() {
  console.log("TYesdt");
  return (
    // <> this is Fragment can also be written as React.Fragment
    <React.Fragment>
      <div>
        <h1>Hello World</h1>
      </div>
      <ul>
        <li>
          <a href='#a'>This is a Test</a>
        </li>
      </ul>
      <Person />
      <Message />
      <img src='' alt='' />
    </React.Fragment>
  );
}

const Person = () => <h2> John Doe</h2>;
const Message = () => {
  return <p> this is a message</p>;
};

/*
// arrrow function is same as the above function

const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world Test!")
  );
};
*/
ReactDOM.render(<Greeting />, document.getElementById("root"));
