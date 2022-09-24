import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
   //reducer del estado inicial de la api
  },
})

// auth: authSlice.reducer,
//journal: journalSlice.reducer