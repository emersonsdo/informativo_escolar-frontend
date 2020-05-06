import React, { Component } from 'react';
import api from '../../services/api';
import base64 from 'react-native-base64';


export default class Main extends Component {
    //método executado assim que a página carrega
    componentDidMount() {
        this.testConection();
    }

    testConection = async () => {
        const username = 'email_de_luisa@provedor.com';
        const password = '12345';

        const response = await api.post('/auth',
        {
            //TODO: Corrigir, mandar em cabeçalho
            headers:{'Authorization': 'Basic ' + base64.encode(username + ":" + password)}
        });
        /*console.log(baseURL);
        const response = await axios({
            method: 'POST',
            url: baseURL + '/auth',
            data: {
                'email': 'email_de_luisa@provedor.com',
                'password': '12345'
            }
        });*/     

        console.log(response);
    }

    render () {
        return <h1>Informativo CEEB</h1>;
    }
}
