import React, { useEffect } from 'react';

function SetText({ setWindowWidth, link, width }) {
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWindowWidth]);

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

export default SetText;
