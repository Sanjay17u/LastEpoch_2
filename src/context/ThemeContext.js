import React, { createContext, useContext, useState } from "react"

const ThemeContext = createContext()

const darkTheme = {
  background: "black",
  text: "white",
  card: "#222",
  button: "#4CAF50"
}

const lightTheme = {
  background: "white",
  text: "black",
  card: "#eee",
  button: "#4CAF50"
}

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(darkTheme)

  const toggleTheme = () => {

    setTheme(prev =>
      prev === darkTheme ? lightTheme : darkTheme
    )

  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}