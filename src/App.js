import './App.css';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//////////////////////////////////// functions///////////////////////////////////////////////
function App() {
  const [Mode, setMode] = useState('light');// whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}
    
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode is enabled', "success");
      document.title = 'TextUtils - Dark mode';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', "success");
      document.title = 'TextUtils - Light mode';

    }

  }

  const toggleMode2 = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#144031';
      showAlert('Dark mode is enabled', "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', "success");
    }

  }


  //////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      
      <NavBar title="TextUtils" aboutText="About us" mode={Mode} toggleMode={toggleMode}  toggle={toggleMode2} />

      <Alert alert={alert}/>

      <div className="container my-3">
          <BrowserRouter>
            <Routes>
              <Route path='Path You want to use' element={</About>}/> 
              <Route path="/about" element={<About />}></Route>	
            <Routes/>
          <BrowserRouter/>
     
      </div>
      
      <div className="container">
        <About/>
        </div>
    </>
  );
}

export default App;

