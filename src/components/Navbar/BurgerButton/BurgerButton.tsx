import React, { Dispatch, SetStateAction } from 'react';
import { Container, Element } from './BurgerButton.style';

interface IBurgerButtonProps {
    showNav: boolean,
    setShowNav: Dispatch<SetStateAction<boolean>>
}

const BurgerButton: React.FC<IBurgerButtonProps> = ({ showNav, setShowNav }) => {
    return (
        <Container onClick={() => setShowNav(!showNav)}>
            <Element />
            <Element />
            <Element />
        </Container>
    );
};

export default BurgerButton;