import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './styles';

import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos';
import { Botao, BotaoSalvar, Campo, CampoMask } from '../../styles';

type Props = ContatoClass;

const Contato = ({
    email: emailOriginal,
    telefone: telefoneOriginal,
    nome,
    id
}: Props) => {
    const dispatch = useDispatch()

    const [estaEditando, setEstaEditando] = useState(false)
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    useEffect(() => {
        if (emailOriginal.length > 0) {
            setEmail(emailOriginal);
        };
    }, [emailOriginal]);

    useEffect(() => {
        if (telefoneOriginal.length > 0) {
            setTelefone(telefoneOriginal);
        };
    }, [telefoneOriginal]);

    function cancelarEdicao() {
        setEstaEditando(false);
        setEmail(emailOriginal);
        setTelefone(telefoneOriginal);
    };

    return (
        <S.Card>
            <label htmlFor={nome}>
                <S.Titulo>
                    {estaEditando && <em>Editando: </em>}
                    {nome}
                </S.Titulo>
            </label>
            <CampoMask
                mask="(00) 00000-0000"
                disabled={!estaEditando}
                value={telefone}
                onChange={(evento: React.ChangeEvent<HTMLInputElement>) => setTelefone(evento.target.value)}
            />
            <Campo
                disabled={!estaEditando}
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
            />
            <S.BarraAcoes>
                {estaEditando ? (
                    <>
                        <BotaoSalvar
                            onClick={() => {
                                dispatch(
                                    editar({
                                        email,
                                        telefone,
                                        nome,
                                        id
                                    })
                                )
                                setEstaEditando(false)
                            }}
                        >
                            Salvar
                        </BotaoSalvar>
                        <S.BotaoCancearRemover onClick={cancelarEdicao}>
                            Cancelar
                        </S.BotaoCancearRemover>
                    </>
                ) : (
                    <>
                        <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                        <S.BotaoCancearRemover onClick={() => dispatch(remover(id))}>
                            Remover
                        </S.BotaoCancearRemover>
                    </>
                )}
            </S.BarraAcoes>
        </S.Card>
    )
}
export default Contato