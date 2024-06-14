import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { Produto } from '../../App'

interface CartState {
  items: Produto[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Produto>) {
      state.items.push(action.payload)
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
