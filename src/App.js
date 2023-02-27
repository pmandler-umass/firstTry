import './App.css';
import * as pImage from "./start_main";
//import findData from "./loadData";
//import {join} from 'path';

const findData =() =>{
  console.log("PAM in findData");

  return __dirname;
  //return "PAM is awesome"
};

function App() {
  let image_div = pImage.MyImages();
  let mytext  = findData();
  return (
    <div className="App">
      <header className="App-header">
        {mytext}
      </header>
      <div> {image_div}  </div>
    </div>
  );
}

export default App;
