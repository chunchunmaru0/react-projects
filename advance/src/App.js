import "./App.css";
import ErrorExample from "./tutorial/1-useState/1-error-example";
import UseStateArray from "./tutorial/1-useState/3-useState-array";
import UseStateBasics from "./tutorial/1-useState/UseStateBasics";

function App() {
  return (
    <div className="container">
      {/* use state examples */}
      {/* <ErrorExample />
      <UseStateBasics /> */}
      <UseStateArray />
    </div>
  );
}

export default App;
