import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// stateless functional component
// always return JSX

//JSX Rules:
// return single element
// div /section / article or Fragment
// user camelCase for HTML attribute
// close every element
// format
// className instead of class

function Booklist() {
  return (
    // <> this is Fragment can also be written as React.Fragment
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src='https://m.media-amazon.com/images/I/51D+-f5UcDL._SY346_.jpg'
    alt=''
  />
);
const Author = () => (
  <h4
    style={{ color: "turquoise", fontSize: "0.75rem", letterSpacing: ".25rem" }}
  >
    {" "}
    George R R Martin
  </h4>
);
const Title = () => {
  return <h3>A Game of Thrones (A Song of Ice and Fire)</h3>;
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
ReactDOM.render(<Booklist />, document.getElementById("root"));
