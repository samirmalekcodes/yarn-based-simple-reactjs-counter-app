import './App.css';
import {useState} from "react";

// STATE is a variable when information is updated directly displayes it on the screen

function App() {
  const [count, setCount] = useState(25); // STATE Variable

  // increment a state variable  -> setCount(count + 1)
  // versus
  // increment a REGULAR  variable -> myAge = myAge + 1
  
  const myAge = 25; // regular JS variable
  return (
    <div className="App">
      <h2 style={{color: "red"}}> {myAge} </h2>
      <button onClick={() => alert("You just clicked + button")}> + </button>
      <button onClick={() => alert("You just clicked - button")}> - </button>
    </div>
  );
}

export default App;
