import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {},
    reducers: {
        toggleFavorites: (state, action) => {
            const productId = action.payload;
            if (state[productId]) {
                delete state[productId];
            } else {
                state[productId] = true;
            }
        }
    }
});

export const { toggleFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;