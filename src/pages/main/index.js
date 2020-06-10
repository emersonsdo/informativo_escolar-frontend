import React, { Component } from 'react';
import api from '../../services/api';
import base64 from 'react-native-base64';
import './styles.css'

import logo from '../../assets/CEEB.svg';

export default class Main extends Component {
    //método executado assim que a página carrega
    componentDidMount() {
        //this.testConection();
    }

    testConection = async () => {
        const username = 'email_de_luisa@provedor.com';
        const password = '12345';

        const response = await api.post('/auth',
        {
            //TODO: Corrigir, mandar em cabeçalho
            headers:{'Authorization': 'Basic ' + base64.encode(username + ":" + password)}
        });
    
        console.log(response.data.accessToken);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("On HandleSubmit!");
    }

    render () {
        return (
            <div className="container">
                <img src={logo} alt="CEB"/> 
                <h1>Informativo CEB</h1>

                <div className="content">
                    <p>Login</p>

                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="email">E-mail</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="Digite seu email"
                        />
                        
                        <br/>

                        <label htmlFor="senha">Senha</label>
                        <input
                            id="senha"
                            type="password"
                            placeholder="Digite sua senha"
                        />  

                        <button className="btn" type="submit">Autenticar</button>  
                    </form> 
                </div>
            </div>

        );
    }
}
