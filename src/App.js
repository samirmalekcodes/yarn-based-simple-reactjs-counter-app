import './App.css';
import { useState } from "react";
import MyButton from './components/MyButton';
import MyProfileCard from './components/MyProfileCard';


// How to build a new components
// 1. create a new file with the name of your component
// 2. You're going to put that file in components folder.
// 3. go into your file &  type 'rafce' and then hit tab
// 4. Write the code for your component
// 5.go into App.js and import your component

// STATE is a variable when information is updated directly displayes 
//  it on the screen

// want to make a Counter App
// 1. make a button
// 2. detect when the button is clicked
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
      <MyButton title="BUY" color="red" />
      <MyButton title="SELL" color="green" />

      <MyProfileCard
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9r-q3UJerj98VTZ2VjMpZwHaEK%26pid%3DApi&f=1"
        name="Bob Smith"
        title="Senior Developer"
        description="I love to code 24/7. I have 20+ years of experience in web development"
      />
      <MyProfileCard
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9r-q3UJerj98VTZ2VjMpZwHaEK%26pid%3DApi&f=1"
        name="John Smith"
        title="Junior Web Developer"
        description= "I love to code 24/7."
      />
    </div>
  );
}

// how to create your own component (MyButton.js)
// title and color are props here


export default App;
