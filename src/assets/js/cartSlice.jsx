import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productId = action.payload;
            if (state[productId]) {
                state[productId].quantity += 1;
            } else {
                state[productId] = { id: productId, quantity: 1 };
            }
        },
        removeFromCart: (state, action) => {
            delete state[action.payload];
        },
        increaseQuantity: (state, action) => {
            const productId = action.payload;
            if (state[productId]) {
                state[productId].quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const productId = action.payload;
            if (state[productId]) {
                if (state[productId].quantity > 1) {
                    state[productId].quantity -= 1;
                } else {
                    delete state[productId]; // Удаляем если количество стало 0
                }
            }
        },
        clearCart: () => {
            return {};
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;