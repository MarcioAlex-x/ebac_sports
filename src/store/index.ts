import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import favoritesReducer from './slices/favoriteSlice'
import { productsApi } from './api/productsApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
