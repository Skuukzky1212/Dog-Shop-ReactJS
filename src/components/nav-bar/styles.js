import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    flex-direction: row;

    & > * {
        margin-left: 2rem;
        color: #9c6644;
        text-decoration: none;
        transition: 200ms ease-in-out;
    }

    & > *:hover {
        color: #e76f51;
    }

`;
