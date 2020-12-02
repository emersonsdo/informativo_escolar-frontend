import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
          <a className="button" id="btn-news" href="/">
            Informes & avisos
            <span>
              <br /> boletins, atividades e reuniões
            </span>
          </a>
          <a className="button" id="btn-parents" href="/">
            Cadastro de Pais
            <span>
              <br /> adicionar, listar, excluir
            </span>
          </a>
          <a className="button" id="btn-users" href="/usuarios/cadastro">
            Administração
            <span>
              <br /> delegar funções dentro do portal
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
