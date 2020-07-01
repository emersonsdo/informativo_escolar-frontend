import React, { Component } from 'react';
import Routes from '../../components/routes';
import './styles.css'

//Stateless component. Componentes formados apenas por funções, e tem esse
//const Header = () => (
//    <header id="main-header">Informativo CEB</header>
//); 

//export default Header;

export default class Header extends Component {

    logout = () => {
        localStorage.clear();
        this.context.Routes.push('/')
    }

    render() {
       return (
           <div className="header-container">
               <div className = "header-text">
                    <header id="main-header">Informativo CEB</header>
               </div>
               
               <div className = "header-logout-button">
                    <button className="logout-btn" type="submit" onClick={this.logout}>Sair</button>
               </div>
           </div>
       );
    }
}