import { configureStore } from '@reduxjs/toolkit'
import boardSlice from './features/board/boardSlice'
import themeSlice from './features/theme/themeSlice'

export const store = configureStore({
  reducer: {
    board: boardSlice,
    theme: themeSlice
  },
  devTools: process.env.NODE_ENV === 'development'
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
