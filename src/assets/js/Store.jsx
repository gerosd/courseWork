import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';

const loadFromSessionStorage = () => {
    const savedFavorites = sessionStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : {};

};

const saveToSessionStorage = (state) => {
    sessionStorage.setItem('favorites', JSON.stringify(state));
};

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
    },
    preloadedState: {
        favorites: loadFromSessionStorage(),
    },
});

store.subscribe(() => {
    saveToSessionStorage(store.getState().favorites);
});