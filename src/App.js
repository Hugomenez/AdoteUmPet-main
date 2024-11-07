import React, { useState } from 'react';
import '../src/style.css';
import '../src/HeadContent';
import Carousel from './components/carousel.jsx';
import Footer from './components/footer.jsx';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const [filters, setFilters] = useState({
    especie: '',
    tamanho: '',
    idade: '',
    sexo: '',
  });

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleFilterClick = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  const handleRadioChange = (filterCategory, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterCategory]: value,
    }));
  };

  return (
    <>
      <header style={{ display: 'flex' }} data-color="padrao" data-theme="dark">
        <div id="left">
          <a href="/" id="logo">
            <img src="src/imagens/LogoAdoteUmPet.png" alt="logo" />
          </a>
          <a href="/" id="logoText">Adote um Pet</a>
          <a className="la" href="/pet-faq/" id="duvidasFrequentes">Dúvidas frequentes</a>
          <p className="la" id="filtro" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
            Filtros <span className="small-arrow">&#9660;</span>
          </p>
          <span id="ajudaEncontrar">Ajude a encontrar</span>
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

      {showDropdown && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => handleFilterClick('especie')}>
            Espécie
            {activeFilter === 'especie' && (
              <div className="submenu">
                <label>
                  <input
                    type="radio"
                    name="especie"
                    value="cachorro"
                    checked={filters.especie === 'cachorro'}
                    onChange={() => handleRadioChange('especie', 'cachorro')}
                  />
                  Cachorro
                </label>
                <label>
                  <input
                    type="radio"
                    name="especie"
                    value="gato"
                    checked={filters.especie === 'gato'}
                    onChange={() => handleRadioChange('especie', 'gato')}
                  />
                  Gato
                </label>
              </div>
            )}
          </div>

          <div className="dropdown-item" onClick={() => handleFilterClick('tamanho')}>
            Tamanho
            {activeFilter === 'tamanho' && (
              <div className="submenu">
                <label>
                  <input
                    type="radio"
                    name="tamanho"
                    value="pequeno"
                    checked={filters.tamanho === 'pequeno'}
                    onChange={() => handleRadioChange('tamanho', 'pequeno')}
                  />
                  Pequeno
                </label>
                <label>
                  <input
                    type="radio"
                    name="tamanho"
                    value="medio"
                    checked={filters.tamanho === 'medio'}
                    onChange={() => handleRadioChange('tamanho', 'medio')}
                  />
                  Médio
                </label>
                <label>
                  <input
                    type="radio"
                    name="tamanho"
                    value="grande"
                    checked={filters.tamanho === 'grande'}
                    onChange={() => handleRadioChange('tamanho', 'grande')}
                  />
                  Grande
                </label>
              </div>
            )}
          </div>

          <div className="dropdown-item" onClick={() => handleFilterClick('idade')}>
            Idade
            {activeFilter === 'idade' && (
              <div className="submenu">
                <label>
                  <input
                    type="radio"
                    name="idade"
                    value="0-1"
                    checked={filters.idade === '0-1'}
                    onChange={() => handleRadioChange('idade', '0-1')}
                  />
                  0-1 ano
                </label>
                <label>
                  <input
                    type="radio"
                    name="idade"
                    value="1-3"
                    checked={filters.idade === '1-3'}
                    onChange={() => handleRadioChange('idade', '1-3')}
                  />
                  1-3 anos
                </label>
                <label>
                  <input
                    type="radio"
                    name="idade"
                    value="3-5"
                    checked={filters.idade === '3-5'}
                    onChange={() => handleRadioChange('idade', '3-5')}
                  />
                  3-5 anos
                </label>
                <label>
                  <input
                    type="radio"
                    name="idade"
                    value="5+"
                    checked={filters.idade === '5+'}
                    onChange={() => handleRadioChange('idade', '5+')}
                  />
                  5+
                </label>
              </div>
            )}
          </div>

          <div className="dropdown-item" onClick={() => handleFilterClick('sexo')}>
            Sexo
            {activeFilter === 'sexo' && (
              <div className="submenu">
                <label>
                  <input
                    type="radio"
                    name="sexo"
                    value="macho"
                    checked={filters.sexo === 'macho'}
                    onChange={() => handleRadioChange('sexo', 'macho')}
                  />
                  Macho
                </label>
                <label>
                  <input
                    type="radio"
                    name="sexo"
                    value="femea"
                    checked={filters.sexo === 'femea'}
                    onChange={() => handleRadioChange('sexo', 'femea')}
                  />
                  Fêmea
                </label>
              </div>
            )}
          </div>
        </div>
      )}

      <Carousel /> 

      <Footer /> 
    </>
  );
}

export default Header;
