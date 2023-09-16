import "./App.css";
import ErrorExample from "./tutorial/1-useState/1-error-example";
import UseStateArray from "./tutorial/1-useState/3-useState-array";
import UseStateObject from "./tutorial/1-useState/4-useState-object";
import UseStateBasics from "./tutorial/1-useState/UseStateBasics";

function App() {
  return (
    <div className="container">
      {/* use state examples 
      <ErrorExample />
      <UseStateBasics />
      <UseStateArray /> */}
      <UseStateObject />
    </div>
  );
}

export default App;
