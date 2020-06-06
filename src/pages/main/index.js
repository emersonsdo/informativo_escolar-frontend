import React, { Component } from 'react';
import api from '../../services/api';
import base64 from 'react-native-base64';

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

    render () {
        return (
            <div className="conainer">
                <img src={logo} alt="CEEB"/>
                <h1>Informativo CEEB</h1>

                <div className="content">
                    <p>Para prosseguir, se autentique</p>

                    <form>
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

                        <button type="submit">Autenticar</button>  
                    </form> 
                </div>
            </div>

        );
    }
}
