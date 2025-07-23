import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'

import { RootReducer } from '../../store'
import { MainContainer, Titulo } from '../../styles'

const ListaDeContatos = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)
    const { termo, criterio, valor } = useSelector(
        (state: RootReducer) => state.filtro
    )

    const filtraContatos = () => {
        let contatosFiltradas = itens
        if (termo !== undefined) {
            contatosFiltradas = contatosFiltradas.filter(
                (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
            )
            return contatosFiltradas
        } else {
            return itens
        }
    }
    const exibeResultadoFiltrage = (quantidade: number) => {
        let mensagem = ''
        const complementacao =
            termo !== undefined && termo.length > 0 ? `e "${termo}";` : ''

        if (criterio === 'todas') {
            mensagem = `${quantidade} contato(s) encontrada(s) como: todas ${complementacao}`
        } else {
            mensagem = `${quantidade} contato(s) encontrada(s) como: "${`${criterio} = ${valor}`}" ${complementacao}`
        }
        return mensagem
    }

    const contatos = filtraContatos()
    const mensagem = exibeResultadoFiltrage(contatos.length)

    return (
        <MainContainer>
            <Titulo as="p">{mensagem}</Titulo>
            <ul>
                {contatos.map((t) => (
                    <li key={t.nome}>
                        <Contato
                            id={t.id}
                            email={t.email}
                            telefone={t.telefone}
                            nome={t.nome}
                        />
                    </li>
                ))}
            </ul>
        </MainContainer>
    )
}

export default ListaDeContatos