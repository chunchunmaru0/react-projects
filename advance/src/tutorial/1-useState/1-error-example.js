import React from "react";

function ErrorExample() {
  let title = "some title";
  const handleClick = () => {
    title = "New Title";
    console.log(title);
  };
  return (
    <>
      <h2>Test Title</h2>
      <button type="button" className="btn" onClick={handleClick}>
        {title}
      </button>
    </>
  );
}

export default ErrorExample;
