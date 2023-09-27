import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import InputList from '../InputList/InputList';
import iconSun from '../../images/icon-sun.svg';
import iconMoon from '../../images/icon-moon.svg';
import './Header.css';

function Header() {

  const { theme, setTheme } = useContext(AppContext);

  function handleToggleTheme (event) {

    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));

    if (theme === 'light') {
      event.target.style.backgroundImage = `url('${iconSun}')`;
      document.documentElement.style.setProperty('--bg-color-active', 
        'var(--bg-color-dt)');
    } else {
      event.target.style.backgroundImage = `url('${iconMoon}')`;        
      document.documentElement.style.setProperty('--bg-color-active', 
        'var(--bg-color-lt)');
    }
  }

  return (
    <header id="header">
      <div className="header_wrap">
        <div className="header-image"></div>
      </div>
      <div className="header-menu">
        <h1 className="title">TODO</h1>
        <button onClick={handleToggleTheme} aria-label="Button-Theme" className="button-theme"></button>
      </div>
      <InputList/>
    </header>
  );
}

export default Header;
