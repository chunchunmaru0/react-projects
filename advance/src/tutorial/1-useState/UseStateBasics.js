import React, { useState } from "react";

function UseStateBasics() {
  const [title, setTitle] = useState("Initial Title");

  const handleClick = () => {
    //setTitle("New Title");
    // this is basics

    //now mine toggle;

    setTitle((prevTitle) =>
      prevTitle === "Initial Title" ? "New Title" : "Initial Title"
    );
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        {title}
      </button>
    </>
  );
}

export default UseStateBasics;
