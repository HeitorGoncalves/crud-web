import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Editar from "../../assets/editar.png";
import Deletar from "../../assets/deletar.png";
import api from "../../services/api";
import { login } from "../../services/auth";

import { Table, Container } from "./styles";

const list = [
  {
    id: "1",
    nome: "teste 1",
    sexo: "Masculino",
    idade: "18",
    hobby: "Gym",
    datanascimento: "10/09/1990"
  },
  {
    id: "2",
    nome: "teste 2",
    sexo: "Masculino",
    idade: "18",
    hobby: "Gym",
    datanascimento: "10/09/1990"
  }
];

class Usuario extends Component {

  state = [{
    nome: "",
    sexo: "",
    idade: "",
    hobby: "",
    datanascimento: "",
    error: ""
  }];
 
  

  

  render() {
    return (
      <Container>
          <Table>
              <img src={Logo} />

          <Link to="/usuario/cadastro" className="link">Cadastrar</Link>
          
          <table>
            <thead>
            <tr>
                <th width="90%">Nome Completo</th>
                <th width="10%">Editar</th>
                <th width="10%">Deletar</th>
            </tr>
            </thead>
            <tbody>
            { list.map( (lista) => 
            <tr>
                <td>{lista.nome}</td>
                <td><a href={`usuario/editar/${lista.id}`}><img src={ Editar } alt="Editar" /></a></td>
                <td><a href={`delete/${lista.id}`}><img src={ Deletar } alt="Deletar" /></a></td>
            </tr>
           ) }
            
            </tbody>
            
            </table>
          
          
          </Table>
       
      </Container>
    );
  }
}

export default Usuario;