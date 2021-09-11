import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemList: [],
  isModalAddNew: false,
  isModalDetail: false
}

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setItemList: (state, action) => {
      state.itemList = action.payload
    },
    handleDeleteItemFromList: (state,action) => {
      const itemId = action.payload;
      state.itemList = state.itemList.filter(item => item.id !== itemId);
    },
    handleAddNewItemToList: (state, action) => {
      
    },
    setOpenModalAddNew: (state, action) => {
      state.isModalAddNew = action.payload
    },
    setOpenModalDetail: (state, action) => {
      state.isModalDetail = action.payload
    }
  },
})

export const {
  setItemList,
  setOpenModalAddNew,
  setOpenModalDetail,
  handleDeleteItemFromList,
  handleAddNewItemToList
} = storeSlice.actions

export default storeSlice.reducer