import React,{useState} from 'react'

export default function TextArea(props) {
  const clear = () => {
    setText('')
    props.showAlert(' Text Cleared', 'success');
  }
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert(' Converted to Lowercase', 'success');
  }
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert(' Converted to Uppercase', 'success');
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }


  const [text, setText] = useState('Enter text here');

  /* *******************************************
        TO CHANGE VALUES THER ARE TWO WAYS:
        1) text = "new text";             wrong way
        2) setText('new Text');           right way
     *******************************************   
   */

  return (
    <>
    <div className='conatiner' >
      <h1 style={{color:props.mode===`dark`?`white`:`#042743`}}>{props.heading}</h1>
        <div className="form-group">
        <textarea className="TextForm" value={text} onChange={handleOnChange} id="textArea" cols="140" rows="12"  style={{backgroundColor:props.mode===`dark`?`grey`:`white`, color:props.mode===`dark`?`white`:`#042743`}}></textarea>
      </div>
        <button className="btn btn-primary" mx-3 onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary" mx-3 onClick={handleDownClick}>Convert to LoverCase</button>
        <button className="btn btn-primary" mx-3 onClick={clear}>Clear</button>
      </div>
      <div className="container" my-3 style={{color:props.mode===`dark`?`white`:`#042743`}}>
        <h1 style={{color:props.mode===`dark`?`white`:`#042743`}}>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes required to read </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter someting above to preview"}</p>

      </div>
      </>
  )
}
