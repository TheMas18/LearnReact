import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleClick=()=>{
    console.log("Clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleChange=(event)=>{
 
    setText(event.target.value);
  }
  return (
    <>
    <div  style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',
                  color:props.mode==='dark'?'white':'black'
          
          }}

        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>
    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>

    </div>
    </>
  );
}
