import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
    0% {
        transform: rotate(0deg);
        border-radius: 50%;
    }
    50% {
        transform: rotate(90deg);
        border-radius: 0%;
    }
    100% {
        transform: rotate(180deg);
        border-radius: 50%;
    }
`;

export const LoaderWrapper = styled.div<{ showLoader: boolean }>`
    width: 100%;
    height: 100%;
    background-color: #181b1e;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    transition: 0.5s all;
    opacity: ${({ showLoader }) => showLoader ? '1' : '0'};
    visibility: ${({ showLoader }) => showLoader ? 'visible' : 'hidden'};
`;

export const LoaderBlock = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 60px);
    left: calc(50% - 60px);
    vertical-align: middle;
    background-color: #fff;
    animation: ${loaderAnimation} 1.15s infinite linear;
`;