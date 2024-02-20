import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Site from './pages/Site';
import Em from './pages/Em';

import Singin from './pages/Singin';
import Singup from './pages/Singup';
import ForgotPassword from './pages/ForgotPassword';

import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';
import PerfilCadastro from './pages/Perfil/cadastro';
import PerfilEditar from './pages/Perfil/editar';
import Servicos from './pages/Servicos';
import ServicosCadastro from './pages/Servicos/cadastro';
import ServicosEditar from './pages/Servicos/editar';
import Agenda from './pages/Agenda';
import AgendaCadastro from './pages/Agenda/cadastro';
import AgendaEditar from './pages/Agenda/editar';


import Usuario from './pages/Usuario';
import UsuarioCadastro from './pages/Usuario/cadastro';
import UsuarioEditar from './pages/Usuario/editar';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Site />} />
        <Route path="/Em" element={<Em />} />
        <Route path="/Singin" element={<Singin />} />
        <Route path="/Singup" element={<Singup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/PerfilCadastro" element={<PerfilCadastro />} />
        <Route path="/PerfilEditar" element={<PerfilEditar />} />
        <Route path="/Servicos" element={<Servicos />} />
        <Route path="/ServicosCadastro" element={<ServicosCadastro />} />
        <Route path="/ServicosEditar" element={<ServicosEditar />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/AgendaCadastro" element={<AgendaCadastro />} />
        <Route path="/AgendaEditar" element={<AgendaEditar />} />

        <Route path="/Usuario" element={<Usuario />} />
        <Route path="/Usuario/cadastro" element={<UsuarioCadastro />} />
        <Route path="/Usuario/editar" element={<UsuarioEditar />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;