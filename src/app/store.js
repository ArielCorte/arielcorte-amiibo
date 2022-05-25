import { configureStore } from '@reduxjs/toolkit'
import products from '../features/products/productsSlice'

export default configureStore({
  reducer: {
    products,
  },
})
