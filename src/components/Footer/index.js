import React, { Component } from 'react';
import './styles.css';

function Footer() {
  return (
    <div id="footer-div">
      {/*Logo com link
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      */}
      <div id="text-div">
        <p>
          Desenvolvido por <a href="/">Cheng Softwares</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;  