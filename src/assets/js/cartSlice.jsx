import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productId = action.payload.id;
            if (!state[productId]) {
                state[productId] = { id: productId, quantity: 1 };
            } else {
                state[productId].quantity += 1;
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            delete state[productId];
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;