import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { cadastrar } from '../../store/reducers/contatos';
import { Campo, MainContainer, Titulo, CampoMask } from '../../styles';
import { BotaoCadastrar, Form } from './styles';

const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');


  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        email,
        telefone,
        id: 0
      })
    );
    navigate('/');
  };

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome do Contato"
          required
        />
        <CampoMask
          mask="(00) 00000-0000"
          value={telefone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTelefone(e.target.value)}
          placeholder="Telefone"
          required
        />
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="E-mail"
          type='email'
          required
        />
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </Form>
    </MainContainer>
  );
};

export default Formulario;