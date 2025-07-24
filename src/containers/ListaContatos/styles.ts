import styled from 'styled-components';

export const Lista = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5%;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Card = styled.li`
    width: 15rem;
`