import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './styles.css'
import logo from '../../assets/CEB.svg';

class Home extends Component {

    //método executado assim que a página carrega
    componentDidMount() {
    }

    render () {
        return (
            <div id="container-home">
                <div id="presentation">
                    <img src={logo} alt="CEB"/> 
                    <h1>Portal do gestor</h1>
                </div>

                <div className="container-buttons">
                    {/* esses botões poderiam ser links a */}
                    <a className="button" id ="btn-news" href="/">Informes & avisos 
                        <span><br></br>boletins, atividades e reuniões</span></a>
                    <a className="button" id ="btn-parents" href="/">Cadastro de Pais 
                        <span><br></br>adicionar, listar, excluir</span></a>
                    <a className="button" id ="btn-users" href="/">Informes e avisos 
                        <span><br></br>delegar funções dentro do portal</span></a>
                    {/* <button className="button" id="btn-news" type="submit">Gerenciar avisos</button> */}
                    {/* <button className="button" id="btn-parents" type="submit">Gerenciar pais/responsáveis</button> */}
                    {/* <button className="button" id="btn-users" type="submit">Gerenciar usuários administrativos</button> */}
                </div>
            </div>
        );
    }
}

export default withRouter(Home);
