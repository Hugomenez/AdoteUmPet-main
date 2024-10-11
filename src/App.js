import React from 'react';
import '../src/style.css';

function Header() {
  return (
    <header style={{ display: 'flex' }} data-color="padrao" data-theme="dark">
      <div id="left">
        <a href="/" id="logo">
          <img src="/static/assets/img/LogoAdoteUmPet.png" alt="logo" />
        </a>
        <a href="/" id="logoText">Adote um Pet</a>
        <a className="la" href="/pet-faq/" id="duvidasFrequentes">Dúvidas frequentes</a>
        <p className="la" id="filtro">
          Filtros <span id="arrow">x</span>
        </p>
      </div>

      <div id="right" style={{ display: 'flex' }}>
        <i className="fi fi-br-menu-burger" id="menuIconMobile"></i>
        <div id="search" style={{ display: 'flex' }}>
          <i className="fi fi-br-search" id="searchIcon"></i>
          <input
            type="text"
            name="search"
            id="searchInp"
            placeholder="Pesquisar"
          />
        </div>
        <a href="/user/sign-in">
          <button id="entrar">Entrar</button>
        </a>
      </div>

      <div id="userNav" style={{ display: 'none' }}></div>
    </header>
  );
}

export default Header;
