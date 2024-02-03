import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:{},
}

export const audio = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setAudio: (state, action) => {
      console.log(action.payload)
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAudio } = audio.actions

export default audio.reducer