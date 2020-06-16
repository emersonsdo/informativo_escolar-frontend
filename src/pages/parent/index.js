import React, { Component } from 'react';
import api from '../../services/api';

export default class Parent extends Component {

    logout = () => {
        localStorage.clear();
    }

    render() {
       return (
           <div className='container'>
                <h1>Página principal do gerenciamento dos pais</h1>
                <button className="btn" type="submit" onClick={this.logout}>Sair</button>
            </div>
       );
    }
}