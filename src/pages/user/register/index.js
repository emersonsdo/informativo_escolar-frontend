import React, { useState } from 'react';
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
      <div className="container">
        <p>Cadastro de gestores</p>
        <form onSubmit={todo}>
        <label htmlFor="text">NOME</label>
          <input
            id="name"
            type="text"
            placeholder="Nome da pessoa gestora"
            onChange={updateNameValue}
          />

          <br />

          <label htmlFor="email">E-MAIL</label>
          <input
            id="email"
            type="email"
            placeholder="E-mail da pessoa gestora"
            onChange={updateEmailValue}
          />

          <br />

          <label htmlFor="senha">SENHA</label>
          <input
            id="senha"
            type="password"
            placeholder="Senha da pessoa gestora"
            onChange={updatePasswordValue}
          />
          <div className="container-form-buttons">
            <button className="btn" id="register" type="submit">
              Cadastrar
            </button>
            <button className="btn" id="clean" type="submit">
              Limpar campos
            </button>
            <button className="btn" id="cancel" type="submit">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
