//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#2B547E';
      showAlert("Dark mode enable","success");
      document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enable","success");
      document.title="TextUtils - Light Mode";
    }
  }
  return (
   <>
  <Router>
<div className="container">
<Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
  <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze" mode={mode}/>
          </Route>
        </Switch>
        </div>
        </Router>  
   </>
  );
}

export default App;
