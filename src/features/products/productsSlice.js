import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (obj, { dispatch }) => {
    return fetch('https://www.amiiboapi.com/api/amiibo/')
      .then((res) => res.json())
      .then((data) => dispatch(setProductsList(data.amiibo.slice(0, 12))))
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
    setProductsList: (state, action) => {
      state.list = action.payload
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = 'success'
    },
    [getProducts.rejected]: (state, action) => {
      state.list = action.payload
      state.status = 'failed'
    },
  },
})

export const { setProductsList } = productsSlice.actions

export default productsSlice.reducer
