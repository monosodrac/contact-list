import { IoIosArrowBack } from "react-icons/io";

import * as S from './styles';

const BotaoAdicionar = () => <S.Adiciona to="/novo">+</S.Adiciona>

const BotaoVoltar = () => <S.Voltar to="/"><IoIosArrowBack /></S.Voltar>

export { BotaoAdicionar, BotaoVoltar };