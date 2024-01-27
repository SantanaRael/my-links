import React, { useState, useEffect } from 'react';
import LinkCard from './components/LinkCard';
import { linksData } from './interfaces/linkData';
import './styles/theme_default/App.css';
import Theme from './components/Theme';
import Menu from './components/Menu';


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const MySvg = () => (
    <svg id="svg" viewBox="0 0 75 89" width="50px">
      <path d="M1,65.47C6.62,62.53,12.56,60.59,17.76,57.45C23.7,53.86,29.58,52.09,36.63,51.74C46.84,51.24,55.24,54.02,63.62,59.67C67.76,62.46,71.87,64.35,73.25,69.56C73.56,70.72,74.73,71.65,75.75,72.34C76,77.98,76,83.96,76,89.97C51.12,89.97,26.23,89.97,1,89.97C1,81.98,1,73.96,1,65.47z"/>
      <path fill="#0E0E0E" d="M47.53,1C48.39,1.71,48.6,2.7,49.21,3.1C56.67,8.09,58.83,15.05,57.06,23.57C56.45,26.48,55.97,29.41,55.01,32.45C51.89,29.5,49.77,25.11,46.37,23.63C39.6,20.68,32.32,23.08,25.89,25.72C22.97,26.92,21.3,31.18,19.07,34.05C17.53,27.7,13.51,22.03,16.47,14.62C18.62,9.25,22.47,6.74,26.81,4.14C28.14,3.33,29.46,2.49,30.89,1.34C36.35,1,41.71,1,47.53,1z"/>
      <path fill="#362513" d="M19.2,34.38C21.3,31.18,22.97,26.92,25.89,25.72C32.32,23.08,39.6,20.68,46.37,23.63C49.77,25.11,51.89,29.5,54.84,32.8C53.11,42.67,47.71,48.36,39.98,48.96C29.01,49.81,23.49,46,19.2,34.38z"/>
    </svg>
  );

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  return (
    <div className='app'>
      <i id="theme" className='bx bxs-color-fill' onClick={handleToggleMenu}></i>
       {menuVisible && <Theme />}
      <div id="perfil"><MySvg /></div>
      <p>Israel Santana</p>

      {linksData.map((link) => (
        <LinkCard key={link.name} link={getLinkWithConditionalName(link, windowWidth)} />
      ))}
      <p>© 2022 Copyright: Israel Santana</p>
    </div>
  );
}

function getLinkWithConditionalName(link, width) {
  if (width <= 500) {
    if (link.name === 'Acesse meu perfil no linkedin') {
      return { ...link, name: 'Meu perfil no LinkedIn' };
    } else if (link.name === 'Veja meus repositorios no github') {
      return { ...link, name: 'Explore meu GitHub' };
    } else if (link.name === 'Faça download do meu curriculo') {
      return { ...link, name: 'Baixe meu currículo' };
    } else if (link.name === 'Entre em contato comigo via e-mail') {
      return { ...link, name: 'Entre em Contato' };
    }
  }

  return link;
}

export default App;
