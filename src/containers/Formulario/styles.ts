import styled from 'styled-components'
import { IMaskInput } from 'react-imask'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  font-size: 14px;
  font-weight: blod;
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