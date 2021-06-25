import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { rootStore } from '../../store/reducers/rootReducer';
import { NavList, NavLink } from './Navbar.style';
import BurgerButton from './BurgerButton'


const Navbar: React.FC = () => {
    const [showNav, setShowNav] = useState<boolean>(false);
    const location = useLocation();
    const { showContent } = useSelector((state: rootStore) => state.app);
    return (
        <>
            <BurgerButton showNav={showNav} setShowNav={setShowNav}/>
            <NavList {...{showContent, showNav}}>
                <NavLink to="/" {...(location.pathname == '/' && { active: true })} onClick={() => setShowNav(false)}>Main</NavLink>
                <NavLink to="/skills" {...(location.pathname.includes('/skills') && { active: true })} onClick={() => setShowNav(false)}>My skills</NavLink>
                <NavLink to="/works" {...(location.pathname.includes('/works') && { active: true })} onClick={() => setShowNav(false)}>Works</NavLink>
                <NavLink to="/contacts" {...(location.pathname.includes('/contacts') && { active: true })} onClick={() => setShowNav(false)}>Contacts</NavLink>
            </NavList>
        </>
    );
};

export default Navbar;