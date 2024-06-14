import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { Produto } from '../../App'

interface FavoritesState {
  items: Produto[]
}

const initialState: FavoritesState = {
  items: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Produto>) {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id)
      if (existingIndex !== -1) {
        state.items.splice(existingIndex, 1)
      } else {
        state.items.push(action.payload)
      }
    },
    // Outros reducers conforme necessário
  },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
