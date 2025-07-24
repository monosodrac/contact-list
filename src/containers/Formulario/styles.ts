import styled from 'styled-components';
import { IMaskInput } from 'react-imask';

import { Botao } from '../../styles';
import variaveis from '../../styles/variaveis';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 2px solid #000;
  border-radius: 10px;
  width: 50rem;
  font-size: 14px;
  font-weight: blod;
  background-color: #eee;
  color: #666666;
`

export const CampoMask = styled(IMaskInput)`
    padding: 8px;
    border-radius: 8px;
    border-color: #666666;
    width: 100%;
    font-weight: bold;
    background-color: '#fff';
    color: #666666;
`

export const BotaoCadastrar = styled(Botao)`
  background-color: ${variaveis.verde};
  transition: .3s;
  border: 2px solid transparent;
  
  &:hover {
    border-color: ${variaveis.verde};
    background-color: #fff;
    color: ${variaveis.verde};
    transition: .3s;
  }
`