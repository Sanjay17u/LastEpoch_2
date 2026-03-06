import React from "react"

import { AuthProvider } from "../context/AuthContext"
import { PostsProvider } from "../context/PostsContext"
import { ThemeProvider } from "../context/ThemeContext"

export const AppProvider = ({ children }) => {

  return (
    <AuthProvider>
      <PostsProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </PostsProvider>
    </AuthProvider>
  )

}