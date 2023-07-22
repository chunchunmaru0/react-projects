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

//New Day
const books = [
  {
    id: 1,
    title: "A Game of Thrones (A Song of Ice and Fire)",
    author: "George R. R. Martin",
    img: "https://m.media-amazon.com/images/I/51D+-f5UcDL._SY346_.jpg",
  },
  {
    id: 2,
    title: "Fire & Blood",
    author: "George R. R. Martin",
    img: "https://m.media-amazon.com/images/I/51+EyQja6PL.jpg",
  },
  {
    id: 3,
    title: "The Rise of the Dragon",
    author: "George R. R. Martin",
    img: "https://m.media-amazon.com/images/I/51P8IotdA+L.jpg",
  },
];
function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // const { img, title, author } = book;
        //if you do spread operator {...} then you dont need to make an object for it, just SPREAD it like a king
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
const Book = (props) => {
  const { img, title, author } = props; // <img src = {img}/>
  //Object Destructuring
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </article>
  );
};
/*
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
      <Book
        img={gotBook.img}
        title={gotBook.title}
        author={gotBook.author}
      ></Book>

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
    </article>
  );
};
*/

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
