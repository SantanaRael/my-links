import React, { useState, useEffect } from 'react';
import LinkCard from './components/LinkCard';
import { links, linksData } from './interfaces/linkData';
import './styles/theme_default/App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='app'>
      <img id='perfil' src='https://raw.githubusercontent.com/SantanaRael/my-links/main/public/icons/perfil.jpeg' alt='Perfil' />
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

