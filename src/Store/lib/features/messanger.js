import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:{},
}

export const messanger = createSlice({
  name: 'messanger',
  initialState,
  reducers: {
    setSelectedItem: (state, action) => {
      console.log(action.payload)
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedItem } = messanger.actions

export default messanger.reducer