import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface MainState {
    isOpen: boolean;
}

const initialState: MainState = {
    isOpen: false,
};

export const commonSlice = createSlice({
    name: 'mainState',
    initialState,
    reducers: {
        openCloseDrawer: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
    },
});

export const { openCloseDrawer } = commonSlice.actions;

export const isOpen = (state: RootState) => state.common.isOpen;

export default commonSlice.reducer;
