import { configureStore } from '@reduxjs/toolkit'
import youtubeReducer from '../features/youtube/youtubeSlice'

export const store = configureStore({
  reducer: {
    youtubeApp: youtubeReducer
  },
})