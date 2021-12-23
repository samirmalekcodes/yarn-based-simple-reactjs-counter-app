import React from 'react'

const MyButton = ({ title, color }) => {
    return <button style={{ backgroundColor: color }}> {title} </button>
}

// the above is the same as:
// const MyButton = (props) => {
    // return <button style={{ backgroundColor: props.color }}> {props.title} </button>

// line 3 is called destructing because it is creating an object

// How to build a new components
// 1. create a new file with the name of your component
// 2. You're going to put that file in components folder.
// 3. go into your file &  type 'rafce' and then hit tab
// 4. Write the code for your component
// 5.go into App.js and import your component

export default MyButton
