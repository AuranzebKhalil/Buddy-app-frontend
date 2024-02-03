import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:false,
}

export const loader = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setloader: (state, action) => {
      console.log(action.payload)
      state.value = action.payload;
    },
  },
})

export const { setloader } = loader.actions

export default loader.reducer