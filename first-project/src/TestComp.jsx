import React, {useState} from 'react';

const TestComp = () => {
    const [color, setColor] = useState("red");
    return (
        <div>
                  <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
      <br></br>
        </div>
    );
}

export default TestComp;
