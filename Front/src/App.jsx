// import './App.css'
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import App from './App';

// import Home from './pages/Home';

// import Login from './pages/Login';

// import Vagas from './pages/Vagas';


// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route exact path="/" component={Login} />
//       <Route path="/Home" component={Home} />
//       <Route path="/Vagas" component={Vagas} />
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// );

// function App() {

//   return (
//     <>
//       <Router>
//           <Routes>
//             <Route path='/' element={<Login />} />
//             <Route path="/Home" element={<Home />} />
//           </Routes>
//       </Router>
//     </>
//   )
// }

// export default App


// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Vagas from './pages/Vagas';
import Perfil from './pages/Perfil';
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
        <Route path="/taxasAgendadas" element={<TaxasAgendadas />} />
        <Route path="/taxasConcluidas" element={<TaxasConcluidas />} />
        <Route path="/adicionarVagas" element={<AdicionarVagas />} />
      </Routes>
    </Router>
  );
};

export default App;
