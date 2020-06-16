import React, { Component } from 'react';
import api from '../../services/api';
import base64 from 'react-native-base64';
import './styles.css'

import logo from '../../assets/CEB.svg';

export default class Main extends Component {
    state = {
        email: '',
        password: '',
        accessToken: '',
        refreshToken: ''
    };

    //método executado assim que a página carrega
    componentDidMount() {
    }

    getAccessToken = async (event) => {
        event.preventDefault();
        const email = this.state.email; //'email_de_luisa@provedor.com';
        const password = this.state.password; //'12345';

        const response = await api.post('/auth',
        {
            //TODO: Corrigir, mandar em cabeçalho
            headers:{'Authorization': 'Basic ' + base64.encode(email + ":" + password)}
        });
    
        this.setState({accessToken: response.data.accessToken});
        this.setState({refreshToken: response.data.refreshToken});
        console.log(this.state.accessToken);

        const code = response.data;
        console.log('code: ' + code);

        localStorage.setItem('user', email);
        console.log('Usuário: ' + localStorage.getItem('user'));

    }

    updateEmailValue = (event) => {
        this.setState({email: event.target.value});
    }

    updatePasswordValue = (event) => {
        this.setState({password: event.target.value});
    }

    render () {
        return (
            <div className="container">
                <img src={logo} alt="CEB"/> 
                <h1>Informativo CEB</h1>

                <div className="content">
                    <p>Login</p>
                    <form onSubmit={this.getAccessToken}>
                        <label htmlFor="email">E-MAIL</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="Digite seu e-mail"
                            onChange={this.updateEmailValue}
                        />

                        <br/>

                        <label htmlFor="senha">Senha</label>
                        <input
                            id="senha"
                            type="password"
                            placeholder="Digite sua senha"
                            onChange={this.updatePasswordValue}
                        />  
                        <button className="btn" type="submit">Autenticar</button>  
                    </form> 
                </div>
            </div>
        );
    }
}
