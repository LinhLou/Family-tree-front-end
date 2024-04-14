import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['loginForm/clientValidationUsername','loginForm/clientValidationPassword']
      },
    }),
})

export default store