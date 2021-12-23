import './App.css';
import { useState } from "react";
import MyButton from './MyButton';

// STATE is a variable when information is updated directly displayes it on the screen

function App() {
  const [count, setCount] = useState(30); // STATE Variable

  // increment a state variable  -> setCount(count + 1)
  // versus
  // increment a REGULAR  variable -> myAge = myAge + 1

  // const myAge = 25; // regular JS variable
  return (
    <div className="App">
      <h2 style={{ color: "red" }}> {count} </h2>
      <button onClick={() => { setCount(count + 1) }}> + </button>
      <button onClick={() => { setCount(count - 1) }}> - </button>
      <MyButton title = "BUY" color= "red" />
      <MyButton title = "SELL" color="green"/>
    </div>
  );
}

export default App;
