import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { localStorageName } from '../../data/constant';
import persistedStateMiddleware from './middleware/persistedStateMiddleware';

const reHydrateStore = () => {
  if (localStorage.getItem(`${localStorageName}`) !== null) {
    return JSON.parse(localStorage.getItem(`${localStorageName}`)); 
  }
};


const store = configureStore({
  reducer: rootReducer,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistedStateMiddleware),
})

export default store
