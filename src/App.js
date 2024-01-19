import RegistrationForm from './Register';
import LoginForm from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{

    const getTest = async()=>{
      const response = await fetch('https://localhost:8000')
    }
  })


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegistrationForm/>}/>
        <Route path='/Login' element={<LoginForm/>}/>
        
        </Routes></BrowserRouter>
 
    </div>
  );
}

export default App;
