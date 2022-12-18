import React from 'react';
import headerLogo from '../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Header({headerLink}) {

    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="логотип" />
            <Link className="header__link" to={headerLink.route}>{headerLink.name}</Link>
        </header>
    )
}

export default Header