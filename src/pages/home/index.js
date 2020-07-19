import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './styles.css'

class Home extends Component {

    //método executado assim que a página carrega
    componentDidMount() {
    }

    render () {
        return (
            <div className="container-home">
                <div className="buttons">
                    <button className="btn-news" type="submit">Enviar avisos</button>
                    <button className="btn-parents" type="submit">Gerenciar pais/responsáveis</button>
                    <button className="btn-users" type="submit">Gerenciar usuários administrativos</button>
                </div>
            
                <div className="footer">
                    <a href="https://www.freepik.com">imagem designed by Freepik</a>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);
