import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'

export type Props = {
    legenda: string
    criterio: 'prioridade' | 'status' | 'todas'
}

const FiltroCard = ({ legenda, criterio }: Props) => {
    const dispatch = useDispatch()
    const { filtro, contatos } = useSelector((state: RootReducer) => state)
    const verificaEstaAtivo = () => {
        const mesmoCriterio = filtro.criterio === criterio

        return mesmoCriterio
    }

    const contarTarefas = () => {
        if (criterio === 'todas') return contatos.itens.length
    }

    const filtrar = () => {
        dispatch(
            alterarFiltro({
                criterio: 'todas',
            })
        )
    };

    const contador = contarTarefas();
    const ativo = verificaEstaAtivo();

    return (
        <S.Card ativo={ativo} onClick={filtrar}>
            <S.Contador>{contador}</S.Contador>
            <S.Label>{legenda}</S.Label>
        </S.Card>
    );
};

export default FiltroCard;