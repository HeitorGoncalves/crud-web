import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Site from './pages/Site';
import Agenda from './pages/Agenda';

import Singin from './pages/Singin';
import Singup from './pages/Singup';
import ForgotPassword from './pages/ForgotPassword';

import Dashboard from './pages/Dashboard';

import Usuario from './pages/Usuario';
import UsuarioCadastro from './pages/Usuario/cadastro';
import UsuarioEditar from './pages/Usuario/editar';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Site />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/Singin" element={<Singin />} />
        <Route path="/Singup" element={<Singup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/Usuario/cadastro" element={<UsuarioCadastro />} />
        <Route path="/Usuario/editar" element={<UsuarioEditar />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;