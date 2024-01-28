import React from 'react';

function Theme({ menuVisible, toggleMenu, setDefaultTheme, setWhiteTheme }) {
  return (
    <>
      {menuVisible && 
        <div className='menu-theme'>
          <ul>
            <li>Temas</li>
            <li onClick={setDefaultTheme}>Padrão</li>
            <li onClick={setWhiteTheme}>Claro</li>
          </ul>
        </div>
      }
    </>
  );
}

export default Theme;
