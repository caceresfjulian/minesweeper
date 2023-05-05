import { createSlice } from '@reduxjs/toolkit'
import { baseTheme, lightTheme, type Theme } from '../../theming/theme'

export interface ThemeState {
  theme: Theme
}

const initialState: Theme = baseTheme

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return JSON.stringify(state) === JSON.stringify(baseTheme) ? lightTheme : baseTheme
    }
  }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
