import React, { useState } from 'react';


const Menu = () => {
    const [menuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  };


export default Menu;