import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopyClick = () => {
    console.log("I am Copy");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleClearClick = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = "";
    setText(newText);
  };
  const handleExtraSpeces = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleSenCaseClick = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = text.charAt(0).toUpperCase()+text.slice(1);
    setText(newText);
  };
  const handleOnChange = (event) => {
    //console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //text="new Text" ;//Wrong  way to change text
  //setText("new Text") ;//Correct  way to change text
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSenCaseClick}>
          Sentance Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpeces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
