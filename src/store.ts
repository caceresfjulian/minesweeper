import { configureStore } from '@reduxjs/toolkit'
import boardSlice from './features/board/boardSlice'

export const store = configureStore({
  reducer: {
    board: boardSlice
  },
  devTools: process.env.NODE_ENV === 'development'
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
