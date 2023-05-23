import React, {useState} from 'react';
import List from './list';

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
      <List/>
        </div>
    );
}

export default TestComp;
