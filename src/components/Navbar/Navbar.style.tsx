import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavList = styled.nav<{ showContent: boolean; showNav: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30px;
    opacity: ${({ showContent }) => (showContent ? '1' : '0')};
    transition: all 0.5s;
    @media (max-width: 550px) {
        width: 70%;
        padding: 30px 50px;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.8);
        position: absolute;
        left: 15%;
        top: 10%;
        z-index: 1;
        opacity: ${({ showNav }) => (showNav ? '1': '0')};
        visibility: ${({ showNav }) => (showNav ? 'visible': 'hidden')};
        transform: ${({ showNav }) => (showNav ? 'translate(0px, 0px)': 'translate(-40px, -40px)')};
        @media (max-height: 750px) {
            top: 12%;
        }
    }
`;

export const NavLink = styled(Link)<{ active?: boolean }>`
    font-family: 'Museo Black', sans-serif;
    color: ${({ active }) => (active ? '#000' : '#fff')};
    background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    border: 3px solid transparent;
    transition: all 0.5s;
    padding: 10px 20px;
    & + & {
        margin-left: 10px;
    }
    &:hover {
        border: 3px solid #fff;
    }
    &:focus,
    &:active {
        outline: none;
    }
    @media (max-width: 550px) {
        width: 100%;
        & + & {
            margin-left: 0px;
        }
    }
`;