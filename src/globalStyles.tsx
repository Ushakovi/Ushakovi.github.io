import styled, { createGlobalStyle } from 'styled-components';
import { TransitionGroup } from 'react-transition-group';
import mediumEot from './assets/fonts/MuseoSansCyrl-500.eot';
import mediumTtf from './assets/fonts/MuseoSansCyrl-500.ttf';
import mediumWoff from './assets/fonts/MuseoSansCyrl-500.woff';
import blackEot from './assets/fonts/MuseoSansCyrl-900.eot';
import blackTtf from './assets/fonts/MuseoSansCyrl-900.ttf';
import blackWoff from './assets/fonts/MuseoSansCyrl-900.woff';
import mainBg from './assets/img/header_bg.png';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Museo Medium';
        src: url(${mediumEot}) format('eot'), url(${mediumTtf}) format('ttf'), url(${mediumWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Museo Black';
        src: url(${blackEot}) format('eot'), url(${blackTtf}) format('ttf'), url(${blackWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: 18px 'Museo Medium', sans-serif;
    }
`;

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 110px 0 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${mainBg}) no-repeat top/cover;
    overflow: hidden;
`;

export const ScreenWrapper = styled(TransitionGroup)<{ showContent: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({ showContent }) => showContent ? '1' : '0'};
    transition: all 0.5s;
`;

export const AnimationWrapper = styled.div`
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    &.page-enter {
        opacity: 0;
        transform: scale(1.1);
    }
    &.page-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 0.5s;
    }
    &.page-exit {
        opacity: 1;
        transform: scale(1);
    }
    &.page-exit-active {
        opacity: 0;
        transform: scale(0.9);
        transition: all 0.5s;
    }
`;