import styled from "styled-components";

export const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Link = styled.a`
    & + & {
        margin-left: 60px;
    }
`;

export const Image = styled.img`
    width: 200px;
    max-width: 100%;
    height: auto;
`;