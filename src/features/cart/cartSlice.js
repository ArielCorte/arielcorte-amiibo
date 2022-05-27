import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('cart')) || [],
  reducers: {
    addToCart(state, action) {
      if (action.payload in state) {
        state.find((prod) => prod.id === action.payload.id).qty++
      } else {
        state.push({ ...action.payload, qty: 1 })
      }
    },
    removeFromCart(state, action) {
      return state.filter((prod) => prod.id !== action.payload)
    },
    addQty(state, action) {
      if (state.find((prod) => prod.id === action.payload).qty < 99) {
        state.find((prod) => prod.id === action.payload).qty++
      }
    },
    subQty(state, action) {
      if (state.find((prod) => prod.id === action.payload).qty > 1) {
        state.find((prod) => prod.id === action.payload).qty--
      }
    },
    resetCart() {
      return []
    },
  },
})

export const { addToCart, removeFromCart, addQty, subQty, resetCart } =
  cartSlice.actions

export default cartSlice.reducer
