import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";

import { Form, Container } from "./styles";

import api from "../../services/api";

class Editar extends Component {
  state = {
    id: "",
    nome: "",
    sexo: "",
    idade: "",
    hobby: "",
    datanascimento: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { id, nome, sexo, idade, hobby, datanascimento } = this.state;
    if (!nome || !sexo || !idade || !hobby || !datanascimento) {
      this.setState({ error: "Preencha todos os dados para alterar" });
    } else {
      try {
        await api.put(`/usuario/editar/${id}`, { id, nome, sexo, idade, hobby, datanascimento });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar" });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome Completo"
            onChange={e => this.setState({ nome: e.target.value })}
            value={e => this.setState({ nome: e.target.value })}
          />
          <input
            type="text"
            placeholder="Sexo"
            onChange={e => this.setState({ sexo: e.target.value })}
            value={e => this.setState({ sexo: e.target.value })}
          />
          <input
            type="text"
            placeholder="Idade"
            onChange={e => this.setState({ idade: e.target.value })}
            value={e => this.setState({ idade: e.target.value })}
          />
          <input
            type="text"
            placeholder="Hobby"
            onChange={e => this.setState({ hobby: e.target.value })}
            value={e => this.setState({ hobby: e.target.value })}
          />
          <input
            type="text"
            placeholder="Data de Nascimento"
            onChange={e => this.setState({ datanascimento: e.target.value })}
            value={e => this.setState({ datanascimento: e.target.value })}
          />
          <button type="submit">Alterar</button>
          <hr />
          <Link to="/">Registros</Link>
        </Form>
      </Container>
    );
  }
}

export default Editar;