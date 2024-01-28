import React, { useState, useEffect } from 'react';
import { linksData } from './domain/linkData';
import LinkCard from './components/LinkCard';
import SetText from './components/SetText';
import Theme from './components/Theme';
import Menu from './components/Menu'
import SVG from './components/Svg';
import './styles/themes/App.default.css';
import './styles/themes/App.white.css';


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { menuVisible, toggleMenu } = Menu();
  const [currentTheme, setTheme] = useState('default');

  const setWhiteTheme = () => {
    setTheme("white");
    toggleMenu();
  };

  const setDefaultTheme = () => {
    setTheme("default");
    toggleMenu();
  };

  return (
    <div className={`app-${currentTheme}`}>
      <i id="theme" className='bx bxs-color-fill' onClick={toggleMenu}></i>
      <Theme menuVisible={menuVisible} setDefaultTheme={setDefaultTheme} setWhiteTheme={setWhiteTheme} />
      <div id="perfil"><SVG /></div>
      <p>Israel Santana</p>
      {linksData.map((link) => (
        <LinkCard key={link.name} link={SetText({ setWindowWidth, link, width: windowWidth })} />
      ))}
      <p>© 2022 Copyright: Israel Santana</p>
    </div>
  );
}

export default App;
