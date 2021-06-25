import styled from "styled-components";

export const List = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1100px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const Block = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    width: 24%;
    max-width: 350px;
    height: 530px;
    border: 2px solid #000;
    border-radius: 20px;
    box-shadow: 5px 5px 15px -5px #000;
    padding: 25px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    @media (max-width: 1100px) {
        min-width: 40vw;
        height: 300px;
        overflow-y: scroll;
        &:nth-child(2n) {
            margin-left: 10px;
        }
        &:nth-child(1),
        &:nth-child(2) {
            margin-bottom: 10px;
        }
    }
    @media (max-width: 460px) {
        min-width: 80vw;
        height: 140px;
        margin: 0;
        &:not(:first-child) {
            margin-top: 10px
        }
    }
`;

export const Image = styled.img`
    display: block;
    width: 80px;
    max-width: 100%;
    margin: 0 auto 5px;
    @media (max-width: 460px) {
        display: none;
    }
`;

export const Subtitle = styled.p`
    font-family: 'Museo Black', sans-serif;
    font-size: 30px;
    margin-bottom: 10px;
    @media (max-width: 1100px) {
        font-size: 2.5vw;
    }
    @media (max-width: 450px) {
        font-size: 3.5vw;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.p`
    font-size: 20px;
    margin-bottom: 5px;
    @media (max-width: 1100px) {
        font-size: 2vw;
    }
    @media (max-width: 450px) {
        font-size: 3vw;
    }
`;