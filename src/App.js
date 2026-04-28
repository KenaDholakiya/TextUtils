import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');//checking dark mode 
  const toggleMode =()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/*<Navbar/>*/}
      <div className="container my-3" >
        <TextForm heading="Enter the text to analyze below" mode={mode}/>
        {/*<About/>*/}
      </div>
    </>
  );
}

export default App;
