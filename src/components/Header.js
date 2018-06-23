import * as React from 'react';
import MainMenu from './MainMenu';
import logo from '../images/logo.png';

const Header = () => (
  <div className="header-wrapper">
    <div className="header">
      <img src={ logo } />
      <MainMenu />
    </div>
  </div>
);

export default Header;
