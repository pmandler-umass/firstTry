import './App.css';
import React, { useState } from 'react';
import * as pImage from "./start_main";


function App() {
  const [backendMessage, setBackendMessage] = useState('');
  let image_div = pImage.MyImages();
  let mytext  =  __dirname;
  
  function buttonTestComm() {
    return fetch("http://localhost:8000/", {
      method: 'GET'
    }).then(response => response.json()).then((data) => {
      console.log(data);
      setBackendMessage(data['detail']);
    }).catch(error => {
      console.log("Error!");
      console.log(error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {mytext}
      </header>
      <button onClick={buttonTestComm} autoFocus>
          Test Backend Connection
      </button>
      <div>{backendMessage.length > 0 && <p>{backendMessage}</p>}</div>
      <div> {image_div}  </div>
    </div>
  );
}

export default App;
