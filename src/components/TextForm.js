import React, {useState} from 'react'

export default function (props)
 {
    const [text, setText] = useState('');
    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
      let newText= text.toLowerCase();
      setText(newText)
  }
    const handleonChange=(event)=>{
    setText(event.target.value)
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#2B547E'}}>
    <div class="mb-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange ={handleonChange} style={{backgroundColor:props.mode==='dark'?'#2B547E':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="10" ></textarea>
    </div>
    <button className="btn btn-dark mx-1 my-1" onClick={handleUpClick}>Covert to Uppercase</button>
    <button className="btn btn-dark mx-1 my-1" onClick={handleLoClick}>Covert to Lowercase</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#2B547E'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
   </>
  )
}
