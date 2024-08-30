import React, {useState} from 'react'
export default function TextForm(props) {


  const handleUpClick=()=>{
    // console.log("UpperCase was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText)
  }


  const handleLowClick=()=>{
    // console.log("UpperCase was clicked"+ text);
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleClearClick=()=>{
    // console.log("UpperCase was clicked"+ text);
    let newText ='';
    setText(newText)
  }


  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  
  const[text, setText] = useState('');
  // setText("new text");
  return (
    <>
        <div className = "container">
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-2"onClick={handleUpClick}> Convert to Uppercases</button>
            <button className="btn btn-outline-primary mx-2"onClick={handleLowClick}> Convert to Lowercases</button>
            <button className="btn btn-outline-primary mx-2"onClick={handleClearClick}> Clear Text</button>
    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words,{text.length} characters</p>
      <p>{0.008 * text.split(" ").length }Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
