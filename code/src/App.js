
import { useState } from 'react';
import './App.css';
import QRCode from "react-qr-code";


function App() {
  const [text,setText]=useState("dd");

  function GenareteQR(e){

    setText(e.target.value)
  }
  return (
    <div className="App">
    <h1>QR Code Generator</h1>
    <QRCode value="text"/>

    <div className='input-here'>
      <p>Enter your text here</p>
      <input type='text' value={text} onChange={(e)=>
      { handleChange(e)}}/>
      <button>Genarete</button>

    </div>

    </div>
  );
}

export default App;
