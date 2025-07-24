import { useSelector } from 'react-redux';

import Contato from '../../components/Contato';
import { RootReducer } from '../../store';

import { MainContainer, Titulo } from '../../styles';
import { Card, Lista } from './styles';

const ListaDeContatos = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos);
    const { nome } = useSelector(
        (state: RootReducer) => state.filtro
    );

    const filtraContatos = () => {
        let contatosFiltradas = itens;
        if (nome !== undefined) {
            contatosFiltradas = contatosFiltradas.filter(
                (item) => item.nome.toLowerCase().search(nome.toLowerCase()) >= 0
            );
            return contatosFiltradas;
        } else {
            return itens;
        };
    };

    const exibeResultadoFiltragem = (quantidade: number) => {
        let mensagem = '';
        const complementacao = nome !== undefined && nome.length > 0 ? `"${nome}";` : '';

        if (!complementacao) {
            mensagem = `${quantidade} contato(s) encontrada(s)`;
        } else {
            mensagem = `${quantidade} contato(s) encontrada(s) como: ${complementacao}`;
        };
        return mensagem;
    };

    const contatos = filtraContatos();
    const mensagem = exibeResultadoFiltragem(contatos.length);

    return (
        <MainContainer>
            <Titulo as="p">{mensagem}</Titulo>
            <Lista>
                {contatos.map((t) => (
                    <Card key={t.nome}>
                        <Contato
                            id={t.id}
                            email={t.email}
                            telefone={t.telefone}
                            nome={t.nome}
                        />
                    </Card>
                ))}
            </Lista>
        </MainContainer>
    );
};

export default ListaDeContatos;