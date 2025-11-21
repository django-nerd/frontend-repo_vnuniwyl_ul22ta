import { createContext, useContext } from 'react'

export const palette = {
  gold: '#D4AF37',
  brown: '#8B4513',
  beige: '#F5F5DC',
  cream: '#FDF6E3',
}

const ThemeContext = createContext(palette)

export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={palette}>{children}</ThemeContext.Provider>
  )
}
