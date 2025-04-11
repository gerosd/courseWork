import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.jsx";

const loadCartFromSessionStorage = () => {
    const cartProducts = sessionStorage.getItem('cartProducts');
    return cartProducts ? JSON.parse(cartProducts) : {};
}

const saveCartToSessionStorage = (state) => {
    sessionStorage.setItem('cartProducts', JSON.stringify(state.carts));
}

export const cartStore = configureStore({
    reducer: {
        carts: cartReducer,
    },
    preloadedState: {
        carts: loadCartFromSessionStorage(),
    }
});

cartStore.subscribe(() => {
    saveCartToSessionStorage(cartStore.getState());
})