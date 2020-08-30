import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import base64 from 'react-native-base64';
import api from '../../services/api';
import './styles.css';

import logo from '../../assets/CEB.svg';

class Login extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    email: '',
    password: '',
    accessToken: '',
    refreshToken: '',
  };

  // método executado assim que a página carrega
  componentDidMount() {}

  getAccessToken = async (event) => {
    event.preventDefault();

    const { email } = this.state;
    const { password } = this.state;

    if (!email || !password) {
      console.log('E-MAIL e SENHA devem ser preenchidos!');
      this.setState({ errorMessage: 'EMAIL e SENHA devem ser preenchidos!' });
      return;
    }

    try {
      const response = await api.post('/auth', null, {
        headers: {
          Authorization: `Basic ${base64.encode(`${email}:${password}`)}`,
        },
      });

      this.setState({ accessToken: response.data.accessToken });
      // eslint-disable-next-line react/no-unused-state
      this.setState({ refreshToken: response.data.refreshToken });

      localStorage.setItem('user', email);

      const { history } = this.props;
      history.push('/parents');
    } catch (error) {
      // console.log(`Error JSON: ${JSON.stringify(error.response)}`);
      const statusCode = error.response.status;

      if (statusCode === 401) {
        this.setState({ errorMessage: 'Usuário ou senha inválidos' });
      } else {
        console.log('Houve um erro escroto ao tentar logar');
        this.setState({
          errorMessage: 'Erro inesperado. Contacte o administrador do sistema',
        });
      }
    }
  };

  updateEmailValue = (event) => {
    this.setState({ email: event.target.value });
    this.setState({ errorMessage: '' });
  };

  updatePasswordValue = (event) => {
    this.setState({ password: event.target.value });
    this.setState({ errorMessage: '' });
  };

  render() {
    return (
      <div className="container">
        <img src={logo} alt="CEB" />
        <h1>Área Gerencial</h1>

        <div className="content">
          {this.state.errorMessage && (
            <h4 id="error"> {this.state.errorMessage} </h4>
          )}

          <p>Login</p>
          <form onSubmit={this.getAccessToken}>
            <label htmlFor="email">E-MAIL</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={this.updateEmailValue}
            />

            <br />

            <label htmlFor="senha">SENHA</label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              onChange={this.updatePasswordValue}
            />
            <button className="btn" type="submit">
              Autenticar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
