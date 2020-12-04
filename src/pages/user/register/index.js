import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function UserRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function updateNameValue(event) {
    setName(event.target.value);
    console.log(name);
  }

  function updateEmailValue(event) {
    setEmail(event.target.value);
  }

  function updatePasswordValue(event) {
    setPassword(event.target.value);
  }

  function cleanForm(event) {
    event.preventDefault();
    setName('');
    setEmail('');
    setPassword();
  }

  function todo() {
    console.log('TODO: enviar requisição para o backend');
    console.log(name);
    console.log(email);
    console.log(password);
  }

  return (
    <div id="container-gestor-register">
      <p>Cadastro de gestores</p>
      <div className="content-user">
        <form onSubmit={todo}>
          <label htmlFor="text">NOME</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            placeholder="Nome da pessoa gestora"
            onChange={updateNameValue}
          />

          <br />

          <label htmlFor="email">E-MAIL</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder="E-mail da pessoa gestora"
            onChange={updateEmailValue}
          />

          <br />

          <label htmlFor="senha">SENHA</label>
          <input
            id="senha"
            type="password"
            name="password"
            password={password}
            placeholder="Senha da pessoa gestora"
            onChange={updatePasswordValue}
          />
          <div className="container-form-buttons">
            <button
              className="btn"
              id="clean"
              type="button"
              onClick={cleanForm}
            >
              Limpar campos
            </button>
            <Link className="btn" id="cancel" to="/inicio">
              Cancelar
            </Link>
            <button className="btn" id="register" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
