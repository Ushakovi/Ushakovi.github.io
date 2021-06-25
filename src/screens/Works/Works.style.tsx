import styled from "styled-components";

export const List = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 930px) {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    display: block;
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const Button = styled.a`
    width: 13%;
    height: 13%;
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 20px 'Museo Black', sans-serif;
    text-decoration: none;
    border: 2px solid #fff;
    color: #fff;
    background-color: transparent;
    transition: all 0.5s;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`;

export const Block = styled.div`
    width: 50%;
    box-shadow: 5px 5px 15px -5px #000;
    position: relative;
    & + & {
        margin-left: 5%;
    }
    &:hover ${Overlay}{
        opacity: 1;
        visibility: visible;
    }
    @media (max-width: 930px) {
        width: 80%;
        & + & {
            margin-left: 0;
            margin-top: 5%;
        }
    }
`;