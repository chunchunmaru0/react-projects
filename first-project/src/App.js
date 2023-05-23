import './App.css';
import TestComp from './TestComp';
import Forms from './forms';


//can be written as class component or function components 
//import React, {Component} from 'react';

// class App extends Component {
//   render(){
//     return(

//       <h1> This is a Test</h1>
//     )
//   }
// }

const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}
function Car() {
  return <h2>I am a Car!</h2>;
}
function Bike(props) {
  return <h2>I am a {props.color} Bike!</h2>;
}
// this is called Fragments <> your html </>

function shoot() {
  alert("Great Shot!");
}
function shoot1(a,b) {
  alert(b.type);
}

function App() {


  let testVariable = 1;
  return (
    <div className="App">
      <header className="App-header">
      <button
        type="button"
        onClick={shoot}
      >Shoot</button>
<button onClick={(event) => shoot1("Goal!", event)}>Take the shot!</button>
    
      <h3>Checking Test Var; {testVariable === 1 ? 'True' : 'False'} </h3>
      <p>
        This is a Test! <br />
      </p>
     {myElement}
      <h1>{text}</h1>
      <p> terninary Operator (x) {'>'} 5 ? "Hello" : "Goodbye"</p>
      <h1>{(x) > 5 ? "Hello" : "Goodbye"}</h1>

      <div>Testing my own Component{`<CAR>`}</div>
      <Car />
      <div>Testing my other Component{`<Bike>`} with Props</div>
      <Bike color="red" />
      <TestComp/>
      <Forms/>
      <h1> </h1>
      </header>

    </div>
  );
}

export default App;
