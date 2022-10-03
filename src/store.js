import { configureStore } from '@reduxjs/toolkit'
import { atmosphereSlice } from './slice'

export const store = configureStore({
  reducer: {
   //reducer del estado inicial de la api
    atmosphere: atmosphereSlice.reducer
  },
})
