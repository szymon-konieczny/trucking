import * as React from 'react';
import MainMenu from './MainMenu';

const Header = () => (
  <div className="header-wrapper">
    <div className="header">
      <div className="logo" />
      <MainMenu />
    </div>
  </div>
);

export default Header;
