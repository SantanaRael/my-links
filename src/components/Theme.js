import React from 'react';

function Theme({ menuVisible, setDefaultTheme, setWhiteTheme, setNeonTheme }) {
  return (
    <>
      {menuVisible && 
        <div className='menu-theme'>
          <ul>
            <li>Temas</li>
            <li onClick={setDefaultTheme}>Padrão</li>
            <li onClick={setWhiteTheme}>Claro</li>
            <li onClick={setNeonTheme}>Neon</li>
          </ul>
        </div>
      }
    </>
  );
}

export default Theme;
