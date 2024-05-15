import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro
 from './pages/Cadastro';
function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Cadastro/>} />
            <Route path="/Home" element={<Home />} />
          </Routes>
      </Router>
    </>
  )
}

export default App