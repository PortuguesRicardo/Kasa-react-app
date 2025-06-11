import React from 'react'; //  JSX Transform becomes automatic. Keeping just in case. //
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';
import logo from '../assets/Kasa.svg';
function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Kasa Logo" />
            </div>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    About
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;