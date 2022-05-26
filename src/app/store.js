import { configureStore } from '@reduxjs/toolkit'
import products from '../features/products/productsSlice'
import cart from '../features/cart/cartSlice'

export default configureStore({
  reducer: {
    products,
    cart,
  },
})
