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

function Booklist() {
  return (
    // <> this is Fragment can also be written as React.Fragment
    <section>
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
const Author = () => <h2> John Doe</h2>;
const Title = () => {
  return <p>A Game of Thrones (A Song of Ice and Fire)</p>;
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
