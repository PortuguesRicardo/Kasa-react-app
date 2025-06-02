import React from 'react'; //  JSX Transform becomes automatic. Keeping just in case. //
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="logo">Kasa</div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
    );
}

export default Header;