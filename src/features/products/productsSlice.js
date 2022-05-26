import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
  },
  reducers: {
    setProductsList: (state, action) => {
      state.list = action.payload
    },
  },
})

export const { setProductsList } = productsSlice.actions

export default productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
  fetch('https://www.amiiboapi.com/api/amiibo/', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch(setProductsList(data.amiibo.slice(0, 12))))
}
