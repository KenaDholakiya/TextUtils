import React, { useState } from "react";

export default function TextForm(props) {
  
  // convert to upercase function
  const handleUpClick = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };
  // convert to Lowercase function
  const handleLoClick = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  // copy to text function
  const handleCopyClick = () => {
    // console.log("I am Copy");
    // var text=document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!","success");

  };
  //clear text function
  const handleClearClick = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success");
  };
  //remove extra spaces function
  const handleExtraSpeces = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extraspaces!","success");
  };
  //to capitalize first letter of every sentences function
  const handleSenCaseClick = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = text.charAt(0).toUpperCase()+text.slice(1);
    setText(newText);
    props.showAlert("Converted to Sentance case!","success");
  };
  //on change handle function
  const handleOnChange = (event) => {
    //console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //text="new Text" ;//Wrong  way to change text
  //setText("new Text") ;//Correct  way to change text
  return (
    <>
    {/* Text Container */}
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}
          ></textarea>
        </div>

        {/* Button of change different Text */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSenCaseClick}>
          Sentance Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>
          Copy
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpeces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      {/* Summary container */}
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        {/* Counting word and lettter */}
        <p>
          {text.split(/\s+/).filter((element)=>{
            return element.length !==0}).length} words and {text.length} characters
        </p>

        {/* Reading time */}
        <p>
          {0.008 * text.split(/\s+/).filter((element)=>{
            return element.length !==0}).length} Minutes Read
        </p>

        {/* Preview of Entered Text */}
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview"}</p>
      </div>
    </>
  );
}
