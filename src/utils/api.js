export const BASE_URL = 'http://localhost:4000'

export const GET_ALL_ITEMS = `${BASE_URL}/items`
export const ADD_NEW_ITEM = `${BASE_URL}/items`
export const UPDATE_ITEM_DATA = (id) => `${BASE_URL}/items/${id}`
export const DELETE_ITEM = (id) => `${BASE_URL}/items/${id}`