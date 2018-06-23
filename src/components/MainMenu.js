import * as React from 'react';
import Link from 'gatsby-link';

const MainMenu = () => (
	<nav className="main-menu">
		<ul className="main-menu__links">
			<li className="main-menu__link-wrapper"><Link className="main-menu__link" to="/">Home</Link></li>
			<li className="main-menu__link-wrapper"><Link className="main-menu__link" to="/">About us</Link></li>
			<li className="main-menu__link-wrapper"><Link className="main-menu__link" to="/">Services</Link></li>
			<li className="main-menu__link-wrapper"><Link className="main-menu__link" to="/">News</Link></li>
			<li className="main-menu__link-wrapper"><Link className="main-menu__link" to="/">Locations</Link></li>
			<li className="main-menu__link-wrapper"><Link className="main-menu__link" to="/">Contact</Link></li>
		</ul>
		<div className="main-menu__search" />
	</nav>
);
export default MainMenu;