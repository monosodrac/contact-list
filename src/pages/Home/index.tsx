import { BotaoAdicionar } from '../../components/Botoes';
import Header from '../../containers/Header';
import ListaContatos from '../../containers/ListaContatos';

const Home = () => (
    <>
        <Header mostrarFiltros />
        <ListaContatos />
        <BotaoAdicionar />
    </>
);

export default Home;