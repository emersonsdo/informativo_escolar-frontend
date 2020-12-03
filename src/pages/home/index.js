import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/CEB.svg';

class Home extends Component {
  // método executado assim que a página carrega
  componentDidMount() {}

  render() {
    return (
      <div id="container-home">
        <div id="presentation">
          <img src={logo} alt="CEB" />
          <h1>Portal do gestor</h1>
        </div>

        <div id="container-buttons">
          <Link className="button" id="btn-news" to="/">
            Informes & avisos
            <span>
              <br /> boletins, atividades e reuniões
            </span>
          </Link>
          <Link className="button" id="btn-parents" to="/">
            Cadastro de Pais
            <span>
              <br /> adicionar, listar, excluir
            </span>
          </Link>
          <Link className="button" id="btn-users" to="/usuarios/cadastro">
            Administração
            <span>
              <br /> delegar funções dentro do portal
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
