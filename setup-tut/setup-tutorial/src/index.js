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
let gotBook = {
  title: "A Game of Thrones (A Song of Ice and Fire)",
  author: "George R. R. Martin",
  img: "https://m.media-amazon.com/images/I/51D+-f5UcDL._SY346_.jpg",
};
let hotdBook = {
  title: "Fire & Blood",
  author: "George R. R. Martin",
  img: "https://m.media-amazon.com/images/I/51+EyQja6PL.jpg",
};
function Booklist() {
  return (
    // <> this is Fragment can also be written as React.Fragment
    <section className='booklist'>
      <Book img={gotBook.img} title={gotBook.title} author={gotBook.author}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          numquam laboriosam tempore aspernatur? In, eligendi alias consequatur
          est vitae perferendis rerum voluptate, fugiat cumque ex accusantium
          corporis aperiam, at numquam!
        </p>
      </Book>

      <Book
        img={hotdBook.img}
        title={hotdBook.title}
        author={hotdBook.author}
      />
    </section>
  );
}
const Book = (props) => {
  //const {img,title,author} = props; // <img src = {img}/>
  //Object Destructuring
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
      {props.children}
    </article>
  );
};

/*
const title = "A Game of Thrones (A Song of Ice and Fire)";
const author = "George R. R. Martin";
const Book = (props) => {
  return (
    <article className='book'>
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
    {author.toUpperCase()}
  </h4>
);
const Title = () => {
  return <h3>{title}</h3>;
};
*/

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
