import React from 'react';
import LinkWrapper from './linkWrapper';

const Header = () => {
    return (
        <nav className="indigo lighten-2">
            <div className="container nav-wrapper">
                <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Casa do Código</LinkWrapper>
                <ul className="right">
                    <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
                    <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
                    <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;