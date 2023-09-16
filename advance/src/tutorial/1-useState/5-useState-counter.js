import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const handleDecrease = () => {
    setValue((value) => value - 1);
    //setValue(value-1)
  };

  const handleIncrease = () => {
    setValue((prevVal) => prevVal + 1);
    //setValue(value+1)
  };

  const handleComplexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => handleIncrease()}>
          Increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={handleComplexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
