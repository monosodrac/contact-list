import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltroState = {
    termo?: string
    criterio: 'todas'
};

const initialState: FiltroState = {
    termo: '',
    criterio: 'todas'
}

const FiltroSlice = createSlice({
    name: 'filtro',
    initialState,
    reducers: {
        alterarTermo: (state, action: PayloadAction<string>) => {
            state.termo = action.payload;
        },
        alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
            state.criterio = action.payload.criterio;
        },
    },
});

export const { alterarTermo, alterarFiltro } = FiltroSlice.actions;
export default FiltroSlice.reducer;