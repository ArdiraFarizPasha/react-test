import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemList: [],
}

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setItemList = (state, action) => {
      state.itemList = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setItemList } = storeSlice.actions

export default storeSlice.reducer