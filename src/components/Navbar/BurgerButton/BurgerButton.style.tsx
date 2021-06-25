import styled from "styled-components";

export const Container = styled.div`
    width: 50px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 30px;
    left: 20px;
    cursor: pointer;
    transition: all 0.5s;
    opacity: 0;
    visibility: hidden;
    @media (max-width: 550px) {
        opacity: 1;
        visibility: visible;
    }
`;

export const Element = styled.span`
    width: 40px;
    height: 7px;
    background-color: #fff;
    border-radius: 50px;
    transition: all 0.5s;
`;