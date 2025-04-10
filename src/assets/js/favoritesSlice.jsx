import {createSlice} from "@reduxjs/toolkit";
const initialState = {};

export const favoritesSlice  = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorites: (state, action) => {
            const productId = action.payload;
            state[productId] = !state[productId];
        },
        setFavorites: (state, action) => {
            return action.payload;
        }
    }
})

export const { toggleFavorites, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;