import React from 'react'
import './App.css';
import Nav from ./'Nav';
import {browser router,Routes,Route} from react-router-dom


function App(){
  return(
  <div classname="App">
  <Browser router>
  <h1>"GrassactivationService App"<h1>
  <Nav/>
  <Routes> Route path
  <Route path="/"element={<h1>Location</h1>}/>
  <Route path="/"element={<h1>"password/h1>}/>
  <Route path="/"element={<h1>"userName/h1>}/>
  <Route path="/"element={<h1>drainage</h1>}/>
  </Routes>
  </div>
);
}

export default App;
