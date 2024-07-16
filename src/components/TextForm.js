import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleClick=()=>{
    console.log("Clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleChange=(event)=>{
 
    setText(event.target.value);
  }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>
    </div>
  );
}
