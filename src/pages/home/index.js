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
                <h2>O que deseja fazer?</h2>

                <div className="container-buttons">
                    <button className="button" id="btn-news" type="submit">Gerenciar avisos</button>
                    <button className="button" id="btn-parents" type="submit">Gerenciar pais/responsáveis</button>
                    <button className="button" id="btn-users" type="submit">Gerenciar usuários administrativos</button>
                </div>
            
            </div>
        );
    }
}

export default withRouter(Home);
