import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Vagas from './pages/Vagas';
import Perfil from './pages/Perfil';
import Cadastro from './pages/Cadastro';
import TaxasAgendadas from './pages/TaxasAgendadas';
import TaxasConcluidas from './pages/TaxasConcluidas';
import AdicionarVagas from './pages/AdicionarVagas';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path='/register' element={<Cadastro/>} />
        <Route path="/taxasAgendadas" element={<TaxasAgendadas />} />
        <Route path="/taxasConcluidas" element={<TaxasConcluidas />} />
        <Route path="/adicionarVagas" element={<AdicionarVagas />} />
      </Routes>
    </Router>
  );
};

export default App;
