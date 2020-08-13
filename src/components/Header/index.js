import React, { Component } from 'react';
import history from '../../utils/history';
import './styles.css'

export default class Header extends Component {

    logout = () => {
        localStorage.clear();
        history.push('/');
    }

    render() {
       return (
           <div className="header-container">
               <div className = "header-text">
                    <header id="main-header">Informativo CEB</header>
               </div>
               
               <div className = "header-logout-button">
                    <button id="logout-btn" type="submit" onClick={this.logout}>Sair</button>
               </div>
           </div>
       );
    }
}