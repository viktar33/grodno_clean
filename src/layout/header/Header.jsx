import React from 'react';
import {MyHeader, Nav, NavLink, NavLinks} from "./StyledHeader";

const Header = () => {
    return (
        <MyHeader>
            <Nav>
                <NavLinks>
                    <NavLink href="/">Главная</NavLink>
                    <NavLink href="/services">Услуги</NavLink>
                    <NavLink href="/contactUs">Контакты</NavLink>
                </NavLinks>
            </Nav>
        </MyHeader>
    );
};


export default Header;