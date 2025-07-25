import { Link } from 'react-router-dom';
import styled from "styled-components";
import variaveis from '../../styles/variaveis';

export const Adiciona = styled(Link)`
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 64px;
    width: 64px;
    font-size: 40px;
    background-color: ${variaveis.verde};
    color: #fff;
    text-decoration: none;
`

export const Voltar = styled(Link)`
    position: fixed;
    bottom: 40px;
    left: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 64px;
    width: 64px;
    font-size: 40px;
    background-color: ${variaveis.azulEscuro};
    color: #fff;
    text-decoration: none;
`