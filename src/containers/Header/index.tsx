import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootReducer } from '../../store';
import { alterarNome } from '../../store/reducers/filtro';
import { Botao, Campo } from '../../styles';
import * as S from './styles'

type Props = {
    mostrarFiltros: boolean
};

const Header = ({ mostrarFiltros }: Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { nome } = useSelector((state: RootReducer) => state.filtro);

    return (
        <S.Header>
            <div>
                {mostrarFiltros ? (
                    <>
                        <Campo
                            type="text"
                            placeholder="Buscar"
                            value={nome}
                            onChange={(evento) => dispatch(alterarNome(evento.target.value))}
                        />
                    </>
                ) : (
                    <Botao onClick={() => navigate('/')}>Voltar a lista de contatos</Botao>
                )}
            </div>
        </S.Header>
    );
};

export default Header;