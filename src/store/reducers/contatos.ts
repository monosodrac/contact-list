import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Contato from "../../models/Contato";

type ContatosState = {
    itens: Contato[]
};

const initialState: ContatosState = {
    itens: [
        {
            id: 1,
            nome: 'Matheus',
            email: 'matheus@provedor.com',
            telefone: '11998567854',
        },
        {
            id: 2,
            nome: 'Rodrigo',
            email: 'rodrigo@provedor.com',
            telefone: '11991325487',
        },
        {
            id: 3,
            nome: 'Carla',
            email: 'carla@@provedor.com',
            telefone: '11968579426',
        },
    ]
}

const tarefaSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((contato) => contato.id !== action.payload)
            ]
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexContato = state.itens.findIndex(
                (c) => c.id === action.payload.id
            );
            if (indexContato >= 0) {
                state.itens[indexContato] = action.payload;
            };
        },
        cadastrar: (state, action: PayloadAction<Omit<Contato, 'Id'>>) => {
            const ContatoExiste = state.itens.find(
                (Contato) =>
                    Contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
            );
            if (ContatoExiste) {
                alert("Já existe um contato de mesmo nome!");
            } else {
                const ultimoContato = state.itens[state.itens.length - 1];

                const novoContato = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                };
                state.itens.push(novoContato);
            };
        },
    },
});

export const { remover, editar, cadastrar } = tarefaSlice.actions;
export default tarefaSlice.reducer;