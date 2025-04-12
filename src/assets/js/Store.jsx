import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import cartReducer from './cartSlice';

const loadInitialState = () => ({
    favorites: JSON.parse(sessionStorage.getItem('favorites')) || {},
    cart: JSON.parse(sessionStorage.getItem('cartProducts')) || {}
});

const saveToSessionStorage = (state) => {
    sessionStorage.setItem('favorites', JSON.stringify(state.favorites));
    sessionStorage.setItem('cartProducts', JSON.stringify(state.cart));
};

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        cart: cartReducer
    },
    preloadedState: loadInitialState()
});

store.subscribe(() => {
    saveToSessionStorage(store.getState());
});