import Form from './components/Form';
import Home from './components/Home';
import Task from './components/Task';
import './App.css';
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,Route,Routes } from "react-router-dom";




function App() {

  return (
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Routes>
      <Route path="/Form" element={<Form/>}/>
    </Routes>
    <Routes>
      <Route path="/Task" element={<Task/>}/>
    </Routes>
  </BrowserRouter>

   
  );
    
  
}

export default App;
