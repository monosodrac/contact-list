import styled, { createGlobalStyle } from 'styled-components';
import { IMaskInput } from 'react-imask';

import variaveis from './variaveis';

const EstiloGlobal = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:Roboto, sans-serif;
        list-style:none;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const MainContainer = styled.main`
    margin: 0 auto;
    padding: 0 40px;
`

export const Titulo = styled.h2`
    display: block;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 18px;
    font-weight: bold;
`

export const Campo = styled.input`
    margin: 1rem 0;
    padding: 8px;
    border-radius: 8px;
    border-color: #666666;
    width: 100%;
    font-weight: bold;
    background-color: '#fff';
    color: #666666;
`

export const CampoMask = styled(IMaskInput)`
    padding: 8px;
    margin: 1rem 0;
    border-radius: 8px;
    border-color: #666666;
    width: 100%;
    font-weight: bold;
    background-color: '#fff';
    color: #666666;
`

export const Botao = styled.button`
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: ${variaveis.azulEscuro};
    border-radius: 8px;
    margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
    background-color: ${variaveis.verde};
`

export default EstiloGlobal