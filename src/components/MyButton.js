import React from 'react'

const MyButton = ({ title, color }) => {
    return <button style={{ backgroundColor: color }}> {title} </button>
}

// the above is the same as:
// const MyButton = (props) => {
    // return <button style={{ backgroundColor: props.color }}> {props.title} </button>

// line 3 is called destructing because it is creating an object



export default MyButton
