import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltroState = {
    nome?: string
};

const initialState: FiltroState = {
    nome: '',
}

const FiltroSlice = createSlice({
    name: 'filtro',
    initialState,
    reducers: {
        alterarNome: (state, action: PayloadAction<string>) => {
            state.nome = action.payload;
        },
    },
});

export const { alterarNome } = FiltroSlice.actions;
export default FiltroSlice.reducer;