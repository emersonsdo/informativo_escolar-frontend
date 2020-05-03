import React, { Component } from 'react';
import api from '../../services/api';


export default class Main extends Component {
    //método executado assim que a página carrega
    componentDidMount() {
        this.testConection();
    }

    testConection = async () => {
        const response = await api.post('/auth');/*, { 
            body: {
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
