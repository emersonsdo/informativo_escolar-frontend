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

  function todo() {
    console.log('TODO');
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
            placeholder="Nome da pessoa gestora"
            onChange={updateNameValue}
          />

          <br />

          <label htmlFor="email">E-MAIL</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="E-mail da pessoa gestora"
            onChange={updateEmailValue}
          />

          <br />

          <label htmlFor="senha">SENHA</label>
          <input
            id="senha"
            type="password"
            name="password"
            placeholder="Senha da pessoa gestora"
            onChange={updatePasswordValue}
          />
          <div className="container-form-buttons">
            <Link className="btn" id="clean" to="/usuarios/cadastro">
              Limpar campos
            </Link>
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
